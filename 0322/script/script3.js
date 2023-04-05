let num1 = 10;
let num2 = 20;
let result;
num1--;
console.log(num1); // 9
num1++;
console.log(num1); // 10
result=num2++;
console.log(result); // 20
// result=++num2;
// console.log(result); // 22
result += ++num2; //result = result(20) + ++num2(22)
console.log(result); // 22 -> 42
console.log('--------------------------------')
let age = window.prompt('당신의 나이는?')
console.log('올해 당신의 나이는 '+age+'살입니다.')
age = ++age; // 또는 age++
console.log('내년 당신의 나이는 '+age+'살입니다.')
console.log('내년 당신의 나이는 '+(++age)+'살입니다.')
// 템플릿 문자열
console.log(`내후년 당신의 나이는 ${++age}살입니다`)
// 구구단
let dan99 = window.prompt ('구구단 몇단이 궁금해요?')
// 2*1=2
console.log(`${dan99}*1=${dan99*1}`)
console.log(`${dan99}*2=${dan99*2}`)
console.log(`${dan99}*3=${dan99*3}`)
console.log(`${dan99}*4=${dan99*4}`)
console.log(`${dan99}*5=${dan99*5}`)
console.log(`${dan99}*6=${dan99*6}`)
console.log(`${dan99}*7=${dan99*7}`)
console.log(`${dan99}*8=${dan99*8}`)
console.log(`${dan99}*9=${dan99*9}`)