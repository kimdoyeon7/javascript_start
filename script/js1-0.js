// const h1 = document.getElementsByTagName('h1')
// const sub_title = document.getElementsByClassName('sub_title')
// const h3 = document.getElementsByTagName('h3')
// const p = document.getElementsByTagName('p')
// const main = document.getElementById('main')
// const btn = document.getElementById('btn')
// const link = document.getElementById('link')

// console.log(h1, sub_title, h3, p, main, btn, link)

//var vs let const
// ES6에서 let const가 var의 단점 보완. 중복되지 않는 변수 반복되지 않은 상수구분
// document.getElementById, sByTagName, sByClassName == ES5이전 버전 DOM
//querySelector ES6 DOM

const box_h4 = document.querySelector('.box h4')
const h1_tag = document.querySelector('h1')
const h1_after = document.querySelector('h1::after')
const h2_cls = document.querySelectorAll('.sub_title')
const h3_tag = document.querySelector('h3')
const p = document.querySelectorAll('p')
const main = document.querySelector('#main')
const btn = document.querySelector('#btn')
const link = document.querySelector('#link')

console.log(box_h4)
console.log(h1_tag) // 변수 값 확인
console.log(h1_after) // 변수 값 확인
console.log(h2_cls[1])
console.log(h3_tag)
console.log(p[0])
console.log(main)
console.log(btn)
console.log(link)

//객체.style.css속성 = '속성값'
// h1_after.style.content = 'ABC'
h1_tag.style.backgroundColor = '#f00'



