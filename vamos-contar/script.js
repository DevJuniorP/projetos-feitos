    function contar(){
    //VARIÁVEIS//
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pul = document.getElementById('pular')
    var res = document.getElementById('res')
    var n1 = Number(ini.value)
    var n2 = Number(fim.value)
    var n3 = Number(pul.value)
    res.innerHTML = 'Contando: <br>'
    //VARIÁVEIS//

    //CONDIÇÃO//
    if(ini.value.length == 0 || fim.value.length == 0 || pul.value.length == 0){
        res.innerHTML = 'Impossível Contar'
        alert('[ERROR] Falta de Dados')
    }else{
        res.innerHTML = ''
        res.innerHTML += `Contando:`
        if(ini.value.length < Number(fim.value)){
            //COMTAGEM CRESCENTE
            for(var c = n1; c <n2; c += n3){
                res.innerHTML += `${c}, \u{1F449}`
        }
        }else if(ini.value.length > Number(fim.value)){
            //CONTAGEM DECRESCENTE
            for(var c = n1; c >n2; c -= n3){
                res.innerHTML += `${c}, \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F590}`
    }
}
