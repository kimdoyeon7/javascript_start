//1. 사용자 아이디 확인
let userId = 'admin'
if(userId == 'admin' ){
    console.log(`${userId}님 어서오세요`)
}
//2. 사용자 숫자를 입력 -> 짝수면 -> 당신이 좋아하는 숫자는 짝수입니다.
let userNum = 888
if(userNum%2 == 0){
    console.log('당신이 좋아하는 숫자는 짝수입니다.')
}
//3. 나이 입력 -> 10살 이상이면 탑습가능 놀이기구 
let play = 7
if(play<=10){console.log('탑승불가')}
//4. 24시간 기준 현재 시간 입력 -> 12시 이후면 오후 ? 시 입니다. 
let time = 17
if(time>=12){console.log(`오후 ${time}시 입니다.`)}
// --------------------------------------------------------------------
let print = window.confirm('인쇄할까요?')
// console.log(print)
if(true){
    window.print()
}
