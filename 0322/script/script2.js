//원시데이터(논리형 데이터 true(1), false(0))
let a = true
let b = 1
console.log(a==b) // == 는 같다는 뜻 / 즉 a와 b가 같냐? 라는 뜻 
//원시데이터(null(빔), undefined(정의되지않음))
let c = 10 //선언o 대입 o
let d //선언o 대입 x
c = null // 대입된 후 특정상황에 따라 값을 제거할 경우 // 
console.log(c) // null / 값이 들어간 상태에서 지우는 상태
console.log(d) // undefined / 값이 입력되지 않은 상태
// -------------------------------------------------
let e = 10
let f = '0'
console.log(e+f)
// ---------------------------------------------------
//산술연산자
let num1 = 10+20
let num2 = 50-20
let num3 = 5*1
let num4 = 6/3
let num5 = 5%3
console.log(num1,num2,num3,num4,num5)
console.log ('---------------------------------')
let box1 = 1
// box1 = box1+10 
box1 += 10
console.log(box1) // 11
console.log('------------------------------------')
let box2 = 0 //초기값선언
box2 = box2+10 //box2 +=10  /복합대입 변경식
console.log(box2) //10 /결과값 예측
box2 = box2-5 //box2 -=5
console.log(box2)// 5
box2 = box2*2//box2 *=2
console.log(box2)// 10
box2 += '살 입니다.'
// window.alert(box2)
console.log ('-----------------------------------')
let box3 = 10
console.log(box3)
// box3++
// console.log(box3++) //후위연산 / 출력부터하고 나중에 증감해라
// console.log(box3) //전위연산 /증가하고 출력해라 11+1 = 12
let box4 = box3++ //box3을 box4에 출력하고 나중에 증감해라 
console.log(box4, box3) // 10, 11
