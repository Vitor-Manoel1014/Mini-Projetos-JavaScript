function gerar() {
    var numero = window.document.getElementById('iNum')
    var n = Number(numero.value)
    var tabu = window.document.getElementById('seltab')
    tabu.innerHTML = ''
    if (numero.value.length == 0) {
        window.alert('ERRO! Desculpe mas você não digitou um número')
    } else {
        for(var c = 1; c <= 10; c++) {
            var item = window.document.createElement('option')
            item.text += `${n} x ${c} = ${n*c}`
            tabu.appendChild(item)
            item.value = `tab${c}`
        }
    }
}