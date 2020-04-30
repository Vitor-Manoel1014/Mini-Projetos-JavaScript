function Contar() {
    var inicio = window.document.getElementById('iInicio')
    var final = window.document.getElementById('iFim')
    var passo = window.document.getElementById('iPasso')
    var ini = Number(inicio.value)
    var fim = Number(final.value)
    var pas = Number(passo.value)
    var conta = window.document.getElementById('conta')
    if (inicio.value.length == 0 || passo.value.length == 0 || final.value.length == 0) {
        window.alert ('ERRO!!! Você não digitou algum dos valores')
    } else if(ini == fim) {
        conta.innerHTML = `Contamos de ${ini} até ${fim} com o passo ${pas} <br/>`
        conta.innerHTML += `${ini} &#128073; &#127937;`
    } else if(pas == 0) {
        window.alert ('Desculpe mas não existe passo 0')
    } else if(((fim - ini) / pas) > 9999) {
        window.alert ('Desculpe mas são muitos números para contar kkk')
    } else {
        conta.innerHTML = `Contamos de ${ini} até ${fim} com o passo ${pas} <br/>`
        if(((fim - ini) / pas) > 999) {
            window.alert ('Desculpe mas talvez demore um pouco por conta dos muitos números')
        }
        if (ini < fim && pas > 0) {
            for (var c = ini; c <= fim; c += pas) {
                conta.innerHTML += `${c} &#128073; `
            }
        } else if(ini > fim && pas < 0){
            for (var c = ini; c >= fim; c += pas) {
                conta.innerHTML += `${c} &#128073; `
            }
        } else {
            conta.innerHTML += '&infin; &#128073; '
        }
        conta.innerHTML += ' &#127937;'
    }
}