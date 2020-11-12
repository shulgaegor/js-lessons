//шаблон gulpfile для полноценных макетов с использованиеи //препроцессоров, js, картинок и возможно шрифтов. 
//Плагины обязательные к установке:
//npm i --save-dev gulp gulp-less gulp-concat gulp-autoprefixer gulp-clean-css gulp-terser gulp-rename gulp-imagemin browser-sync del 
//>npm i  --save-dev  gulp-file-include //включаем один файл в другой

//Плагины которые, установка которых может понадобиться в будущем:
//>npm i --save-dev gulp-ttf2woff //конвертирует шрифты ttf в woff
//>npm i --save-dev gulp-ttf2woff2 //конвертирует шрифты ttf в woff2
//>npm i --save-dev gulp-fonter // конвертирует otf в ttf
//>npm i  --save-dev gulp-webp //конвертирует изображения в формат webp для еще большей оптимизации
//>npm i  --save-dev gulp-webp-html //подключаем  изображения в формате webp в html, а также оставит
//возможность просматривать изображение для браузеров, которые не поддерживают webp
//!!! Перед установкой плагина gulp-webpcss 
//Рекомендуется установить npm install webp-converter@2.2.3 --save-dev
//npm i  --save-dev gulp-webpcss
//gulp-webpcss создаст класс .webp для использования формата webp (это правило создается ровно после  
//аналогичного правила с картинкой старого формата)
//Для подключения данного класа в файл html используется специальная функция которая проверяет
//поддерживает ли браузер изображение webp. Если да, то добавляет класс к тэгу body класс .webp
//Также для грамотной встройки в проект поддержкт webp изображений, 
//необходимо подключать допонительную функцию на js, и создание переменных
//и функций в самой сборке - подробнее можно смотреть в сборке от FLS
let project_folder = "build";
let source_folder = "src";
//для автоматического подключения шрифтов к файлам стилей
//заведем специальную переменную, а в низу создадим ф-ю callback
let fs = require('fs');

let path = {
	build:{
		html: project_folder + '/',
		css: project_folder + '/css/',
		js: project_folder + '/js/',
		img: project_folder + '/img/',
		//fonts: project_folder + '/fonts/',
	},
	src:{
		html: [source_folder +"/*.html","!" + source_folder + "/_*.html"],
		less: source_folder +"/less/styles.less",
		js: source_folder +"/js/script.js",
		img: source_folder +"/img/**/*.{jpg,png,gif,svg,ico,web}",
		//fonts_woff: [source_folder +"/fonts/*.{woff2,woff}","!"+source_folder+"/fonts/*.ttf"],	
		//fonts: source_folder +"/fonts/*.ttf"
	},
	watch:{
		html: source_folder +"/**/*.html",
		less: source_folder +"/less/*.less",
		js: source_folder +"/js/**/*.js",
		img: source_folder +"/img/**/*.{jpg,png,gif,svg,ico,web}"
	},
	//обект который будет удалять каждый раз папку build при запуске
	clean:  "./"+project_folder+"/"	
}
//npm i --save-dev gulp gulp-less del gulp-file-include gulp-concat gulp-autoprefixer gulp-clean-css gulp-rename gulp-terser gulp-imagemin browser-sync
let {src,dest} = require("gulp"),
gulp= require("gulp"),//+
less = require("gulp-less"),//+
del = require("del"),//+
fileinclude = require("gulp-file-include"),//+
concat = require('gulp-concat'),//+
autoprefixer = require("gulp-autoprefixer"),//+
cleanCSS = require("gulp-clean-css"),//+
rename = require("gulp-rename"),//+
terser = require('gulp-terser'),//+
imagemin = require("gulp-imagemin"),//+
//ttf2woff = require("gulp-ttf2woff"),
//ttf2woff2 = require("gulp-ttf2woff2"),
//fonter = require("gulp-fonter"),
browsersync = require('browser-sync').create();//+

//функция для обновления страницы
function browserSync(params){
	browsersync.init({	
		server:{
		baseDir:"./"+project_folder+"/" //значение такое же как у clean
		},
		//порт по которому будет открываться браузер
		port:3000,
		//Возможность убрать оповещения в браузере о том, что он обновился
		notify:true 
	})
}

