// wallet, money1, money2, total, answer_btn, answer_input

let wallet = 10000
let money1 = 2000
let money2 = 1000
let total = wallet-money1-money2
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
// console.log(total, answer_btn, answer_input)
// answer_input.value = `남은 돈은 ${total}입니다`
answer_btn.addEventListener('click',function(){
    console.log(this)
    answer_input.value = `남은 돈은 ${total_replace}입니다`
})