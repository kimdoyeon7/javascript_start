let money1 = document.querySelector('#result1')
let money2 = document.querySelector('#result2')
let money_all = document.querySelector('#result')
const button = document.querySelector('#answer_btn')

// console.log(money1, money2,money_all, button)

button.addEventListener('click',function(){
    //console.log(this)//버튼 동작 확인 콘솔
    // console.log(money1.value, money2.value)//추적값확인
    // console.log(money1.value+ money2.value)//더하기 결과 확인(오류)
    // 문자+문자=문자 1+1=11
    // console.log(typeof money1.value, typeof money2.value)//타입확인
    console.log(typeof Number(money1.value))//number 형 변환메서드 활용

    //변수O / 변수 설정
    let money1_type = Number(money1.value)
    console.log(typeof money1_type)
    let money2_type = Number(money2.value)
    console.log(typeof money2_type)
    money_all.value = `총${money1_type + money2_type}원입니다`
    let str_money_all = money1_type + money2_type
    money_all.value = str_money_all.toLocaleString('ko-kr')

    //변수x / 변수 설정하지 않고 일회성으로 사용하는 것
    // money_all.value = Number(money1.value) + Number(money2.value)
})
