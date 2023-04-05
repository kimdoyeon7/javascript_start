//answer_btn
//answer_input
//day1
//day2
//day3
//total

let day1 = 10
let day2 = 5
let day3 = 8
let total = day1+day2+day3
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')

console.log(answer_btn, answer_input, total)
//속성을 읽는다.
//객체.속성

//속성을 변경한다.
//객체.속성 = 변경값
//length(글자수체크), innerHTML(내용읽을때, 내용변경할때), style

// answer_input.value = `결과는 ${total}장입니다.` / 이건 클릭 전에 실행되는 것 즉 즉시결과호출

//요소.addEventListener(이벤트종류, 함수실행 및 호출);
answer_btn.addEventListener('click',function(){
    //이벤트 조건 만족 시 실행 결과 작성 
    // console.log(this)
    answer_input.value = `정답은 ${total}장입니다.`
})