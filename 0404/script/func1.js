const order = document.querySelector('.order') 
const result = document.querySelector('#result')
console.log(order,result)
// japangi() //함수호출(재실행)

order.addEventListener('click',japangi)

// 함수 기본 문법
// function 함수명() {실행재사용문법}
// 함수 생성과 호출을 별개로 처리한다.
function japangi() {
    let menu = window.prompt('주문하시겠습니까?')
    result.innerHTML = `주문하신 ${menu}나왔습니다.`
} // 호출 할 때만 실행되기 때문에 함수 자체로는 호출이 안됨. 작성과 호출은 별개 