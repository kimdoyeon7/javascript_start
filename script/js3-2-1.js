const day = {
    weather:['맑음','비','태풍','눈'],
    water:['10%','20%','50%','70%','90%'],
    wind:['3.4m/s','5.5m/s'],
    humidity:['15%','30%','50%','70%','100%']
} 
const btn = document.querySelectorAll('.btn')
const result = document.querySelector('#result')
console.log(day.weather, day.water, day.wind, day.humidity, btn, result)

btn[0].addEventListener('click',function(){
    result.innerHTML = day.weather[0]
})
btn[1].addEventListener('click',function(){
    result.innerHTML = day.water[1]
})
btn[2].addEventListener('click',function(){
    result.innerHTML = day.wind[0]
})
btn[3].addEventListener('click',function(){
    result.innerHTML = day.humidity[0]
})
