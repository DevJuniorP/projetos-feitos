function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var agora = data.getHours()
    //var agora = 19
    var min = new Date()
    var agoramin = min.getMinutes()
    msg.innerHTML = (`Agora são ${agora} horas e ${agoramin} minutos.`)
    if(agora > 0 && agora <= 12){
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#eec89a'
        msg.innerHTML = `Agora são ${agora} horas e ${agoramin} minutos da Manhã`
    }else if(agora >= 13 && agora <= 18){
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#bf916f'
        msg.innerHTML = `Agora são ${agora} horas e ${agoramin} minutos da Tarde`
    }else if(agora >= 19 && agora <=24){
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#16223f'
        msg.innerHTML = `Agora são ${agora} horas e ${agoramin} minutos da Noite`
    }
}