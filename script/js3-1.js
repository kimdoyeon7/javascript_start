
// 아이디 비밀번호 확인 버튼을 누르면 본인인증이 되었다는 전제하에 서버의 정보가 불러와져서 출력이 되게

// 사이트에 미리 저장된 회원정보 변수(배열)
let userId = ['a','b','c','d','e','f']
let userPw = ['1','2','3','4','5','6']
//DOM 제어 변수
const id_pw_result = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')
console.log(id_pw_result, answer_btn)
console.log(id_pw_result[0],id_pw_result[1])

answer_btn.addEventListener('click',function(){
    // console.log('this')
    window.alert(`아이디는 ${userId[1]}, 비밀번호는 ${userPw[1]} 이에용~ `)
    id_pw_result[0].innerHTML = userId[1]
    id_pw_result[1].innerHTML = userPw[1]
})
