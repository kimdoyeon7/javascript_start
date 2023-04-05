// F12 -> console 항상 실행하기 
// javascript == 객체지향프로그래밍언어
// 변수 = 데이터 저장소
// var, let, const
// var vs let ==> 중복변수명 에러 구분 
// const (상수라는 변수) ==> 처음에 정한 값이 변하지 않는 것이 중요
// a.length 에서 a라는 것은 객체를 뜻함. length = 속성/
// a.typeof() = (typeof=메소드또는함수/실행 대상을 담고 있는 것)
// console.log('a') 뒤에서 부터 데이터를 구분하면서 읽으면 /
// 위에 해석 / 문자 데이터 a 를 console에 표시한다.
// window.alert(10) 
// 위에 해석 / 숫자 데이터 10을 alert(팝업창)로 window에 표시한다.
// console.log('안녕하세요'.length) // 객체.메소드('객체'.속성) 구조임
// 속성을 쓰려면 무조건 앞에 객체를 적어야함. 
// ( '안녕하세요'.length = 안녕하세요라는 문제의 데이터의 길이를 알려줘라) 
// 객체 = 변수 / 객체가 더 포괄적인 의미인가..?
//.log 글을 쓴다(글을 남긴다)

let a = 10 // 변수a는 대입값 숫자 10을 뜻한다.
let b = 'hello' //변수b는 대입값문자 'hello'를 뜻한다.
let c = a  // 변수c는 변수a와 같다.. 
console.log(a.length) // 객체 a의 문자 글자수(length)를 console에 출력해라 / 길이를 확인할 수 없음 = undefined
console.log(a+b) // 변수 a +(또는연결하기) 변수 b의 값을 console에 출력해라 / 10hello
console.log(typeof b) // 객체 b에 들어있는 데이터타입을 알려줘라/ string
window.alert(c) // 변수c의 대입값을 팝업창(alert)에 띄워라 / 팝업창에 10 출력
window.alert(a+c) // 변수a와 변수c의 대입값을 팝업창(alert) 에 띄워라 / 20출력

