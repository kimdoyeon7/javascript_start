// let id = 'admin'
// let pw = '1234'
// if(id == 'admin' && pw =='1234'){
//     console.log('관리자 로그인 성공')
// }else{
//     console.log('로그인 실패 ')
// }

//--------------------------------
//1~20 사이 숫자를 입력받고 해당 숫자가 
//10보다 작다면 '10이하입니다',
//아니라면 '11이상입니다'를 출력하세요.
// let num = Number(window.prompt('1~20 사이의 숫자를 입력해주세요~'))
// if( num>=1 && num<=10){
//     console.log('10이하입니다')
// }else {
//     console.log('11이상입니다')
// }
// ---------------------------------------
// let a = 5
// if(a > 10){
//     console.log('a>10')
// }else if(a == 10){
//     console.log('a==10')
// }else if (a < 9){
//     console.log('a<9')
// }
// console.log('if종료')
console.log('---------------------------------------')
// let number = 22
// if(number > 0 && number < 21){ //1~20
//     if(number<11){
//         console.log('10이하')
//     }else{
//         console.log('10이상')
//     }
//     console.log('1단 if 종류위치')
// }else {
//     console.log('error')
// }
// console.log('if종료')
console.log('--------------------------------------------')
let num = Number(window.prompt('1~20 사이의 숫자를 입력해주세요~'))
if( num>=0 && num<=20){
    if(num > 0 && num <= 10){
        console.log('1이상 10이하입니다')
    }else if(num>=11 && num<=20){
        console.log('11이상 20이하입니다')
    }
}

