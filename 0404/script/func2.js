// 출금하기 버튼 클릭
// 얼마 출금하시겠습니가?
// 3자기 간격 콤마 ?00,000원 출력되었습니다.
//(선택) 남은 잔액은 ????원 남았습니다.
let order = document.querySelector('.order')
let result = document.querySelector('#result')
let less_money = 100000000000000
console.log(order, result)

order.addEventListener('click',money)

function money() {
    let much = window.prompt(`얼마 출금하시겠습니까?`)
    let num = Number(much)
    let total = num.toLocaleString('ko-kr')
    let total2 = less_money - num
    // let less = less_money - num
    // let total2 = less.toLocaleString('ko-kr')
    // result.innerHTML = `${total}원 출력되었습니다. 남은 잔액은 ${total2.toLocaleString('ko-kr')}입니다`
    result.innerHTML = `${total}원 출력되었습니다.` 
    result.innerHTML += `남은 잔액은 ${total2.toLocaleString('ko-kr')}입니다`
    
}
// result.style.color = 'blue'
// result.style.backgroundColor = 'yellow'
// result.style.display = 'inline-block'
// order.style.display = 'block'
// result.style.padding = '20px'
// result.style.fontWeight = '800'
// order.style.margin = '0 auto'
