// result1, result2, answer_btn, answer
//window.prompt


let answer
let result1 = document.querySelector('#result1')
let result2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
console.log(answer_btn, result1, result2, typeof(answer))
// 1. answer_btn 클릭했을때
// 2. prompt 값 입력(인증번호)
// 3. 2번 값의 데이터타입이 result1 출력
// 4. 2번 값의 데이터결과가 result2 출력


answer_btn.addEventListener('click',function(){
    // console.log(this)
    answer = window.prompt('인증번호를 입력하세요')
    result1.value = typeof (answer)
    result2.value = answer
})
