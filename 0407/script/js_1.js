// 조건문 switch 다중조건처리
// let a = 20
// switch(a){
//     case 10:console.log('a==10'); break;
//     case 20:console.log('a==20'); break;
//     default:console.log('일치하는 값 없음');
// }
// ---------------------------2 
// let b = 10
// let c = 5
// let total = b>c // if (b>c){참}else{거짓}
// switch(total){
//     case true:console.log('참'); break;
//     case false:console.log('거짓'); break;
//     default:console.log('잘못된 접근입니다.')
// }
//--------------------------3
/*
쇼핑몰에서 과일을 검색하면 판매가를 표시해줍니다.
딸기는 1000원, 수박은 5000원, 오렌지는 2000원이 출력되고
다른 과일을 작성한다면 '판매하지 않는 상품입니다'라고 출력해보세요
*/

// let order = '딸기'
// switch(order){
//     case '딸기':console.log('딸기는 1000원'); break;
//     case '수박':console.log('수박은 5000원'); break;
//     case '오렌지':console.log('오렌지는 2000원'); break;
//     default:console.log('판매하지 않는 상품입니다.')
// }

// --------------------------- 4
/*
두 개의 수가 저장된 변수를 저장하고
연산법(+, -, *, /, %)을 사용자가 직접 정할 수 있는 변수를 제작하세요.
사용자가 입력한 값과 계산법에 따라서 
두 개의 수가 계산되는 간단한 계산기를 만들어 봅시다.
*/

// let num1 = Number(window.prompt('첫번째 값'))
// let num2 = Number(window.prompt('두번째 값'))
// let op = window.prompt('원하는 연산자입력하세요')
// let result ={
//     puls: num1+num2,
//     min: num1-num2,
//     c: num1*num2,
//     d: num1/num2,
//     e: num1%num2,
// }
// switch(op){
//     case '+':console.log(result.puls); break;
//     case '-':console.log(result.min); break;
//     case '*':console.log(result.c); break;
//     case '/':console.log(result.d); break;
//     case '%':console.log(result.e); break;
//     default:console.log(`땡~`)
// }
// 두번재 방법(이게 더 간단함)
// switch(op){
//     case '+':result=num1+num2; break;
//     case '-':result=num1-num2; break;
//     case '*':result=num1*num2; break;
//     case '/':result=num1/num2; break;
//     case '%':result=num1%num2; break;
//     default:console.log(`땡~`)
// }
//-----------------------------------5
/*
경품 추천기를 만들어봅시다
특정 값을 변수에 저장하고 1이 나오면 '당첨! 냉장고'
2가 나오면 '당첨! 세탁기', 3이 나오면 '당첨! tv' 
이 외의 모든 숫자는 '꽝!'이 나오게 해주세요.
*/
let lucky = 2
let result

switch(lucky){
    case 1:result='당첨! 냉장고'; break;
    case 2:result='당첨! 세탁기'; break;
    case 3:result='당첨! tv'; break;
    default:result = '꽝'
}
console.log(result)

// if(lucky == 1){
//     result = '당첨! 냉장고'
// }else if(lucky == 2){
//     result = '당첨! 세탁기'
// }else if(lucky == 3){
//     result = '당첨! tv'
// }else{
//     result = '꽝'
// }
// console.log(result)
