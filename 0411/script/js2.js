// forEach, for~in, for~of
let study = ['html','css','js','jq','sass','git']
//es5
for(let i=0; i<study.length; i++){
    console.log(study[i])
}
//es6 for ~ of 객체 값에 순차적으로 접근하는 for 
for(let i of study){
    console.log(i, study)
}
//es 6 for ~ in 객체 인덱스에 순차적으로 접근하는 for 
for(let i in study){
    console.log(i)
}
//es6 forEach 객체의 인덱스, 값에 모두 접근하는 for
study.forEach((value,index,array)=>{
    console.log(value,index,array)
})
// value,index,array를 풀 네임을 쓸 필요는 없다. // target, in, arr 라고 쓸 수 도 있음 
//객체랑 인덱스 위주로 자주 사용됨. 


//li태그에 접근해서 객체값, 인덱스를 추출하는 js
const li = document.querySelectorAll('#list li')
//for ~ in
console.log('---------------')
for(let i in li){
    console.log(i)
}
//li의 값을 i에 넣는다 ' 라고 생각하기
console.log('---------------')
//for ~ of
for(let i of li){
    console.log(i)
}
console.log('---------------')
//forEach
li.forEach((value,index)=>{console.log(value,index)})
//--------------------------
//객체와 for~in
let cat = {
    color:['white','black','red','yellow'],
    age:5,
    name:'cookie'
}
for(let i in cat){console.log(i, cat[i])}


const result = document.querySelector('#result')
let user = {
    name:'홍길동',
    age:20,
    id:'hong',
    pw:'1234',
    lang:'ko-kr'
}
for(let i in user){
    // console.log(user[i])
    // result.innerHTML = i // 왜 lang 만 보임? -> 대입연산자로 넣었기 때문에, 대입연산자는 앞의 값을 지우고 대입하는것임
    result.innerHTML += `${i} : ${user[i]}<br>`    
}

