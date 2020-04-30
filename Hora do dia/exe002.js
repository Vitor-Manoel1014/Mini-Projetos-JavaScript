function hora() {
    var img = window.document.getElementById('foto')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerText = `Agora são ${hora}:${minuto} horas`
    if (hora >= 6 && hora < 13) {
        msg.innerHTML += '<br/><br/>Bom dia'
        window.document.body.style.backgroundColor = "#0099aa"
        img.src = "fotos/foto_manha.jpg"
    } else if (hora >= 13 && hora < 18) {
        msg.innerHTML += '<br/><br/>Boa tarde'
        window.document.body.style.backgroundColor = "#ff9100"
        img.src = "fotos/foto_tarde.jpg"
    } else if (hora >= 18 && hora <= 23){
        msg.innerHTML += '<br/><br/>Boa noite'
        window.document.body.style.backgroundColor = "#000000"
        img.src = "fotos/foto_noite.jpg"
    } else {
        msg.innerHTML += '<br/><br/>Boa madruga kkk'
        window.document.body.style.backgroundColor = "#0000ff"
        img.src = "fotos/foto_madrugada.jpg"
    }
}

