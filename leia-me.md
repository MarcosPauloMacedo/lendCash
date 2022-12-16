# **Lend Cash**

[lendcash.com.br](https://lendcash.com.br/)  
Autor do projeto: [Marcos Macedo](https://github.com/MarcosPauloMacedo)

lendCash (emprestar dinheiro) é um projeto de aplicação web criado para interagir com um smart contract da rede de blockchain ethereum.

Esse smart contract é responsável por facilitar a tomada de créditos por parte de um usuário que possui em sua carteira de criptomoeda metaMask, principal carteira de cripto da rede ethereum, ether como forma de garantia.

Através deste contrato inteligente a captação de recursos é realizada de forma rápida e com baixos custos operacionais, já que não existe envolvimento de intermediários no processo.

É feita uma transação simples onde o tomador de crédito coloca a mesma quantidade de ether que gostaria de captar em recursos como garantia e recebe em uma conta cadastrada, via pix, o valor registrado.

O contrato fica responsável por registrar informações na blockchain como:  

* O rash da conta do usuário que interagir com o contrato,
* O valor de ether que ficará em garantia,
* Valor do recursos em R$ que o usuário receberá 

Feito esse registro na blockchain, fica imutável as informações, garantindo maior segurança e transparência para o tomador e prestador do empréstimo.

Além desses registros, o contrato será o responsável pela transferência dos ethers que ficará em garantia para uma outra conta, uma espécie de fundo onde ficará armazenado os ether de garantia.

O projeto, ainda em fase de testes, não tem um contrato registrado na rede principal da rede ethereum e sim na ropsten, uma de suas redes de testes. Portanto, para testar o funcionamento do smart Contract, além da carteira metaMask, o usuário deverá ter uma certa quantidade de ether de testes, disponibilizados em faucets como:[faucet.metamask.io/](https://faucet.metamask.io/),entre outros.


### **Objetivo do projeto**  
  
    
Objetivo inicial do projeto era praticar meus meus conhecimentos em desenvolvimento de aplicação web e criação de smart contract.

Todo o projeto, desde a criação do contrato até a hospedagem, foi realizado individualmente pelo autor.


### **Criação do contrato:**

    A criação do smart contract e a interação com a blockchain foi realizado utilizando as principais ferramentas e serviços de desenvolvimento como:  

    ganache, remix, Web3.js, infura, truffle, ropsten, metaMask, etherscan, além de utilizar os padrões de seguranças recomendadas pela biblioteca de desenvolvimento de smart Contract, openZeppelin.

### Linguagens utilizadas:

  
    solidity: Desenvolvida pela rede ethereum e hoje é a principal linguagem de programação utilizada para escrever smart Contract.

    JavaScript: utilizando a biblioteca Web3.js, que foi desenvolvida para interagir com os métodos e informações dos smart contracts.

    desenvolvimento de todo back-end do projeto utilizando as linguagens de browser: CSS, HTML, Js.


### Outras ferramentas utilizadas:

    Além das ferramentas utilizadas na criação do smart Contract, também foi utilizada as ferramentas de desenvolvimento de WebSites como: Wordpress, Xampp.

    Em todo o seu desenvolvimento, desde a criação do contrato até a hospedagem no servidor, não houve utilização de nunhuma biblioteca além da Web3.js.

### Atual fase do projeto e possíveis implementações:

    O projeto atual está bastante avançado, mas não o suficiente para ser totalmente funcional e automatizado.

    No caso do smart Contract, ele ainda não possui algumas funcionalidades importantes como: prazos de pagamentos e transfências automáticas de garantias. Funcionalidades fundamentais para os tomadores de empréstimos que querem quitar suas dívidas ou para os prestadores de empréstimos receberem em casos de inadiplências.

    Falta de uma integração de pagamentos para melhor experiência do usuário.

    Criação de novos contratos, permitindo garantias de outros criptoativos e ampiação das opções de wallets (carteiras), que atualmente aceita apenas metaMask.

    Serviços de compra e venda de ether e outras criptomoedas por moedas fiduciárias, tudo diretamente pelas wallets sem a presença de corretoras centralizadas.
    
    

















