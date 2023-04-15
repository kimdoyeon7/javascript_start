//link a에 마우스 올렸을 때 view v1, 2 배경색 변경
//1. 2개 이상의 요소(for)를 변수 생성 link_a, view_div
//2. link_a 이벤트 대상, view_div 이벤트 만족 시 실행 대상 
//3. view_div 초기값 배경색 (노랑) -> 이벤트 만족 시 (파랑)
//for~in vs for~of vs forEach <-이것들 중 어떤것일까? 
//for~in 대상의 인덱스 기준으로 js 생성
//   view_div = for 변수명 i일 경우 = > view_div[i]
//for~of 대상의 객체 기준으로 js 생성   
//   view_div = for 변수명 i일 경우 => i
//forEach 대상의 객체와 인덱스를 모두 사용 js 생성
//   view_div = for 변수명 i일 경우 => (둘 다 사용)view_div[i], i

const view_div = document.querySelectorAll('.view > div')
const link_a = document.querySelectorAll('.link a')
for(let i of view_div){
    i.style.background = '#ff0'
}
link_a.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        view_div[i].style.background = '#0ff'
    })
})
// 가족으로 묶을 수 없을때 사촌지간을 연결 할 수 있는 방법은 ==== 인덱스
