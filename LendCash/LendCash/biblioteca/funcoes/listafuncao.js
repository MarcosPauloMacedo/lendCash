web3 = new Web3('HTTP://127.0.0.1:8545')
metaMask = new Web3(window.ethereum)
provedor = window.ethereum

function importarElemento(elemento){
   return document.querySelector(elemento)}

async function conectar(){
   contas = await metaMask.eth.getAccounts()
}

function carregar() {
   location.reload();
}

async function conectarMetamask(){
   resultado = await provedor.request({method: 'eth_requestAccounts'})
   conectar()
   carregar()
}