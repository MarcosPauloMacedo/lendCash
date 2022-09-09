class Carteira{
    constructor(){
        let pegar = document.querySelector.bind(document)

        this.atencao = pegar('#atencao')
        this.numeroConta = pegar('#numeroConta')
        this.saldoEther = pegar('#saldoEther')
        this.meuEmprestimo = pegar('#meuEmprestimo')
        this.etherEmprestado = pegar('#etherEmprestado')
        this.idRede = 0

        this.web3 = new Web3(window.ethereum)
        this.provedor = window.ethereum
    }

    statusRede(){
        return this.idRede
    }

    statusProvedor(){
        return typeof this.provedor
    }

    mudarFonte(){
        this.atencao.style.fontSize = '0px'
    }

    async buscarCarteira(){
        if(this.statusProvedor() == 'undefined'){window.
            open('https://metamask.app.link/dapp/lendcash.com.br/cash/')}

        else{this.idRede = await this.provedor.request({method:'eth_chainId'})

            if(this.idRede == '0x3'){ await this.provedor.
                request({method: 'eth_requestAccounts'})}
                
            else{this.atencao.style.fontSize = '13px'
            setTimeout(this.mudarFonte,5000)}}
    }

    async buscarConta(){
        let listaContas = await this.web3.eth.getAccounts()
        let conta = listaContas[0]
        this.numeroConta.textContent = conta
    }  
    
    async buscarSaldo(){
        let conta = this.numeroConta.textContent

        let saldoWei = await this.web3.eth.getBalance(conta)
        let valorWeiEther = '1000000000000000000'
        let saldoEth = saldoWei/Number(valorWeiEther)

        this.saldoEther.textContent = saldoEth.toFixed(4)
    }

    async buscarEmprestimo(){
        let conta = this.numeroConta.textContent

        //contrato.js
        let etherGarantia = await contrato.methods.
        carteira(conta).call()
        let emprestimo = await contrato.methods.
        meuEmprestimo(conta).call()

        this.meuEmprestimo.textContent = `${emprestimo} R$`
        this.etherEmprestado.textContent = `${etherGarantia} ETH`
    }  
}