function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var an = data.getFullYear()
    var hora = data.getHours()
        //var hora = 15
    var min = data.getMinutes()
    var sec = data.getSeconds()


    msg.innerHTML = `Ano ${an} e agora são: ${hora}:${min}:${sec}`
    if (hora >= 0 && hora < 12) {
        img.src = 'banco de imagens/fotomanha.png'
        document.body.style.background = 'white'
        window.alert('BOM DIA!')
    } else if (hora >= 12 && hora < 19) {
        img.src = 'banco de imagens/fototarde.png'
        document.body.style.background = 'orange'
        window.alert('BOA TARDE!')
    } else {
        img.src = 'banco de imagens/fotonoite.png'
        document.body.style.background = 'black'
        window.alert('BOA NOITE!')
    }

}