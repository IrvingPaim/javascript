function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var res = window.document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
       window.alert('[ERRO] verifique os dados digitados e tente novamente') 
   } else  {
       var fsex = window.document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = window.document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mas-bebe.png')
           } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'mas-jovem.png')
           } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'mas-adulto.png')
           } else {
                img.setAttribute('src', 'mas-idoso.png')
           }
        } else if (fsex[1].checked) {
           genero = 'Mulher'
           if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fem-bebe.png')
        } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'fem-jovem.png')
        } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'fem-adulta.png')
        } else {
                img.setAttribute('src', 'fem-idosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
       res.appendChild(img)
   }
}