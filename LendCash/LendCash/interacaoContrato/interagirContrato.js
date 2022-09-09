transferir = importarElemento('.transferir')
numberContas = importarElemento('.numeroContas')
novoEtherGarantia = importarElemento('.etherGarantia')
valorTransferir = importarElemento('.valorTransferir')

transferir.addEventListener('click', enviarEther)

async function enviarEther(){
metaMask = new Web3(window.ethereum)
wei = 1000000000000000000

numberConta = numberContas.textContent
numberEther = Number(novoEtherGarantia.textContent)
numberEtherGarantia = numberEther * wei

meuContrato = '0x94513a44a6A6186BA5bFc00B8bbB875342E762a5'
abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "carteira",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "dolar",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "meuEmprestimo",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "extrato",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valor",
        "type": "string"
      }
    ],
    "name": "transferir",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
]

contrato = new metaMask.eth.Contract(abi,meuContrato)
garantia = novoEtherGarantia.textContent
realString = valorTransferir.textContent

carteiraReceber = '0x8d9D57854628eF39E21Eff9e6394538495DFdB9d'

transacaoEther = await contrato.methods.transferir(carteiraReceber,garantia,realString).send({from:numberConta, value: numberEtherGarantia})
extrato = await contrato.methods.carteira(numberConta).call()
novaGarantia = await contrato.methods.meuEmprestimo(numberConta).call()
console.log(extrato,novaGarantia)
}

