// 1. 가상으로 보유 포인트 설정하기(최소 100원 이상)
// 2.전액사용 버튼 클릭 시 보유포인트가 사용으로 숫자가 넘어가고 보유는 0이 되게 
// 3. 사용의 x를 누르면 보유는 12345원 사용은 0원이 되도록
let won = 12345
const all = document.querySelector('#point_all_btn')
const reset = document.querySelector('#point_reset')
const use_point = document.querySelector('#use_point')
const user_point = document.querySelector('#user_point')
const sub_contents = document.querySelector('.sub_contents')
console.log (won, all, reset,use_point, user_point)

user_point.value = won;


all.addEventListener('click',all_money)
reset.addEventListener('click',cancel)


function all_money(){
    use_point.value = won;
    user_point.value = 0;
}
function cancel(){
    use_point.value = 0;
    user_point.value = won;
}