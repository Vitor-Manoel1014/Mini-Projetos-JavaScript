var numeros = []
var maior = 0
var menor = 100
var soma = 0

function Adicionar() {
    var numero = window.document.getElementById('iNum')
    var num = Number(numero.value)
    var ver = window.document.getElementById('verificacao')
    select = window.document.getElementById('iArray')
    if (numeros.indexOf(num) == -1) {
        if (num > 100 || num < 0) {
            window.alert('Desculpe mas aceitamos apenas números de 0 a 100')
        } else {
            if (num > maior) {
                maior = num
            }
            if (num < menor) {
                menor = num
            }
            soma += num
            numeros.push(num)
            var item = window.document.createElement('option')
            item.text += `Valor ${num} adicionado`
            select.appendChild(item)
            ver.innerHTML = ``
        }    
    } else {
        window.alert('Esse número já foi adicionado, digite outro')
    }
}

function Verificar() {
    var ver = window.document.getElementById('verificacao')
    if (numeros.length == 0){
        window.alert('Desculpe, mas você não digitou nenhum valor')
    } else {
        ver.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados<br/>`
        ver.innerHTML += `O maior valor informado foi ${maior}<br/>`
        ver.innerHTML += `O menor valor informado foi ${menor}<br/>`
        ver.innerHTML += `Somando todos os valores temos ${soma}<br/>`
        ver.innerHTML += `A média dos valores digitados é ${soma / numeros.length}`
    }
}