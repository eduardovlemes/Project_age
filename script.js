function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'crm.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jom.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adm.png')
            } else {
                img.setAttribute('src', 'idm.png')
            } 
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'crf.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jof.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adf.png')
            } else {
                img.setAttribute('src', 'idf.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}