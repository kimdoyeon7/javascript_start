// DOM
// 원시데이터(문자) = "",'','표시문자','class','id','tag'
const container = document.getElementById('container')
const item = document.getElementsByClassName('item')
console.log(container, item)
console.log(item[1].length) //undefined가 나옴, item 자체가 문자가 아닌 클래스여서 
console.log(typeof item[1])
console.log(typeof item[1].innerHTML)
console.log(item[1].innerHTML.length) // 객체.속성.속성 
// 객체.메서드().메서드() x
// 객체.속성.속성.속성.메서드() o
// 원시데이터(숫자) = '1' (문자) vs 1 = X 다른것임
let a = 10
let b = '20'
let c = 20
console.log(a+b) //숫자+문자 = 문자
console.log(a+c) //숫자+숫자 = 숫자
// ----------------------------------------------------------------
let num = window.prompt('좋아하는 숫자를 입력하세요') // 데이터저장변수
let total = Number(num) // 데이터변환변수
console.log(total, num) // 기본적으로 문자로 인식 
console.log(typeof total) 
