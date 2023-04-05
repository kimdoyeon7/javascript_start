// 변수
const more = document.getElementsByClassName('more')
const img = document.getElementsByTagName('img')[0]
const plus = document.getElementsByClassName('plus')
const join = document.getElementById('join_btn')
const li = document.getElementsByTagName('li')


// 출력
// console.log(more[0], img, plus[0], plus[1], btn, li[0],li[1],li[2],li[3],li[4])
console.log(more[0], img, join)
console.log(plus[0], plus[1])
console.log(li[0])
console.log(li[1])
console.log(li[2])
console.log(li[3])
console.log(li[4])


// ------------------------  style 속성
// 객체.속성
// style == css
// 속성종류 => font-size, color, font-weihgt, background-color 등등등

// 객체.style.속성 = 값 / css와 js는 다른 파일이기때문에 이 선언을 해야한다 / = 대입한다./ 우측의 값을 좌측에 개입한다
more[0].style.color = 'red' //개별접근하지 않으면 오류됨 인식불가 / 개별접근=[0]
li[0].style.backgroundColor = 'pink'
li[1].style.backgroundColor = 'yellow'
li[2].style.backgroundColor = 'rgba(255,255,0,0.5)'
li[3].style.backgroundColor = 'skyblue'
li[4].style.fontSize = '3rem'