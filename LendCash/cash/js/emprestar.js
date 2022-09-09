pegarReal = importarElemento('.pegarReal')
etherGarantia = importarElemento('.etherGarantia')
gerarGarantia = importarElemento('#gerarGarantiaEther')
valorTransferir = importarElemento('.valorTransferir')

gerarGarantia.addEventListener('click', ConversaoSimples)

function ConversaoSimples(){
    novoXml = new XMLHttpRequest()
    novaCotacaoDolar = new XMLHttpRequest()

        novoXml.open('Get', 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken')
        novaCotacaoDolar.open('Get', 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')

    novoXml.send()
    novaCotacaoDolar.send()

    novoXml.addEventListener('load',function(){
        novoXmltext = novoXml.responseText
        novoXmlConvertido = JSON.parse(novoXmltext)
        
        novaCotacaoDolarText = novaCotacaoDolar.responseText
        novaCotacaoDolarConvertido = JSON.parse(novaCotacaoDolarText)

        novoDolar = Number(novaCotacaoDolarConvertido.USDBRL.high)
        novoEthereum = Number(novoXmlConvertido.result.ethusd)

        novoRealConvertido = pegarReal.value/novoDolar
       
        novoEthereumdeGarantia = novoRealConvertido/novoEthereum
        novoEthereumFormatado = novoEthereumdeGarantia
        etherGarantia.textContent = novoEthereumFormatado.toFixed(4)
        valorTransferir.textContent = pegarReal.value
    
    })
}
