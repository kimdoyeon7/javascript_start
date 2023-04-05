// 객체지향프로그래밍 언어 자바스크립트 기본순서
// 객체 변수 선언-> 변수 속성, 메소드 활용 결과 값
// 내가 효과를 주고 싶은 태그를 변수로 만들어야함. 
// https://webty.tistory.com/56
// window 생략가능하지만 익숙해지기전에는 쓰는 것이 좋음 
// 객체 id 변수 선언

////// 요소 직접 선택자 공부 -------------------------------/////////////////////

// const title = document.getElementById('title') //동작을 주고 싶은 
// const 변수명 = dom 요소 직접 선택자('id=title을 가진 태그')
// console.log(title) // 그럴 때 오류를 확인하기 위해서 console.log를 확인하는 것
// title이라는 변수값에 무언가를 하려고 변수를 저장한것 


// * 변수 생성 후 콘솔로 올바른 변수인지 반드시 체크한다!
// 변수(아이디 DOM)
const title = document.getElementById('title')
const contents = document.getElementById('contents')
const link = document.getElementById('link')
// const a_link = document.getElementById('link') //변수값을 이렇게 설정할 수도 있음

// 변수 (클래스 DOM)
const first = document.getElementsByClassName('first')[0]
const last = document.getElementsByClassName('last')[0]
const menu = document.getElementsByClassName('menu')
const a = document.getElementsByClassName('a')


// 변수 (태그 DOM)
const li = document.getElementsByTagName('li')

// 출력
console.log(li[4])
console.log(a[3])
console.log(menu)
console.log(last)
console.log(first)
console.log(title)
console.log(contents)
console.log(link)
// console.log(title, contents, link) // 콤마로 구분해서 작성 가능 
// const 변수 link 의 값을 colsole에 표시해라 /link의 값은 요소 선택자로써 태그가 나오도록
