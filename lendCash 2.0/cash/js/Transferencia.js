const classEmprestimo = new Emprestimo()

class Transferencia{
    constructor(){
        let buscar = document.querySelector.bind(document)
        
        this.pegarReal = buscar('#pegarReal')
        this.etherGarantia = buscar('#etherGarantia')
        this.valorTransferir = buscar('#valorTransferir')
    }

    gerandoGarantia(valorEther,valorDolar){
        let real = this.pegarReal.value
        let etherReal = valorEther * valorDolar
        let garantia = real / etherReal

        this.etherGarantia.textContent = garantia.toFixed(4)
        this.valorTransferir.textContent = `${real} R$`
    }
}