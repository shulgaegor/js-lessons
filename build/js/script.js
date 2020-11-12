
//Chapter 1 - Переменные
document.addEventListener("DOMContentLoaded", function(event){
 //example for using var
 var btnName1Less3Ch1 = document.getElementById("btnName1Less3Ch1")
 btnName1Less3Ch1.addEventListener("click", function() {
   var txt = 'Egor'
   txt = document.getElementById('txtName1Less3Ch1').value
   //console.log(txt)
   document.getElementById('txtOutName1Less3Ch1').innerHTML = txt
 })
 //reset field outtext
 let btnResetName1Less3Ch1 = document.getElementById('btnResetName1Less3Ch1')
 btnResetName1Less3Ch1.addEventListener('click', function(){
  document.getElementById('txtOutName1Less3Ch1').innerHTML =""
})
 //example for using let
 let btnName2Less3Ch1 = document.getElementById("btnName2Less3Ch1")
 btnName2Less3Ch1.addEventListener("click", function() {
  let txt = 'Ura'
  txt2 = document.getElementById('txtName2Less3Ch1').value
     document.getElementById('txtOutName2Less3Ch1').innerHTML = txt2
     //console.log(txt2)
   })
 //reset field outtext
 let btnResetName2Less3Ch1 = document.getElementById('btnResetName2Less3Ch1')
 btnResetName2Less3Ch1.addEventListener('click', function(){
  document.getElementById('txtOutName2Less3Ch1').innerHTML =""
})
 //example for using const 
 const btnName3Less3Ch1 = document.getElementById("btnName3Less3Ch1")
 btnName3Less3Ch1.addEventListener("click", function() {
  try{
    const txt3 = 'Ura'
    txt3 = document.getElementById('txtName3Less3Ch1').value
    document.getElementById('txtOutName3Less3Ch1').innerHTML = txt3
   // console.log(txt3)
  }
  catch (err) {
   errMsg = 'Нельзя переприсваивать значение константы: '+ err.name +' Более детальная информация: ' + err.message
     alert(errMsg); //my message + ReferenceError + error message
   }
   finally{
    document.getElementById('txtOutName3Less3Ch1').innerHTML = "Это поле не получит имя... "
   }
 })
//Chapter 2 - mutation
 let btnShowResultLess3Ch2 = document.getElementById("btnShowResultLess3Ch2")
 btnShowResultLess3Ch2.addEventListener("click", function() {   
   let str1Less3Ch2 = document.getElementById('txtFirstNameLess3Ch2').value
   let str2Less3Ch2 = document.getElementById('txtLastNameLess3Ch2').value
   let numLess3Ch2 = Number.parseInt(document.getElementById('txtAgeLess3Ch2').value) 
   let resLess3Ch2 = str1Less3Ch2 +' '+str2Less3Ch2+' ' + numLess3Ch2 + ' лет'
   document.getElementById('txtOutResultLess3Ch2').innerHTML = resLess3Ch2
   document.getElementById('txtOutResult2Less3Ch2').innerHTML = typeof(numLess3Ch2)
 })
 //reset field outtext
 let btnClearResultLess3Ch2 = document.getElementById('btnClearResultLess3Ch2')
 btnClearResultLess3Ch2.addEventListener('click', function(){
  document.getElementById('txtOutResultLess3Ch2').innerHTML =""
  document.getElementById('txtOutResult2Less3Ch2').innerHTML =""
 })
 //Chapter 2 - demo function promt
 let btnCallWinPromptLess3Ch2 = document.getElementById("btnCallWinPromptLess3Ch2")
 btnCallWinPromptLess3Ch2.addEventListener("click", function() {   
  const demoPromptValue = prompt('Введите что-нибудь...', '')
  document.getElementById('resultCallWinPromptLess3Ch2').innerHTML = demoPromptValue
 }) 
 //reset field outtext
 let btnResetCallWinPromptLess3Ch2 = document.getElementById('btnResetCallWinPromptLess3Ch2')
 btnResetCallWinPromptLess3Ch2.addEventListener('click', function(){
  document.getElementById('resultCallWinPromptLess3Ch2').innerHTML =""
 }) 
 //Chapter 3 - demo postfix and prefix operation
 let btnAPostfixLess3Ch3 = document.getElementById("btnAPostfixLess3Ch3")
 btnAPostfixLess3Ch3.addEventListener("click", function() {   
  let a = document.getElementById('txtAPostfixLess3Ch3').value
  document.getElementById('txtOutAPostfixLess3Ch3').innerHTML = a++
  document.getElementById('txtOutA2PostfixLess3Ch3').innerHTML = a
 }) 
 let btnAPrefixLess3Ch3 = document.getElementById("btnAPrefixLess3Ch3")
 btnAPrefixLess3Ch3.addEventListener("click", function() {   
  let a = document.getElementById('txtAPrefixLess3Ch3').value
  document.getElementById('txtOutAPrefixLess3Ch3').innerHTML = ++a
  document.getElementById('txtOutA2PrefixLess3Ch3').innerHTML = a
 })
  //reset field outtext
 let btnResetFieldAPostfixLess3Ch3 = document.getElementById('btnResetFieldAPostfixLess3Ch3')
 btnResetFieldAPostfixLess3Ch3.addEventListener('click', function(){
  document.getElementById('txtOutAPostfixLess3Ch3').innerHTML =""
  document.getElementById('txtOutA2PostfixLess3Ch3').innerHTML =""
 }) 
  let btnResetFieldAPrefixLess3Ch3 = document.getElementById('btnResetFieldAPrefixLess3Ch3')
 btnResetFieldAPrefixLess3Ch3.addEventListener('click', function(){
  document.getElementById('txtOutAPrefixLess3Ch3').innerHTML =""
  document.getElementById('txtOutA2PrefixLess3Ch3').innerHTML =""
 }) 
 //Chapter 4 - basic data types
 //Boolean
 let btnExampleBoolLess3Ch4 = document.getElementById("btnExampleBoolLess3Ch4")
 btnExampleBoolLess3Ch4.addEventListener("click", function() {   
  let isProgrammer = true
  document.getElementById('txtOutExampleBoolLess3Ch4').innerHTML = typeof(isProgrammer)
 }) 
//reset field outtext
 let btnResetFieldExamplBoolLess3Ch4 = document.getElementById("btnResetFieldExamplBoolLess3Ch4")
 btnResetFieldExamplBoolLess3Ch4.addEventListener("click", function() {   
  document.getElementById('txtOutExampleBoolLess3Ch4').innerHTML =""
 })
 //String
 let btnExampleStringLess3Ch4 = document.getElementById("btnExampleStringLess3Ch4")
 btnExampleStringLess3Ch4.addEventListener("click", function() {   
  let Name = 'Egor'
  document.getElementById('txtOutExampleStringLess3Ch4').innerHTML = typeof(Name)
 })    
//reset field outtext
 let btnResetFieldExampleStringLess3Ch4 = document.getElementById("btnResetFieldExampleStringLess3Ch4")
 btnResetFieldExampleStringLess3Ch4.addEventListener("click", function() {   
  document.getElementById('txtOutExampleStringLess3Ch4').innerHTML =""
 }) 
 //Number
 let btnExampleNumberLess3Ch4 = document.getElementById("btnExampleNumberLess3Ch4")
 btnExampleNumberLess3Ch4.addEventListener("click", function() {   
  let Age = 40
  document.getElementById('txtOutExampleNumberLess3Ch4').innerHTML = typeof(Age)
 })
//reset field outtext
 let btnResetFieldExampleNumberLess3Ch4 = document.getElementById("btnResetFieldExampleNumberLess3Ch4")
 btnResetFieldExampleNumberLess3Ch4.addEventListener("click", function() {   
  document.getElementById('txtOutExampleNumberLess3Ch4').innerHTML =""
 })     
 //Undefined
 let btnExampleUndefinedLess3Ch4 = document.getElementById("btnExampleUndefinedLess3Ch4")
 btnExampleUndefinedLess3Ch4.addEventListener("click", function() {   
  let Un = undefined
  document.getElementById('txtOutExampleUndefinedLess3Ch4').innerHTML = typeof(Un)
 })
//reset field outtext
 let btnResetFieldExampleUndefinedLess3Ch4 = document.getElementById("btnResetFieldExampleUndefinedLess3Ch4")
 btnResetFieldExampleUndefinedLess3Ch4.addEventListener("click", function() {   
  document.getElementById('txtOutExampleUndefinedLess3Ch4').innerHTML =""
 }) 
 //Null
 let btnExampleNullLess3Ch4 = document.getElementById("btnExampleNullLess3Ch4")
 btnExampleNullLess3Ch4.addEventListener("click", function() {   
  let varNull = null
  document.getElementById('txtOutExampleNullLess3Ch4').innerHTML = typeof(varNull)
 })
  //Chapter 5 - operator priorities  
 let btnfullAgeLess3Ch5 = document.getElementById("btnfullAgeLess3Ch5")
 btnfullAgeLess3Ch5.addEventListener("click", function() {   
  const fullAge = 40
  const birthAge = 1980
  const currentYear = 2020
  let isFullAge = currentYear - birthAge >= fullAge
  document.getElementById('txtOutfullAgeLess3Ch5').innerHTML = isFullAge
 }) 
//reset field outtext
 let btnResetfullAgeLess3Ch5 = document.getElementById("btnResetfullAgeLess3Ch5")
 btnResetfullAgeLess3Ch5.addEventListener("click", function() {   
  document.getElementById('txtOutfullAgeLess3Ch5').innerHTML =""
 })
 //Chapter 6 - conditional statements 
 let btnCondVar1Less3Ch6 = document.getElementById("btnCondVar1Less3Ch6")
 btnCondVar1Less3Ch6.addEventListener("click", function() {   
  const num = 40
  const str = '40'
  let res
  if(num == str){
    res = true
  } else res = false
  document.getElementById('txtOutCondVar1Less3Ch6').innerHTML = res
 })
 //reset field outtext
 let btnResetCondVar1Less3Ch6 = document.getElementById("btnResetCondVar1Less3Ch6")
 btnResetCondVar1Less3Ch6.addEventListener("click", function() {   
  document.getElementById('txtOutCondVar1Less3Ch6').innerHTML =""
 }) 
  let btnCondVar2Less3Ch6 = document.getElementById("btnCondVar2Less3Ch6")
 btnCondVar2Less3Ch6.addEventListener("click", function() {   
  const num = 40
  const str = '40'
  let res
  if(num === str){
    res = true
  } else res = false
  document.getElementById('txtOutCondVar2Less3Ch6').innerHTML = res
 })
  //reset field outtext
 let btnResetCondVar2Less3Ch6 = document.getElementById("btnResetCondVar2Less3Ch6")
 btnResetCondVar2Less3Ch6.addEventListener("click", function() {   
  document.getElementById('txtOutCondVar2Less3Ch6').innerHTML =""
 }) 
  let btnPracticaTernarLess3Ch6 = document.getElementById('btnPracticaTernarLess3Ch6')
  btnPracticaTernarLess3Ch6.addEventListener('click', function() {   
  const a = 40
  const b = 20
  let res
  res = a>b? a : b
  document.getElementById('txtOutPracticaTernarLess3Ch6').innerHTML = res
 }) 
 //reset field outtext  
 let btnResetPracticaTernarLess3Ch6 = document.getElementById("btnResetPracticaTernarLess3Ch6")
 btnResetPracticaTernarLess3Ch6.addEventListener("click", function() {   
  document.getElementById('txtOutPracticaTernarLess3Ch6').innerHTML =""
 }) 
 //Chapter 7 - logical operators 
 function GetBooleanValue(val){
  let Ret
  switch (val) {
    case 'true':
    Ret = true
    break;
    case 'false':
    Ret = false
    break
    default:
    Ret = val
  }
  return Ret
}
 //a && b
 const btnPracticaLogAndLess3Ch7 = document.getElementById('btnPracticaLogAndLess3Ch7')
 btnPracticaLogAndLess3Ch7.addEventListener('click', function() {   
  let indexSel1LogAndLess3Ch7 = document.getElementById('sel1LogAndLess3Ch7').options.selectedIndex
  let strValSel1LogAndLess3Ch7 = document.getElementById('sel1LogAndLess3Ch7').options[indexSel1LogAndLess3Ch7].value
  let indexSel2LogAndLess3Ch7 = document.getElementById('sel2LogAndLess3Ch7').options.selectedIndex
  let strValSel2LogAndLess3Ch7 = document.getElementById('sel2LogAndLess3Ch7').options[indexSel2LogAndLess3Ch7].value
  let boolValSel1LogAndLess3Ch7 = GetBooleanValue(strValSel1LogAndLess3Ch7) 
  let boolValSel2LogAndLess3Ch7 = GetBooleanValue(strValSel2LogAndLess3Ch7)
  document.getElementById('txtOutLogicalAndLess3Ch7').innerHTML = boolValSel1LogAndLess3Ch7 && boolValSel2LogAndLess3Ch7
})
  //reset field outtext  
 let btnResetFieldPracticaLogAndLess3Ch7 = document.getElementById("btnResetFieldPracticaLogAndLess3Ch7")
 btnResetFieldPracticaLogAndLess3Ch7.addEventListener("click", function() {   
  document.getElementById('txtOutLogicalAndLess3Ch7').innerHTML =""
 }) 
//a || b
 const btnPracticaLogOrLess3Ch7 = document.getElementById('btnPracticaLogOrLess3Ch7')
 btnPracticaLogOrLess3Ch7.addEventListener('click', function() {   
  let indexSel1LogOrLess3Ch7 = document.getElementById('sel1LogOrLess3Ch7').options.selectedIndex
  let strValSel1LogOrLess3Ch7 = document.getElementById('sel1LogOrLess3Ch7').options[indexSel1LogOrLess3Ch7].value
  let indexSel2LogOrLess3Ch7 = document.getElementById('sel2LogOrLess3Ch7').options.selectedIndex
  let strValSel2LogOrLess3Ch7 = document.getElementById('sel2LogOrLess3Ch7').options[indexSel2LogOrLess3Ch7].value
  let boolValSel1LogOrLess3Ch7 = GetBooleanValue(strValSel1LogOrLess3Ch7) 
  let boolValSel2LogOrLess3Ch7 = GetBooleanValue(strValSel2LogOrLess3Ch7)
  document.getElementById('txtOutLogicalOrLess3Ch7').innerHTML = boolValSel1LogOrLess3Ch7 || boolValSel2LogOrLess3Ch7
})
//reset field outtext  
 let btnResetFieldPracticaLogOrLess3Ch7 = document.getElementById("btnResetFieldPracticaLogOrLess3Ch7")
 btnResetFieldPracticaLogOrLess3Ch7.addEventListener("click", function() {   
  document.getElementById('txtOutLogicalOrLess3Ch7').innerHTML ="" 
 }) 
//!c
 const btnPracticaLogNotLess3Ch7 = document.getElementById('btnPracticaLogNotLess3Ch7')
 btnPracticaLogNotLess3Ch7.addEventListener('click', function() {   
  let indexSel1LogNotLess3Ch7 = document.getElementById('sel1LogNotLess3Ch7').options.selectedIndex
  let strValSel1LogNotLess3Ch7 = document.getElementById('sel1LogNotLess3Ch7').options[indexSel1LogNotLess3Ch7].value
  let boolValSel1LogNotLess3Ch7 = GetBooleanValue(strValSel1LogNotLess3Ch7) 
  document.getElementById('txtOutLogicalNotLess3Ch7').innerHTML = !boolValSel1LogNotLess3Ch7
})
//reset field outtext  
 let btnResetFieldPracticaLogNotLess3Ch7 = document.getElementById("btnResetFieldPracticaLogNotLess3Ch7")
 btnResetFieldPracticaLogNotLess3Ch7.addEventListener("click", function() {   
  document.getElementById('txtOutLogicalNotLess3Ch7').innerHTML ="" 
 }) 

  
 //base function example (with 1 parameters)
  function calculateAge(val){
    return 2020 - val
  }
  //function calculateAge
  const btnFuncCalcAgeLess3Ch8 = document.getElementById('btnFuncCalcAgeLess3Ch8')
  btnFuncCalcAgeLess3Ch8.addEventListener('click', function(){ 
    let indexSelFuncCalcAgeLess3Ch8 = document.getElementById('selFuncCalcAgeLess3Ch8').options.selectedIndex
    let strValSelFuncCalcAgeLess3Ch8 = document.getElementById('selFuncCalcAgeLess3Ch8').options[indexSelFuncCalcAgeLess3Ch8].value
  document.getElementById('txtOutFuncCalcAgeLess3Ch8').innerHTML = calculateAge(Number(strValSelFuncCalcAgeLess3Ch8))
})
  //function LogInfo
  const btnLogInfoAboutLess3Ch8 = document.getElementById('btnLogInfoAboutLess3Ch8')
  btnLogInfoAboutLess3Ch8.addEventListener('click', function(){ 
    let txtNameFuncLogInfoAboutLess3Ch8 = document.getElementById('txtNameFuncLogInfoAboutLess3Ch8').value  
    let indexselFuncLogInfoAboutLess3Ch8 = document.getElementById('selFuncLogInfoAboutLess3Ch8').options.selectedIndex
    let strValselFuncLogInfoAboutLess3Ch8 = document.getElementById('selFuncLogInfoAboutLess3Ch8').options[indexselFuncLogInfoAboutLess3Ch8].value
  document.getElementById('txtOutLogInfoAboutLess3Ch8').innerHTML = name + 'is ' + calculateAge(Number(strValselFuncLogInfoAboutLess3Ch8))+' years old'
})
//base array example
  function getResultScreenArrayLess3Ch9(val){
  let ret = undefined
  var cars = undefined
  switch (val) {
    case 0:
      {
        cars = []
      }
    break;
    case 1:
      {
        cars = new Array()
      }
    break;
    case 2:
      {
          cars = ['mazda','bmw', 'ford']
      }
    break;  
    default:
      cars = new Array('bmw','mazda', 'ford')
  }  
  return cars
  }
  const btnArrayLess3Ch9 = document.getElementById('btnArrayLess3Ch9')
  btnArrayLess3Ch9.addEventListener('click', function(){
    let indexselArrayLess3Ch9 = document.getElementById('sel1ArrayLess3Ch9').options.selectedIndex
    let strArrayLess3Ch9 = document.getElementById('sel1ArrayLess3Ch9').options[indexselArrayLess3Ch9].value
    let returnContentArray = (getResultScreenArrayLess3Ch9(indexselArrayLess3Ch9)!=''?getResultScreenArrayLess3Ch9(indexselArrayLess3Ch9): '[]')
    let returnLengthArray = getResultScreenArrayLess3Ch9(indexselArrayLess3Ch9).length
    document.getElementById('textOutArrayLess3Ch9').innerHTML = returnContentArray +" Длина массива: "+returnLengthArray
  })
  const literal = ['a','b','c','d']
  const btnIndexOfArrayLess3Ch9 = document.getElementById('btnIndexOfArrayLess3Ch9')
  btnIndexOfArrayLess3Ch9.addEventListener('click', function(){
    let idxSelIndexOfArrayLess3Ch9 = document.getElementById('selIndexOfArrayLess3Ch9').options.selectedIndex
    let strArrayLess3Ch9 = document.getElementById('selIndexOfArrayLess3Ch9').options[idxSelIndexOfArrayLess3Ch9].value
    console.log(strArrayLess3Ch9)
    document.getElementById('textOutIndexOfArrayLess3Ch9').innerHTML = literal[Number(strArrayLess3Ch9)]
  })

  const carsNew = ['mazda','bmw','ford']
  const btnAddOrChangeArrayLess3Ch9 = document.getElementById('btnAddOrChangeArrayLess3Ch9')
  btnAddOrChangeArrayLess3Ch9.addEventListener('click', function(){
  let idxSelAddOrChangeArrayLess3Ch9 = document.getElementById('selAddOrChangeArrayLess3Ch9').options.selectedIndex    
  let numArrayLess3Ch9 = Number(document.getElementById('selAddOrChangeArrayLess3Ch9').options[idxSelAddOrChangeArrayLess3Ch9].value)
  carsNew[numArrayLess3Ch9] = document.getElementById('newElementToArrayTxtLess3Ch9').value
  document.getElementById('textOutNewArrayLess3Ch9').innerHTML = carsNew
  })  
  const carsNew2 = ['mazda','bmw','ford']
  const btnNewElementToEndArrayLess3Ch9 = document.getElementById('btnNewElementToEndArrayLess3Ch9')
  btnNewElementToEndArrayLess3Ch9.addEventListener('click', function(){
  carsNew2[carsNew2.length] = document.getElementById('inpNewElementToEndArrayLess3Ch9').value
  document.getElementById('textOutNewElementToEndArrayLess3Ch9').innerHTML = carsNew2
  })  
/*decoration buttons*/
  let timer = null
  let btnList = document.querySelectorAll('.chapter__input-btn')
  for(let i=0; i<btnList.length;i++){ 
    btnList[i].addEventListener('mousedown',function(){pushButton(btnList[i])})
    btnList[i].addEventListener('mouseup',function(){upButton(btnList[i])})
  }
function upButton(p) {
  p.style.backgroundColor = '#e8ecec'
  p.style.color = '#000'
  p.style.top = '0'
  p.style.right = '0'
  // Stop the timer
  clearTimeout(timer);
}
function pushButton(p){
  clearTimeout(timer)
  timer = setTimeout(function() { 
    p.style.backgroundColor = '#cfcaca'
    p.style.color = '#363434'
    p.style.top = '1px'
    p.style.right = '-1px'
  }, 100);  
}
/*dynamic top menu */
/***  test ***/
/*let a = document.getElementById('topItem1')
a.addEventListener('mouseover', function(){alert("id = topItem1")})
let b = document.getElementById('topItem2')
b.addEventListener('mouseover', function(){alert("id = topItem2")})
*/
//select item of top menu and creating an array of these id 
let itemsTopMenu = document.querySelectorAll('.menu__item')
let arrIdItemsTopMenu = []
for(let i=0; i<itemsTopMenu.length;i++){
  let str = itemsTopMenu[i].getAttribute('id')
  //console.log('itemsTopMenu['+i+'].getAttribute("id") = '+str)
  arrIdItemsTopMenu[i] = str
}
//out => arrIdItemsTopMenu['topItem1LI','topItem2LI','topItem3LI', 'topItem4LI']
//loop through an array arrIdItemsTopMenu and get the lengths of the lines of the submenu selections
for(let i=0;i<arrIdItemsTopMenu.length;i++){
  //console.log('arrIdItemsTopMenu['+i+'] = '+arrIdItemsTopMenu[i])
  let subitemAList = document.querySelectorAll('#'+arrIdItemsTopMenu[i]+'LI .menu__subitem-block a')
  let arrLengthSymbols = []
  //console.log('i = '+i+" subitemAList.length = "+subitemAList.length)
  for(let j=0; j<subitemAList.length;j++){
    //console.log(j+"  "+subitemAList[j].innerHTML + ' длина строки ' + subitemAList[j].innerHTML.length)  
    arrLengthSymbols.push(subitemAList[j].innerHTML.length)
  }
  //sort the resulting lengths
  arrLengthSymbols.sort(function(a,b) {
    return a-b;   // Возвращает значение < 0, 0 или > 0
    // в зависимости от порядка сортировки a и b
  })
  //get the greatest length
  let widthSubItemBlock = arrLengthSymbols[arrLengthSymbols.length-1]
  //get selection of elements containing classes .menu__subitem-block
  let subitemList = document.querySelectorAll('#'+arrIdItemsTopMenu[i]+' .menu__subitem-block')
  //console.log('i = '+i+' subitemList.length = '+subitemList.length)
  //setting wsubitemListidth for top menu sub-items
  for(let k=0; k<subitemList.length;k++){
    subitemList[k].style.width = (widthSubItemBlock*8.1)+"px" 
   // console.log('i = '+i+' ширина пункта '+subitemList[k].style.width)
  }
  let topAnchorList = document.querySelectorAll('#'+arrIdItemsTopMenu[i]+' .menu__subitem-block>a')
  for(let l=0; l<topAnchorList.length;l++){
    topAnchorList[l].style.display = 'inline-block'
    topAnchorList[l].style.width = (widthSubItemBlock*8.1)+"px" 
    //console.log('i = '+l+' ширина ссылки '+subitemList[l].style.width)
  }
}
/*base cycle example*/
//classic cycle for:
const carCycleForLess3Ch10 = ['mazda','bmw','ford','renault']
const btnCycleForLess3Ch10 = document.getElementById('btnCycleForLess3Ch10')
let boolFlagZero = true
let n = 0
let strRes = ""
let btnResetCycleForLess3Ch10 = document.getElementById('btnResetCycleForLess3Ch10')
btnResetCycleForLess3Ch10.addEventListener('click', function(){
  document.getElementById('textOutCycleForLess3Ch10').innerHTML = ""
  n = 0
  strRes = ""
  //console.log(n)
})

btnCycleForLess3Ch10.addEventListener('click', function(){
  //console.log("n= "+n)  
  if(n != carCycleForLess3Ch10.length){
  for(let i=n; i === carCycleForLess3Ch10.length-(carCycleForLess3Ch10.length-n); i++){
    //console.log('cars['+i+'] = '+carCycleForLess3Ch10[i]) 
    strRes += "   " + carCycleForLess3Ch10[i] 
    document.getElementById('textOutCycleForLess3Ch10').innerHTML = strRes
  }
  n = n + 1
} else {alert("Вы достигли конца массива Cars!")}
})
//basic cycle while:
let i = 0 
let strResCycleWhileLess3Ch10 = ""
const carCycleWhileLess3Ch10 = ['mazda','bmw','ford','renault']
while(i<carCycleWhileLess3Ch10.length){
  strResCycleWhileLess3Ch10 += (i<carCycleWhileLess3Ch10.length-1)? carCycleWhileLess3Ch10[i] + ' , ':carCycleWhileLess3Ch10[i]
  //console.log('cars['+i+'] = '+ carCycleWhileLess3Ch10[i])
  i++
}
let btnCycleWhileLess3Ch10 = document.getElementById('btnCycleWhileLess3Ch10')
btnCycleWhileLess3Ch10.addEventListener('click', function(){
  document.getElementById('textOutCycleWhileLess3Ch10').innerHTML = strResCycleWhileLess3Ch10
})
//cycle do while:
i=0
let strResCycleDoWhileLess3Ch10 = ""
do{
  strResCycleDoWhileLess3Ch10 += (i<carCycleWhileLess3Ch10.length-1)? carCycleWhileLess3Ch10[i] + ' , ':carCycleWhileLess3Ch10[i]
  //console.log(carCycleWhileLess3Ch10[i])
}while(++i<carCycleWhileLess3Ch10.length);

let btnCycleDoWhileLess3Ch10 = document.getElementById('btnCycleDoWhileLess3Ch10')
btnCycleDoWhileLess3Ch10.addEventListener('click', function(){
  document.getElementById('textOutCycleDoWhileLess3Ch10').innerHTML = strResCycleDoWhileLess3Ch10
})
//cycle do while:
//One variant
/*let intervalID  = null
let strResCycleForOfLess3Ch10 = ""
let btnCycleForOfLess3Ch10 = document.getElementById('btnCycleForOfLess3Ch10')
btnCycleForOfLess3Ch10.addEventListener('click', function(){
  for ( let car of carCycleWhileLess3Ch10){
    intervalID  = setInterval(function(){
     console.log(car+" ")
     strResCycleForOfLess3Ch10 += car + " "
     document.getElementById('textOutCycleForOfLess3Ch10').innerHTML = strResCycleForOfLess3Ch10
   },1000)
  }
  clearInterval(intervalID)
})*/
//two variant
let strResCycleForOfLess3Ch10 = ""
let copyArrayCycleForOf = ['mazda','bmw','ford','renault']
let btnCycleForOfLess3Ch10 = document.getElementById('btnCycleForOfLess3Ch10')
btnCycleForOfLess3Ch10.addEventListener('click', function(){
  let c = []
  if(copyArrayCycleForOf.length!=0){
    c.unshift(copyArrayCycleForOf.shift())
    for ( let car of c){
      console.log(car+" ")
      strResCycleForOfLess3Ch10 += car + " "
      document.getElementById('textOutCycleForOfLess3Ch10').innerHTML = strResCycleForOfLess3Ch10
    } //for of
  }//if
  else {
    console.log('carCycleWhileLess3Ch10.length = '+carCycleWhileLess3Ch10.length)
    console.log('copyArrayCycleForOf.length = '+copyArrayCycleForOf.length)
    alert('Достигнут конец массива cars!')
  }
})
let btnResetCycleForOfLess3Ch10 = document.getElementById('btnResetCycleForOfLess3Ch10')
btnResetCycleForOfLess3Ch10.addEventListener('click', function(){
  //console.log('carCycleWhileLess3Ch10.length = '+carCycleWhileLess3Ch10.length)
  //console.log('copyArrayCycleForOf.length = '+copyArrayCycleForOf.length)
  copyArrayCycleForOf = ['mazda','bmw','ford','renault']
  strResCycleForOfLess3Ch10 = ""
  document.getElementById('textOutCycleForOfLess3Ch10').innerHTML =""
})

//basic about objects - lesson 3 chapter 11
const person = {
  firstName:'Egor',
  lastName: 'Shulga',
  yearBirth: 1980,
  hasWife: true,
  languages: ['ru','en'],
  greet: function(){
    alert('Greet!!!')
  }
}
/*let complexKey = "complex key"
console.log(person.`${greet}`())*/

 const btnPropertyLess3Ch11 = document.getElementById('btnPropertyLess3Ch11')
 btnPropertyLess3Ch11.addEventListener('click', function() {   
  let indexselPropertyLess3Ch11 = document.getElementById('selPropertyLess3Ch11').options.selectedIndex
  let strValselPropertyLess3Ch11 = document.getElementById('selPropertyLess3Ch11').options[indexselPropertyLess3Ch11].value
  if(strValselPropertyLess3Ch11==='greet') person[`${strValselPropertyLess3Ch11}`]()
  document.getElementById('textOutPropertyLess3Ch11').innerHTML = person[`${strValselPropertyLess3Ch11}`]
  console.log(person.firstName)
})

 const btnPropertyByDottLess3Ch11 = document.getElementById('btnPropertyByDottLess3Ch11')
 btnPropertyByDottLess3Ch11.addEventListener('click', function() {   
  let indexselPropertyByDottLess3Ch11 = document.getElementById('selPropertyByDottLess3Ch11').options.selectedIndex
  let strValselPropertyByDottLess3Ch11 = document.getElementById('selPropertyByDottLess3Ch11').options[indexselPropertyByDottLess3Ch11].value
  let res
  switch(strValselPropertyByDottLess3Ch11) {
    case 'firstName':res = person.firstName
    break;
    case 'lastName':res = person.lastName
    break;
    case 'yearBirth':res = person.yearBirth
    break; 
    case 'hasWife':res = person.hasWife
    break;
    case 'languages':res = person.languages
    break;
    default:{
      res = person.greet
      person.greet() 
    }     
  }
  document.getElementById('textOutPropertyByDottLess3Ch11').innerHTML = res
})

 const btnLookPropertyNowLess3Ch11 = document.getElementById('btnLookPropertyNowLess3Ch11')
 btnLookPropertyNowLess3Ch11.addEventListener('click', function() { 
  document.getElementById('textOutLookPropertyNowLess3Ch11').innerHTML = person.hasWife
 })
 const btnChangePropertyLess3Ch11 = document.getElementById('btnChangePropertyLess3Ch11')
 btnChangePropertyLess3Ch11.addEventListener('click', function() { 
  let indexselChangeProperty3Ch11 = document.getElementById('selChangeProperty3Ch11').options.selectedIndex
  let strValselChangeProperty3Ch11 = document.getElementById('selChangeProperty3Ch11').options[indexselChangeProperty3Ch11].value 
  person.hasWife = strValselChangeProperty3Ch11
  alert('Значение свойства hasWife объекта person изменено на '+ person.hasWife) 
 })
 const btnShowPersonLess3Ch11 = document.getElementById('btnShowPersonLess3Ch11')
 btnShowPersonLess3Ch11.addEventListener('click', function() {
  document.getElementById('textOutShowPersonLess3Ch11').innerHTML =""
  const keys = Object.keys(person)
  keys.forEach(function(key){
    document.getElementById('textOutShowPersonLess3Ch11').innerHTML += '{key: '+ key + ' | ' + 'value: '+ person[key] +' }</br>'
  })
 })
 const btnAddNewPropertyLess3Ch11 = document.getElementById('btnAddNewPropertyLess3Ch11')
 btnAddNewPropertyLess3Ch11.addEventListener('click', function() {
  person.isProgrammer = true
  document.getElementById('textOutShowPersonLess3Ch11').innerHTML =""
  //document.getElementById('textOutShowPersonLess3Ch11').innerHTML =person
  //console.log(person)
  const keys = Object.keys(person)
     keys.forEach(function(key){
      document.getElementById('textOutShowPersonLess3Ch11').innerHTML += '{key: '+ key + ' | ' + 'value: '+ person[key] +' }</br>'  
    })
})

 const btnClearFieldOutPropObjLess3Ch11 = document.getElementById('btnClearFieldOutPropObjLess3Ch11')
 btnClearFieldOutPropObjLess3Ch11.addEventListener('click', function() {
  document.getElementById('textOutShowPersonLess3Ch11').innerHTML =""
  delete person.isProgrammer
 })
//******** lesson 8 *********//
//feature new syntax for objects - lesson 8 chapter 1
const complex = {
  'complex key':'complex value'
}
 const btnShowComplexKeyObjectLess8Ch1 = document.getElementById('btnShowComplexKeyObjectLess8Ch1')
 btnShowComplexKeyObjectLess8Ch1.addEventListener('click', function() {
  document.getElementById('txtOutShowComplexKeyObjectLess8Ch1').innerHTML ="complex['complex key'] = "+complex["complex key"]
 })
//clear field outtext
 let btnClearFieldOutComplexKeyObjectLess8Ch1 = document.getElementById("btnClearFieldOutComplexKeyObjectLess8Ch1")
 btnClearFieldOutComplexKeyObjectLess8Ch1.addEventListener("click", function() {   
  document.getElementById('txtOutShowComplexKeyObjectLess8Ch1').innerHTML =""
 }) 
//output propertys of object calcExpr
 let GetPropValueCalcExpr = (valSelected,vali, valj)=>{
  let Ret
  switch (valSelected) {
    case '[Date.now()]':
    Ret = 'Now date '+ Date.now()
    break;
    case '[iValue + jValue]':
    Ret = 'polynomial = ' + vali*100 + valj*100
    break
    default:
    Ret = 'Calculated key = ' + 'key_' + (1+4)
  }
  return Ret
}

let iValue=10, jValue=50
const calcExpr = {
  [Date.now()]:'Now date '+ Date.now(),
  [iValue + jValue]:'polynomial = ' + iValue*100 + jValue*100,
  ['key_' + (1+4)]:'Calculated key = ' + 'key_' + (1+4)
}

 const btnShowCalcExprObjectLess8Ch1 = document.getElementById('btnShowCalcExprObjectLess8Ch1')
 btnShowCalcExprObjectLess8Ch1.addEventListener('click', function() {
  let numVali = Number.parseInt(document.getElementById('txtiValueLess8Ch1').value)
  let numValj = Number.parseInt(document.getElementById('txtjValueLess8Ch1').value)
  let indexselSelectPropObjCalcExpLess8Ch1 = document.getElementById('selSelectPropObjCalcExpLess8Ch1').options.selectedIndex
  let strValLess8Ch1 = document.getElementById('selSelectPropObjCalcExpLess8Ch1').options[indexselSelectPropObjCalcExpLess8Ch1].value 
  document.getElementById('txtOutShowCalcExprObjectLess8Ch1').innerHTML = GetPropValueCalcExpr(strValLess8Ch1, numVali, numValj)
 })
//clear field outtext
 let btnClearFieldOutCalcExprObjectLess8Ch1 = document.getElementById("btnClearFieldOutCalcExprObjectLess8Ch1")
 btnClearFieldOutCalcExprObjectLess8Ch1.addEventListener("click", function() {   
  document.getElementById('txtOutShowCalcExprObjectLess8Ch1').innerHTML =""
 }) 

//example delete property from object - lesson 8 chapter 1
//set undefined to property
 const btnDeleteKeyFromCalExprLess8Ch1 = document.getElementById('btnDeleteKeyFromCalExprLess8Ch1')
 btnDeleteKeyFromCalExprLess8Ch1.addEventListener('click', function() {
  //document.getElementById('textOutShowPersonLess3Ch11').innerHTML =""
  calcExpr['key_5'] = undefined  
  alert('Объекту calcExpr со ключом  "key_5" присвоили undefined')
 })

 //delete really
 let btnDeleteRealKeyFromCalExprLess8Ch1 = document.getElementById("btnDeleteRealKeyFromCalExprLess8Ch1")
 btnDeleteRealKeyFromCalExprLess8Ch1.addEventListener("click", function() {   
  document.getElementById('txtOutShowCalcExprBeforeAndAfterDelLess8Ch1').innerHTML =""
  delete calcExpr['key_5']
  const keys = Object.keys(calcExpr)
  keys.forEach(function(key){
    document.getElementById('txtOutShowCalcExprBeforeAndAfterDelLess8Ch1').innerHTML += '{key: '+ key + ' | ' + 'value: '+ calcExpr[key] +' }</br>'
  })
  //btnDeleteRealKeyFromCalExprLess8Ch1.disabled = true  
 }) 
 //return property
 let btnReturnPropToCalExprLess8Ch1 = document.getElementById("btnReturnPropToCalExprLess8Ch1")
 btnReturnPropToCalExprLess8Ch1.addEventListener("click", function() {
  document.getElementById('txtOutShowCalcExprBeforeAndAfterDelLess8Ch1').innerHTML =""
  calcExpr['key_' + (1+4)] = 'key_5'
  const keys = Object.keys(calcExpr)
  keys.forEach(function(key){
    document.getElementById('txtOutShowCalcExprBeforeAndAfterDelLess8Ch1').innerHTML += '{key: '+ key + ' | ' + 'value: '+ calcExpr[key] +' }</br>'
  })  
 })
 
 //show all properties
 const btnShowCalcExprBeforeAndAfterDelLess8Ch1 = document.getElementById('btnShowCalcExprBeforeAndAfterDelLess8Ch1')
 btnShowCalcExprBeforeAndAfterDelLess8Ch1.addEventListener('click', function() {
  document.getElementById('txtOutShowCalcExprBeforeAndAfterDelLess8Ch1').innerHTML =""
  const keys = Object.keys(calcExpr)
  keys.forEach(function(key){
    document.getElementById('txtOutShowCalcExprBeforeAndAfterDelLess8Ch1').innerHTML += '{key: '+ key + ' | ' + 'value: '+ calcExpr[key] +' }</br>'
  })
  btnDeleteRealKeyFromCalExprLess8Ch1.disabled = false
 })
//clear field outtext
 let btnClearFieldOutStructureCalcExprLess8Ch1 = document.getElementById("btnClearFieldOutStructureCalcExprLess8Ch1")
 btnClearFieldOutStructureCalcExprLess8Ch1.addEventListener("click", function() {   
  document.getElementById('txtOutShowCalcExprBeforeAndAfterDelLess8Ch1').innerHTML =""
 }) 

const personAge = {
  Age:40
} 
//output on display txtOutExampleSomeFeatureObjLess8Ch1
document.getElementById('txtOutExampleSomeFeatureObjLess8Ch1').innerHTML = ++personAge.Age
person.languages.push('kz')
document.getElementById('txtOutExampleChangeAndAddPropObjLess8Ch1').innerHTML = "person['languages'] = " + person['languages']
//console.log(calcExpr.key_5)


});//end of programm