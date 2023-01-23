(function () {                // aqui criamos a função auto invocável para não pulirmos o escopo global do código    
    
    function CalcularMedia() {               //       
        let total = 0;                       // iremos usar o arguments pois com ele poderemos usar quantos parâmetros
        let qtd = arguments.length;          // precisarmos        
                                     
        

        for (let i = 0; i < qtd; i++) {               // vamos usar o laço de repetição for, já que não precisamos nos
            if (typeof arguments[i] !== "number") {   // preocupar com a quantidade de vezes que o laço for executado e
                throw Error("Insira apenas números")    // não vamos nos preocupar com a verificação para sair do laço de repetição
                // caso não seja inseridos números nos parâmetros irá disparar  um erro
            }
            total += arguments[i] // aqui será feita a soma dos parâmetros passados 
        }
        return (total / qtd) || 0 // nesta linha será verificado caso não tenha sido passado nenhum parâmetro
        // caso isso aconteça, será mostrado 0 como resultado final da média 
        // (como 0/0 dará um resultado falso, seria mostrado NaN como resultado)
    }

    let media = CalcularMedia(1, 2, 3, 4) // aqui é aonde iremos colocar nossos parâmetros/valores
    console.log(media)                    // e chamaremos o nosso resultado co cálculo
})()
