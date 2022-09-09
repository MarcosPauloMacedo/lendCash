botao = importarElemento('.botao')
formulario = importarElemento('.formulario')
nome = importarElemento('.nome')
email = importarElemento('.email')
texto = importarElemento('.texto')
imagemMenu = importarElemento('.imagem-menu')

imagemMenu.addEventListener('click', function(){
    window.open('https://lendcash.com.br/')
})

function remover(){
    formulario.removeChild(resultado)
}
formulario.addEventListener('submit', function(event){
    event.preventDefault()

    resultado = document.createElement('p')
    resultado.innerText = 'Formulario enviado com sucesso'
    resultado.classList.add('resultado')
    
    formulario.appendChild(resultado)

    setInterval(remover,5000)
})
