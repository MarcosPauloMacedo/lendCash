class Emprestimo{
    constructor(){
        let buscar = document.querySelector.bind(document)

        this.linkDolar = `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`
        this.linkEther = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken`       
        this.valorDolar = 0
        this.valorEther = 0
        this.precoEther = buscar('#precoEther')
        this.valorGarantia = buscar('#valorGarantia')
        this.saldoEther = buscar('#saldoEther')
        this.creditoAprovado = buscar('#creditoAprovado')
    }

    apiDolar(){
        let linkDolar = this.linkDolar
        let options = {
            method: 'Get',
            mode: 'cors',
            cache: 'default'
        }
    
        fetch(linkDolar,options)
            .then(response => {response.json()
                .then(data => { this.
                    valorDolar = Number(data.USDBRL.low)
                })
            })
        .catch(e =>{console.log(`deu erro ${e}`)})
    }

    apiEther(){
        let linkEther = this.linkEther
        let options = {
            method: 'Get',
            mode: 'cors',
            cache: 'default'
        }

        fetch(linkEther,options)
            .then(response =>{response.json()
                .then(data => this.
                    valorEther = Number(data.result.ethusd))
            })
        .catch(e => console.log(`deu erro ${e}`))
    }

    cotacaoEther(){
        let valorEtherReal = this.valorDolar * this.valorEther
        this.precoEther.textContent = valorEtherReal.
        toLocaleString('pt-br',{style: 'currency',currency: 'BRL',
         minimumFractionDigits: 2})
    }

    margemCredito(){
        let valorEtherReal = this.valorDolar * this.valorEther
        let saldoEther = this.saldoEther.textContent
        let valorGarantia = valorEtherReal * saldoEther
        this.creditoAprovado.textContent = valorGarantia.
        toLocaleString('pt-br',{style: 'currency',currency: 'BRL',
        minimumFractionDigits: 2})
    }

    etherGarantia(){
        this.valorGarantia.textContent = this.
        saldoEther.textContent
    }
}
