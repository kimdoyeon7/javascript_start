// 나의 평균값을 정하고 아래 요구사항에 맞게 출력해주세요
// 100~90이면 A학점, 
// 89~80이면 B학점, 
// 79~70이면 C학점, 
// 69~60이면 D학점, 
// 0~59 이하이면 재수강이 나오게해주세요
let average = 59
if(59<average && average<=100 ){
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