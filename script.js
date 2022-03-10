function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date ()
    //var hora  = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12){
        // BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#d9c7a2'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background ='#5c4f0a'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#3a2a44'
    }
}

