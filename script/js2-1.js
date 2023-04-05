// answer_btn, number, data_type, result2


// const result = document.querySelector('#result')
// const data_type = document.querySelector('#result1')
// const user_answer = document.querySelector('#result2')
// const answer_btn = document.querySelector('#answer_btn')
// console.log(result, data_type, user_answer, answer_btn)
// console.log(result.value)//실시간 input값 추적되지 않으므로 결과값 표시안됨.



// answer_btn.addEventListener('click',function(){
//     console.log(result.value)//이벤트 추적 가능확인
//     console.log(typeof result.value)//str->num
//     let result_type = Number(result.value) // Number = 형변환 메서드 
//     // console.log('this')
//     data_type.value = typeof (result_type)
//     user_answer.value = result_type
// })


const num_input = document.querySelector('#result')
const result_type = document.querySelector('#result1')
const result_val = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
console.log(num_input, result_type, result_val, answer_btn)
console.log(num_input.value)//실시간 input값 추적되지 않으므로 결과값 표시안됨.



answer_btn.addEventListener('click',function(){
    console.log(num_input.value)//이벤트 추적 가능확인
    console.log(typeof num_input.value)//str->num
    //num_input의 값을 숫자로 변환하는 저장변수
    let number_type = Number(num_input.value) // Number = 형변환 메서드 
    //위 변수가 숫자인지 +1을 통해 숫자+숫자=숫자 인지 결과 확인
    console.log(number_type+1)
    //위 변수가 number 데이터타입인지 typeof 연산자확인
    console.log(typeof number_type)
    // 모든결과 console 확인 후 각 변수에 최종 데이터 결과 확인
    result_val.value = num_input.value
    result_type.value = typeof number_type
})
