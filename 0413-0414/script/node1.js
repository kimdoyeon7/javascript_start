// 노드 관계 속성
/*
DOM.parentNode 한단계 앞 부모 인식
DOM.parentNode.parentNode 앞 앞 부모 인식
------DOM 부모 기준 연습 + cloneNode() // 함수 또는 메서드임 
*/
const p = document.querySelectorAll('p')
console.log(p[0].parentNode) // box
console.log(p[3].parentNode) //result
//객체.속성.속성 = 값
p[0].parentNode.style.backgroundColor = 'lime'
p[1].parentNode.parentNode.style.border = '2px solid #000'
//노드 복제(복제->반복사용 위치 붙여넣기) // ctrl+c 와 같음
console.log(p[2].parentNode.cloneNode()) // 대상만 복제
console.log(p[2].parentNode.cloneNode(true)) // 대상의 자식, 자손 복제 // 이 경우를 사용하는 경우가 많다. 
console.log(p[0].parentNode.parentNode.cloneNode())
console.log(p[0].parentNode.parentNode.cloneNode(true))

let clone1 = p[0].parentNode.cloneNode(true)
let clone2 = p[0].parentNode.cloneNode()
console.log(clone1) // 원본x 복제본 o (원본에 영향주지 않음)

//appendChild 마지막 자식 위치에 
p[3].appendChild(clone1)
p[2].appendChild(clone2)
/*
객체.속성
객체.속성.함수()
DOM.parentNode 부모 
DOM.parentNode.parentNode 부모의 부모
DOM.parentNode.style.속성 = 값 부모에 css 적용하기 
DOM.parentNode.cloneNode() 부모 복제(자식,자손 포함 x)
DOM.parentNode.cloneNode(ture) 부모 복제 (자식, 자손 포함 O)
DOM.appendChild(삽입노드) 마지막 자식 위치에 노드삽입
*/