const btn = document.querySelector('#btn')
console.log(btn)
//function(){} = 화살표 함수 변경=> ()=>{}
btn.addEventListener('click',()=>{
    fun1(20,6)
})//이벤트만족 시 실행 함수
fun1(200,2) // 함수호출 자동실행
function fun1(n,m){//함수생성 //함수내에 변경되는 데이터가 있으면 매개변수가 필요함. 
    console.log(n+m)
}
console.log('----------------------')
function re1(){console.log(1)}
function re1_window(){window.alert(1)}
re1()
re1_window()
function re2(){
    return 1
}
console.log(re2())
window.alert(re2())

function fun(a,b){
    return a+b
}
console.log(fun(10,20))

function japangi(drink) {
    return (drink)
}
let data = japangi('콜라') + '가 나왔습니다';
console.log(data) // 콜라가 나왔습니다


