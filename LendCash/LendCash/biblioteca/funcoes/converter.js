creditoAprovado = importarElemento('.creditoAprovado')
valorGarantia = importarElemento('.valorGarantia')
etherAtualizado = importarElemento('.etherAtualizado')

xml = new XMLHttpRequest()
cotacaoDolar = new XMLHttpRequest()


    xml.open('Get', 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken')
    cotacaoDolar.open('Get', 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')

function etherPreco(){

//xml = new XMLHttpRequest()
//cotacaoDolar = new XMLHttpRequest()

xml.send()
cotacaoDolar.send()

xml.addEventListener('load', function(){
xmltext = xml.responseText
xmlConvertido = JSON.parse(xmltext)

cotacaoDolarText = cotacaoDolar.responseText
cotacaoDolarConvertido = JSON.parse(cotacaoDolarText)

//console.log(cotacaoDolarConvertido)

valordoReal = Number(cotacaoDolarConvertido.USDBRL.low)
precoEtherDolar = Number(xmlConvertido.result.ethusd)

precoRealEther = valordoReal * precoEtherDolar 
etherAtualizado.textContent = precoRealEther.toLocaleString('pt-br',{style: 'currency',currency: 'BRL', minimumFractionDigits: 2})

saldoEther = precoRealEther*saldoConta

creditoAprovado.textContent = saldoEther.toLocaleString('pt-br',{style: 'currency',currency: 'BRL', minimumFractionDigits: 2})
valorGarantia.textContent = saldoConta.toFixed(4)
})
}