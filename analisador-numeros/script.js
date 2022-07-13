var num = document.getElementById('numero')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já constando')
    }
    num.value = '' // limpar os valores automaticamente
    num.focus() //serve para assim que eu adicionar um número automaticamente a barrinha de digitar ficar no input
} 

function finalizar (){
    if (valores.length == 0){
        alert('Sem valores adicionados.')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Valores possui um total de ${tot} elementos</p>` 
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores e ${soma}</p>`
        res.innerHTML += `<p>A média dos valores são ${media}</p>`
    }
}