// 1. 가상으로 보유 포인트 설정하기(최소 100원 이상)
// 2.전액사용 버튼 클릭 시 보유포인트가 사용으로 숫자가 넘어가고 보유는 0이 되게 
// 3. 사용의 x를 누르면 보유는 12345원 사용은 0원이 되도록
// 4. 사용값 1이상이면 x보이고 아니면 x 숨기기
let won = 123
const all = document.querySelector('#point_all_btn')
const reset = document.querySelector('#point_reset')
const use_point = document.querySelector('#use_point')
const user_point = document.querySelector('#user_point')
const sub_contents = document.querySelector('.sub_contents')
console.log (won, all, reset,use_point, user_point)

user_point.value = won;
reset.style.display = 'none';
//2. 전액 사용 클릭 시 보유 --> 사용 값 전환(전환 후  보유0)
all.addEventListener('click',()=>{
    use_point.value = user_point.value
    user_point.value = 0
    reset_display()
})
//3. x 클릭 시 사용 -> 보유 값 전환(전환 후 사용o)
reset.addEventListener('click',()=>{
    user_point.value = use_point.value
    use_point.value = 0
    reset_display()
})
//4. 사용값 1이상이면 x보이고 아니면 x 숨기기
function reset_display(){
    if(use_point.value >= 1){//사용 값 1 이상이면
        reset.style.display = 'inline-block'
    }else{
        reset.style.display = 'none'
    }
}



// --------------------- 내가 한거 ------------------------------

// all.addEventListener('click',all_money)
// reset.addEventListener('click',cancel)
// function all_money(){
//     use_point.value = won;
//     user_point.value = 0;
// }
// function cancel(){
//     use_point.value = 0;
//     user_point.value = won;
// }