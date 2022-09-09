const carteira = new Carteira()
const emprestimo = new Emprestimo()
const transferencia = new Transferencia()

let buscar = document.querySelector.bind(document)
let provedor = window.ethereum

emprestimo.apiDolar()
emprestimo.apiEther()

function dadosEmprestimo(){
    emprestimo.cotacaoEther()
}

setTimeout(dadosEmprestimo,500)

buscar('#conectarCarteira')
.addEventListener('click', dadosCarteira)

async function dadosCarteira(){
     await carteira.buscarCarteira()

     if(typeof provedor != 'undefined' && carteira.
     statusRede() == '0x3'){
     await carteira.buscarConta()
     await carteira.buscarSaldo()
     await carteira.buscarEmprestimo()
     emprestimo.etherGarantia()
     emprestimo.margemCredito()
     }}

buscar('#formulario-garantia')
.addEventListener('submit', (event) =>{
    event.preventDefault()

    let valorEther = emprestimo.valorEther
    let valorDolar = emprestimo.valorDolar

    return transferencia
    .gerandoGarantia(valorEther,valorDolar)
    
})

buscar('#formulario')
.addEventListener('submit', (event) =>{
    event.preventDefault()
    alert('transferencia realizada com sucesso')
})

function ativarEvento(){
    if(typeof provedor != 'undefined'){
        provedor.on('chainChanged', (chainId) => {location.reload()})
        provedor.on('accountsChanged', (accounts) => {dadosCarteira()})
    }
}

buscar('#caixa-interrogacao')
.addEventListener('click', function(){
    window.open('https://lendcash.com.br/intro/')
})

ativarEvento()

