const button = document.querySelector('#answer_btn')
let money = document.querySelector('#result1')
const plus = document.querySelector('#result2')
const total = document.querySelector('#result')

console.log(button, money, plus)

button.addEventListener('click',function(){
    let show = Number(window.prompt())
    console.log(show)
    money.value = show.toLocaleString('ko-kr')
    plus.value = 100
    let result = show+100
    total.value = `총${result.toLocaleString('ko-kr')}원입니다` // toLocaleString 이 붙으면 문자가 되는것임
})

// 1. 버튼 클릭 시 prompt 입금액 입력받기
// let num = Number(window.prompt('입금액을 입력하세요.'))
// 2. 1번 값 입금액(money1) 출력하기
// money1.value = num.toLocaleString('ko-kr')
// 3. 이자(money2) 100원 출력하기
// money2.value = 100
// 4. 입금액 + 이자 데이터 확인하기(number인지)
// console.log(typeof num)
// 5. 확인한 데이터 더해서 최종 변수저장하기, 숫자+숫자=숫자
// let result = num+100
// 6. 6번값 total변수에 3자리 콤마 붙여서 출력하기
// total.value = result.toLocaleString('ko-kr')


