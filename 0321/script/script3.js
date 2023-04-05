const btn1 = document.getElementById('btn1')
console.log(btn1)
// 내용을 확인하기 위해서는 메소드가 아닌 속성임
console.log(btn1.innerHTML)
//내용을 바꾸고 싶을때 먼저 innerHTML로 확인해야함
//innerHTML은 내용 보는 용 속성임

// const btn = document.getElementsByClassName('btn')
const btn = document.getElementsByClassName('btn')
console.log(btn[0],btn[1],btn[2],btn[3])
// console.log(btn)
// console.log(btn.innerHTML) / 내용을 console에서 읽기 위해서 쓴것임

btn[0].innerHTML = 'home'
btn[1].innerHTML = 'mail'
btn[2].innerHTML = 'cafe'
btn[3].innerHTML = 'blog'


// console.log(btn[0].innerHTML)
// console.log(btn[1].innerHTML)
// console.log(btn[2].innerHTML)
// console.log(btn[3].innerHTML)

//내용변경 == 대입한다 (대입연산자=확인)
btn1.innerHTML = '확인완료' 
// 변수의 내용을 확인완료로 대입하겠다
// 왜 console.log를 안적었는지? 
//console는 테스트 용이니까 실행하기 위해서는 console없이 적는것임