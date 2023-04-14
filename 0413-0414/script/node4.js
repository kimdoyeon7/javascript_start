// 자식들 노드
//childnodes children, [index]
const box = document.querySelector('#box')
const result = document.querySelector('#result')

console.log(box.childNodes)//공백 포함 자식들
console.log(box.children) // 요소 인식(자식들)
console.log(box.children[1])

box.children[0].classList.add('b')
result.children[0].classList.add('c')

let clone1 = box.children[2].cloneNode(true)
let clone2 = box.children[1].cloneNode(true)
// result.firstChild = 첫번째 형제로~ 라는 뜻 // insertBefore = 이전 형제 
result.insertBefore(clone1, result.firstChild) 
box.appendChild(clone2, box.secondChild)

