//계산식) 적정체중 63  = (본인신장-100)*0.9
//변수명 예) userHeight, userWeight, normal_w
//prompt 현재 키,몸무게 입력받기
//DOM객체 변수 생성하기


// 1. prompt 현재 키,몸무게 입력받기
let userHeight = window.prompt('당신의 현재 키는?')
let userWeight = window.prompt('당신의 현재 몸무게는?')
let normal_w = (userHeight-100)*0.9
let result = userWeight-normal_w
// 2. DOM객체 변수 생성하기
const span_height = document.getElementsByClassName('height')[0]
const span_weight = document.getElementsByClassName('weight')[0]
const span_normal = document.getElementsByClassName('normal')[0]
const span_weight2 = document.getElementsByClassName('weight2')[0]
//검사
console.log(userHeight, userWeight, normal_w, result)
console.log(span_height, span_weight, span_normal, span_weight2)
// 3. DOM변수에 데이터변수 userHeight~result 출력
span_height.innerHTML = userHeight
span_weight.innerHTML = userWeight
span_normal.innerHTML = normal_w
span_weight2.innerHTML = result
