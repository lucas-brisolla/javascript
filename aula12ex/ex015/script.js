function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
           genero = 'homem' 
           if(idade >= 0 && idade < 10){
               //Criança
               img.setAttribute('src', 'boy.png')
           } else if(idade < 21){
               //Jovem
               img.setAttribute('src', 'teenboy.png')
           } else if(idade < 50){
               //Adulto
               img.setAttribute('src', 'man.png')
           }else {
               //idoso
               img.setAttribute('src', 'oldman.png')
           }
        } else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'girl.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'teengirl.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'woman.png')
            }else {
                //idoso
                img.setAttribute('src', 'oldwoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}