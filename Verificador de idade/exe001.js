function verificar() {
    var img = window.document.getElementById('foto')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('cAnoNasc')
    var fsex = window.document.getElementsByName('tSexo')
    var idade = ano - Number(fano.value)
    var res = window.document.querySelector('p#produt')
    var genero = ''
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("ERRO!!! Verifique os dados e digite novamente")
    } else if (fano.value < 1900) {
        img.src = "Fotos/Faleceu.jpg"
        res.innerText = `Detectamos que você morreu`
    } else if (fsex[0].checked) {
        genero = 'Homem'
        if (idade <= 3) {
            img.src = "Fotos/foto_homem_bebe2.jpg"
        } else if (idade <= 12) {
            img.src = "Fotos/foto_homem_crianca2.0.jpg"
        } else if (idade <= 21) {
            img.src = "Fotos/foto_homem_jovem2.jpg"
        } else if (idade <= 60) {
            img.src = "Fotos/foto_homem_adulto2.jpg"
        } else {
            img.src = "Fotos/foto_homem_idoso2.0.jpg"
        }
        res.innerText = `Detectamos um ${genero} com ${idade} anos`
    } else {
        genero = 'Mulher'
        if (idade <= 3) {
            img.src = "Fotos/foto_mulher_bebe2.jpg"
        } else if (idade <= 12) {
            img.src = "Fotos/foto_mulher_crianca2.0.jpg"
        } else if (idade <= 21) {
            img.src = "Fotos/foto_mulher_jovem2.0.jpg"
        } else if (idade <= 60) {
            img.src = "Fotos/foto_mulher_adulto2.jpg"
        } else {
            img.src = "Fotos/foto_mulher_idoso2.jpg"
        }
        res.innerText = `Detectamos uma ${genero} com ${idade} anos`
    }
}