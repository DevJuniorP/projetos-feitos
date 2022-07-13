function gerar(){
    var num = document.getElementById('numero')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Adicione um número!')
    }else{
        var Nvalue = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1;c<=10;c++){
            var item = document.createElement('option')
            item.text = `${Nvalue.value} x ${c} = ${Nvalue*c}`
            tab.appendChild(item)
        }
    }
}