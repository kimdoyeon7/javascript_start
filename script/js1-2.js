// button, result, money1, money2, total

let money1 = 10000
let money2 = 1000
let total = money1+money2
//객체.메서드()
//객체.toLocaleString('ko-kr')
let total_replace = total.toLocaleString('ko-kr')
console.log(total_replace)

const answer = document.querySelector('#answer_btn')
const result = document.querySelector('#result')

console.log(total, answer, result)

// result.value = total

answer_btn.addEventListener('click',function(){
    // console.log(this) // 결과를 미리 콘솔로 확인해주기 
    result.value = `어피치의 핑크 지갑엔${total_replace}원이 있어요`
})

