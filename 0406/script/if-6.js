// 나의 평균값을 정하고 아래 요구사항에 맞게 출력해주세요
// 100~90이면 A학점, 
// 89~80이면 B학점, 
// 79~70이면 C학점, 
// 69~60이면 D학점, 
// 0~59 이하이면 재수강이 나오게해주세요
let average = 59
if(59<average && average<=101 ){
    if(90<=average){
        console.log('A학점입니다.')
    }else if(80<=average){
        console.log('B학점입니다.')
    }else if(70<=average){
        console.log('C학점입니다.')
    }else if(60<=average){
        console.log('D학점입니다.')
    }
}else{
    console.log('재수강 대상입니다.')
}


// 샘이 한거
let score = 30
let total2
if(score >= 0 && score < 101){
    if(score>=90){
        total2 = 'a'
    }else if(score>=80){
        total2 = 'b'
    }else if(score>=70){
        total2 = 'c'
    }else if(score>=60){
        total2 = 'd'
    }else {
        total2 = 'f'
    }
}else{window.alert('잘못된 입력값입니다.')}
console.log(total2)

