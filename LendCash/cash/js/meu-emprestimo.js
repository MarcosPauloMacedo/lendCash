meuEmprestimo = importarElemento('.meuEmprestimo')
etherEmprestado = importarElemento('.etherEmprestado')
carteira = importarElemento('.carteira')

async function contratoRede(){
    metaMask = new Web3(window.ethereum)
    contas = await metaMask.eth.getAccounts()
    contaPrincipal = contas[0]

    if(typeof contaPrincipal =='string'){
    meuContrato = '0x94513a44a6A6186BA5bFc00B8bbB875342E762a5'
    abi =   [
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
extrato = await contrato.methods.carteira(contaPrincipal).call()
novaGarantia = await contrato.methods.meuEmprestimo(contaPrincipal).call()
console.log(typeof extrato)
if(extrato != ''){
  etherEmprestado.textContent = (`${extrato} ETH`)
  meuEmprestimo.textContent = (`${novaGarantia} R$`)

  botao = document.createElement('button')
  botao.innerText = 'Pagar empréstimo'
  botao.classList.add('botao')
  carteira.appendChild(botao)
}
}
}


setTimeout(contratoRede(),500)
//valorMinhaGarantia()
