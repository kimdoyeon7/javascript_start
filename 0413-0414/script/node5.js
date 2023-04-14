// 노드 제거 하는 방법
// DOM.createElement(노드생성)
// DOM.remove()
// DOM.removeChild(자식노드)
const p = document.querySelectorAll('p')
const box = document.querySelector('#box')

p[2].remove()
box.removeChild(p[0]) // 특정 부모 안에서만 이라고 기준을 잡아서 안전하게 지울 수 있는 것임. 

// 노드 생성 하는 방법
let img = document.createElement('img')
img.alt = '연습 이미지'
// img.src = './image/test.jpg' // 오류 
console.log(img)

// 새로 등록할때 / ex) 일정등록, 게시판등록
let pTag = document.createElement('p')
pTag.classList.add('a')
pTag.innerHTML = 'p태그 생성'
console.log(pTag)
box.appendChild(pTag)

let boxAll = document.createElement('div')
console.log(boxAll)
boxAll.classList.add('a')

