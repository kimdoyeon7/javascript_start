//아메리카노 1개 가격 4700원 
//수량 증가, 가격 증가 
// 아메리카노 1개 가격 4700원

const order = document.querySelector('#order') //주문하기
const number = document.querySelector('#number') // 수량
const result = document.querySelector('#result') // 가격
const reset = document.querySelector('#reset') // 취소
const price = 4700 // 고정가격
let num = 0 // 변경 수량 변수(초기값 0)
let total = 0 // 변경 최종가격 변수(초기값 0)

console.log(order, number, result, reset, price, num,total)

order.addEventListener('click',()=>{coffee()})
reset.addEventListener('click',()=>{cancel()})

function coffee() {
    number.innerHTML = ++num
    total = price*(++num)
    result.innerHTML = total.toLocaleString('ko-kr')
}
function cancel() {
    num = 0
    total = 0
    number.innerHTML = num
    result.innerHTML = total
}



