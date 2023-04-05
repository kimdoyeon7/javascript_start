var box1 = 10
let box2 = 20 // 중복되지 않는 변수 // 값이 변하는 변수
const box3 = 30 // 상수
let box4 = 'hello javascript'
console.log (`box1 변수 값 = ${box1}`)
console.log (`box2 변수 값 = ${box2}`)
console.log (`box3 변수 값 = ${box3}`)
// box1 = box1+1
box1 += 1 //위와 같은 결과(복합대입)
box1 += 10 //box1 = box1+10 // 복합대입연산자
console.log (`box1 변수 값 = ${box1}`)

box2 = box2%2 // 2로 나눴을때 나머지 값 // 산술연산자 
console.log (`box2 변수 값 = ${box2}`)

box2 = box1++
console.log(`box2 변수 값 = ${box2}`)
console.log(`box2=${box2}, box1=${box1}`)
box1 = box3
console.log(`box1=${box1}, box3=${box3}`)
console.log(box1.length)
// ---------------------------------------------------------------------
let array1 = ['aqua','lime','yellow']
let array2 = new Array('black','white','gray')
let array3 = new Array(10)
console.log(array1)
console.log(array1[0],array1[1],array1[2])
console.log(array2)
console.log(array3)
array3[9] = 'black'
console.log(array3[10])
//--------------------------------------------------------------------
let array4 = [10,20,30,40,50]
console.log(array4)
console.log(array4[0]+1) //=11
console.log(array4[1]%2) // = 0 //20을 2로 나눈 나머지값
console.log(++array4[4]) // 51
console.log(array4[3]++) // 40
total = array4[3]++
console.log(`total=${total}, array4[3]=${array4[3]}`) //41 42
