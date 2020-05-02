function Calcular() {
    nota01 = window.document.getElementById('iNota01')
    nota02 = window.document.getElementById('iNota02')
    nota03 = window.document.getElementById('iNota03')
    n1 = Number(nota01.value)
    n2 = Number(nota02.value)
    n3 = Number(nota03.value)
    res = window.document.getElementById('resultado')
    foto = window.document.getElementById('foto')
    med = (60 - ((n1 * 2 ) + (n2 * 2) + (n3 * 3))) / 3
    if (med <= 0) {
        res.innerText = `Parabéns, você não precisa de nota nessa matéria para passar de ano`
        foto.src ="Fotos/Foto-Já-Passou.jpg"
    } else if (med <= 4) {
        res.innerText = `Parabéns, você precisa de ${med.toFixed(1)} nessa matéria para passar de ano`
        foto.src = "Fotos/-4-Ash-Comemorando.png"
    } else if (med <= 7) {
        res.innerText = `Você precisa de ${med.toFixed(1)} nessa matéria para passar de ano`
        foto.src = "Fotos/-7-Estudante-no-Celular.jpg"
    } else if (med <= 9) {
        res.innerText = `Infelizmente, você precisa de ${med.toFixed(1)} nessa matéria para passar de ano`
        foto.src = "Fotos/-9-Aluno-Triste.jpg"
    } else if (med <= 10) {
        res.innerText = `EITA, você precisa de ${med.toFixed(1)} nessa matéria para passar de ano`
        foto.src = "Fotos/-10-Bebe-Chorando.jpg"
    } else {
        res.innerText = `Infelizmente você reprovou nessa matéria :(`
        foto.src = "Fotos/Reprovou-Meme.jpg"
    }
}