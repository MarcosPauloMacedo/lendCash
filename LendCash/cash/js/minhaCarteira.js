numeroContas = importarElemento('.numeroContas')
ether = importarElemento('.ether')
conectarCarteira = importarElemento('.conectarCarteira')
etherAtualizado = importarElemento('.etherAtualizado')
creditoAprovado = importarElemento('.creditoAprovado')
valorGarantia = importarElemento('.valorGarantia')
atencao = importarElemento('.atencao')

async function mostrarCarteira(){
    contas = await metaMask.eth.getAccounts()
    if(contas >0){
      numeroContas.textContent = contas}
}

async function saldo(){
  conta = await metaMask.eth.getAccounts()
  saldoConta = await metaMask.eth.getBalance(conta[0])

  valorEther = 1000000000000000000
  saldoEther = saldoConta/valorEther

  ether.textContent = `${saldoEther.toFixed(4)} ETH`
}

async function credito(){
  conta = await metaMask.eth.getAccounts()
  saldoContaWei = await metaMask.eth.getBalance(conta[0])

  etherWei = 1000000000000000000
  saldoConta = saldoContaWei/etherWei

  etherPreco() //conversao.js
}

conectarCarteira.addEventListener('click',async function(){
  if (typeof provedor == 'undefined') {
    window.open('https://metamask.app.link/dapp/lendcash.com.br/cash/')
  }

    /*function mudarFonte(){
      atencao.style.fontSize = '0px'
    }

    atencao.innerText = 'Metamask não instalado'
    atencao.style.fontSize = '13px'
    setTimeout(mudarFonte,5000)
  }*/
  
  else{
   idRede = await provedor.request({method:'eth_chainId'})
   if(idRede == 0x3)conectarMetamask()

   else{
     function mudarFonte(){
      atencao.style.fontSize = '0px'
     }
     atencao.style.fontSize = '13px'
     setTimeout(mudarFonte,5000)
    }
  }
})

async function mostrarDados(){
  rede = await provedor.request({method:'eth_chainId'})
  contas = await metaMask.eth.getAccounts()
  conta = contas[0]
  if(typeof conta == 'string' && rede == 0x3)mostrarCarteira(),
  saldo(),setTimeout(credito(),2000)}

mostrarDados()
provedor.on('chainChanged', (chainId) => { window.location.reload()})
provedor.on('accountsChanged', (accounts) => { window.location.reload()})

