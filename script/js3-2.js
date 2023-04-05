//월-맑음
//화-맑음
//수-비
//목-비
//금-맑음
//토-흐림
//일-눈

const week = ['월','화','수','목','금','토','일']
const weather = ['맑음','비','흐림','눈','태풍']
const result = document.querySelectorAll('.result')
const btn = document.querySelector('#answer_btn')
console.log(week, weather,result, btn)

btn.addEventListener('click',function(){
    // console.log(this)
    window.alert (`이번주의 날씨는`)
    result[0].innerHTML = `${week[0]}요일은 ${weather[0]}입니다.`
    result[1].innerHTML = `${week[1]}요일은 ${weather[0]}입니다.`
    result[2].innerHTML = `${week[2]}요일은 ${weather[1]}입니다.`
    result[3].innerHTML = `${week[3]}요일은 ${weather[1]}입니다.`
    result[4].innerHTML = `${week[4]}요일은 ${weather[0]}입니다.`
    result[5].innerHTML = `${week[5]}요일은 ${weather[2]}입니다.`
    result[6].innerHTML = `${week[6]}요일은 ${weather[3]}입니다.`
})