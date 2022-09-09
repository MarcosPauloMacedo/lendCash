/*
creditoAprovado = importarElemento('.creditoAprovado')
valorGarantia = importarElemento('.valorGarantia')
etherAtualizado = importarElemento('.etherAtualizado')
emprestimo = importarElemento('.emprestimo')

async function credito(){
    conta = await metaMask.eth.getAccounts()
    saldoContaWei = await metaMask.eth.getBalance(conta[0])

    etherWei = 1000000000000000000
    saldoConta = saldoContaWei/etherWei

    etherPreco()

  //  console.log(numero)
   // creditoAprovado.placeholder = numero
   // valorGarantia.placeholder = saldoEther
}

//setTimeout(credito, 100);


/*gerarGarantia.addEventListener('click', function garantiaGerada(){
    valorEtherReal = 10350

    valorDigitado = valorReal.value
    garantiaEther = valorDigitado/valorEtherReal
    garantiaFeita = garantiaEther.toFixed(8)
    console.log(garantiaFeita)
    valorGarantiaGerado.placeholder = garantiaFeita
})

*/

