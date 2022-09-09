class Banco{
    constructor(agencia,conta,saldo){
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
    }

    depositar(valor){
        if(valor<=0)return
        this.saldo+=valor
    }

    sacar(valor){
        if(valor<=0 || valor> this.saldo)return
        this.saldo-=valor
    }

    transferir(valor,conta){
        this.conta.sacar(valor)
        conta.depositar(valor)
    }
}