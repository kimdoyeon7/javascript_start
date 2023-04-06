console.log('논리데이터 연습 --------------------------- ')
console.log(true)
console.log(false)
console.log(true+2) //3이라고 나옴. 왜냐면 논리데이터를 숫자를 인식하게 되면 true는 1로, false는 0으로 인식
console.log(false+10) // 10
console.log(typeof true) // boolean(논리데이터)
console.log(typeof false+10) //boolean10 
let bo = true+10
console.log(typeof bo) // number
console.log(true+null) // 1 // 왜? // null=0으로 인식해서 
console.log(false+null) // 0
console.log('비교연산자 ------------------------------------------------')
// let a = 10
// let b = 20
// let c = '20'
// console.log(a,b,c)
// console.log(a==b) // 숫자들만 인식함.
// console.log(b===c) // false
// console.log(a!=b)
// console.log(b!==c)
// console.log(a>b)
// console.log(a<=b)
// console.log(!b)
console.log('조건식------------------------------------------------')
/*
    if(날씨 == '비'){우산챙기기}
    if(날씨!= '맑음' ){우산챙기기}
    if(점수 >= 60){자격증합격}
    if(점수 < 60){재시험}
*/ 
// let weather = window.prompt('오늘 날씨 어때?')
// if(weather == '비'){
//     window.alert('우산챙기기')
// }
let a = true
let b = false
let c = 10
let d = 20
if(a==true){console.log('a는 참이다');} // o
if(c>10){console.log('c는 10보다 크다');} // x c는 10과 같다
if(d<c){console.log('d는 c보다 작다');} // x d는 c보다 크다
if(d<=20){console.log('d는 20보다 작거나 같다');} // o
if(b!=true){console.log('b는 참이 아니다');} // o

