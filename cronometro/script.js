var seg = 0
var min = 0
var hora = 0
var intervalo
function iniciar(){
    intervalo = setInterval(contador, 10) //setar um intervalo, 1000 equivale á 1 seg
}

function pausar(){
    clearInterval(intervalo) //limpar intervalo, mas na verdade serve mais como pasuar
}

function parar(){
    clearInterval(intervalo)
    seg = 0
    min = 0
    document.getElementById('contador').innerHTML = '00:00:00'
}

function contador(){
    seg++
    if(seg==60){
        min++
        seg=0
    }else if(min ==60){
        hora++
        min = 0
        seg = 0
    }
    document.getElementById('contador').innerHTML = `${hora}:${min}:${seg}`
}