//функция для работы с html-файлом
function Html(){
	return src(path.src.html)
	//.pipe(fileinclude())
	//.pipe(webphtml())//вставляет самостоятельно конструкцию с подключение webp-изображений
	//если захотим включить в проект поддержку webp-изображений, то
	//доустановим соответствующие плагины и раскоментируем 2-верхних строчки
	//А пока перебросим файлы из исходной папки в папку назначения 
	.pipe(dest(path.build.html))
	//далее обновляем страницку
	.pipe(browsersync.stream())
}

//функция для обработки js-файлов
//функция также позволяет включать в основном файле скрипта, другие js-файлы
function Js(){
	return src(path.src.js)
	//объеденяем все файлы в один
	.pipe(fileinclude())
	//перебросим файлы из исходной папки в папку назначения build/js
	.pipe(dest(path.build.js))
	.pipe(terser({ //минимизируем и оптимизируем код js
      toplevel : true
    })) 
	.pipe(rename({
		extname:".min.js"  //перед очисткой переименуем его - это заказчику
	}))
	.pipe(dest(path.build.js))
	//далее обновляем страницку
	.pipe(browsersync.stream())
}//на выходе будет два js файла: один минимизированный для
//заказчика, а второй для разработчика

//функция для работы с less-файлами
function Less(){
	return src(path.src.less)
  //транслируем less в css
  .pipe(less())		
  //.pipe(autoprefixer())
  .pipe(autoprefixer({
		overrideBrowserList:["last 5 version"], //поддержка последних 5 версий браузеров
		cascade:true //стиль написания, каскадный
	}))
  .pipe(dest(path.build.css)) //перед переименовыванием, создадим его копию
  .pipe(browsersync.stream())
  .pipe(cleanCSS())
  .pipe(rename({
		extname:".min.css"  //после очистки переименуем его - это заказчику
	}))
	.pipe(dest(path.build.css)) //выгрузили, но уже версию styles.min.css
  .pipe(browsersync.stream())
  }

function Images(){
	return src(path.src.img)
	.pipe(imagemin({
		progressive:true,
		svgoPlugins:[{removeViewBox:false}],
		interlaced:true,
		optimizationLeve: 3 //0-7
	}))
//перебросим файлы из исходной папки в папку назначения (папку которую мы потом //будем отдавать заказчику)
	.pipe(dest(path.build.img))
	//далее обновляем страницку
	.pipe(browsersync.stream())
}  

//тут пока просто перекидываем шрифты из исходной папки
//в build, позже функцию можно будет усовершенствовать
//используя конвертацию ttf в woff/woff2
/*function Fonts(){
	src(path.src.fonts_woff)//подключаем исходники шрифтов
		.pipe(dest(path.build.fonts)) //выгружаем результат
	return src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts))	
}

gulp.task("otf2ttf", function(){
	return src([source_folder + "/fonts/*.otf"])
		.pipe(fonter({
			formats:["ttf"]
		}))
		//заметьте, что результат мы выгружаем не в папку с dist,
		//а в папку с исходниками
		.pipe(dest(source_folder + '/fonts/'));
})


//здесь будет функция записи шрифтов в специальный файл
//стилей fonts.less
function fontsStyle(params) {
	let _le_content = fs.readFileSync(source_folder + '/less/fonts.less');
	if (_le_content == '') {
		fs.writeFile(source_folder + '/less/fonts.less', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(source_folder + '/less/fonts.less', '.font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		})
	}
}//callback-функция которая необходима для корректной работы
function cb(){}
*/

//функция слежки за файлами
function watchFiles(params){
	gulp.watch([path.watch.html], Html)
	gulp.watch([path.watch.less], Less)
	gulp.watch([path.watch.js], Js)
	gulp.watch([path.watch.img], Images)
}

//функция удаления файлов
function Clean(params){
	return del(path.clean);
}

//для проверки работоспособности вышеописанной функции создадим еще некоторые 
//переменные – по сути это задачи которые запускают определенные функции
//подружили наши функцию с gulp
let build = gulp.series(Clean,gulp.parallel(Js,Less,Html,Images))
let watch = gulp.parallel(build,watchFiles,browserSync);
//exports.fontsStyle = fontsStyle;
//exports.Fonts = Fonts;
exports.Images = Images;
exports.Js = Js;
exports.Less = Less;
exports.build = build;
exports.Html = Html;
exports.watch = watch;
//последняя строка позволяет при запуске в терминале команды gulp 
//запустить watch, который в свою очередь запустит browserSync
exports.default = watch;