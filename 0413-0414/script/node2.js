// 노드관계연습(형제)
//nextSibling, nextELementSibling
//previousSibling, previousElementSibling
const p = document.querySelectorAll('p') // 4
console.log(p[0].nextSibling) // 공백을 인식해서 console에서 text로 나옴 
console.log(p[0].nextSibling.nextSibling) // 공백 다음 second가 나옴
console.log(p[0].nextElementSibling)

p[1].nextElementSibling.style.color = 'red'

console.log(p[1].previousElementSibling)
console.log(p[2].previousElementSibling.previousElementSibling)

p[2].previousElementSibling.style.transform = 'rotate(20deg)'
p[1].previousElementSibling.style.transform = 'skew(-20deg)'
p[1].nextElementSibling.style.transform = 'skew(20deg)'

let clone1 = p[1].previousElementSibling.cloneNode(true)
let clone2 = p[2].previousElementSibling.cloneNode(true)
console.log(clone1)

p[3].appendChild(clone1)
p[3].appendChild(clone2)
