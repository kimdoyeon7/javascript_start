// 자식 노드 
// nth-child(n), first-child, last-child CSS 비슷
const box = document.querySelector('#box')
const result = document.querySelector('#result')

console.log(box.firstChild) // 공백포함
console.log(box.firstElementChild) // 요소 인식
console.log(box.lastChild)
console.log(box.lastElementChild)

box.firstElementChild.style.transform = 'scaleX(1.5)'
box.lastElementChild.classList.add('a') // a는 두개이상 스타일을 지정해놓고 classList.add를 불러오는 방법

// ex) 댓글내용 같은거 복제할때 
let clone1 = box.lastElementChild.cloneNode(true)
let clone2 = box.firstElementChild.cloneNode(true)
let clone3 = box.parentNode.cloneNode()
console.log(clone1, clone2, clone3)


// result.appendChild(clone1) //마지막 자식 추가
//DOM.insertBefore(복제대상, 기준위치)
result.insertBefore(clone1, result.fristChild)
result.appendChild(clone3)
box.insertBefore(clone2, box.fristChild)




