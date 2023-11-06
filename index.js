import entradaDados from 'readline-sync';

let salarioMIn = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
]

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2019, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
]

console.log("Escolha uma das alternativas\n")

console.log("1 - Listar os sálarios minímos de 2010 a 2020");
console.log("2 - Listar os índices IPCA de 2010 a 2020");
console.log("3 - Comparação entre o percentual de almento salárial e IPCA\n");

let escolha = entradaDados.question("Digite o numero de sua esolha: ");

let anoFormat = "Ano :";
let salarioFormat = "Salario: ";
let ipcaFormat = "IPCA: "
let crescimentoFormt = "Crescimento Salárial: "

if(escolha == 1){
    for(let dadosSalario of salarioMIn){
        
        let ano = dadosSalario.ano
        let salario = dadosSalario.salario

        

        console.log(anoFormat.padEnd(30, '.') + ano);
        console.log(salarioFormat.padEnd(30, '.') + "R$ " +salario.toFixed(2).replace("." , ","));

        console.log("\n\n");

    }
}

else if(escolha == 2){
    for(let dadosInflacao of inflacao){

        let inflacaoIPCA = dadosInflacao.ipca;
        
        console.log(anoFormat.padEnd(30, '.') + dadosInflacao.ano);
        console.log(ipcaFormat.padEnd(30, '.')+ inflacaoIPCA.toFixed(2).replace("." , ",") + "%");

        console.log("\n\n");
    }
}

else if(escolha == 3){
    for(let i = 0; i < salarioMIn.length; i++){

        let salarioArray = salarioMIn[i].salario;
        let anoArray = salarioMIn[i].ano;
        let inflacaoArray = inflacao[i].ipca;
        let percentualCres;
        let cresFormat;

        if(i > 0){
            let salarioAnterior = salarioMIn[i-1].salario;
            let diferenca = salarioArray - salarioAnterior;

            percentualCres = (diferenca / salarioAnterior) * 100;

            cresFormat = percentualCres.toFixed(2).replace(".", ",")

        }

        else{
            cresFormat = "-";
        }

        console.log(anoFormat.padEnd(30, '.') + anoArray);
        console.log(salarioFormat.padEnd(30, '.') + "R$ " + salarioArray.toFixed(2).replace("." , ","));
        console.log(crescimentoFormt.padEnd(30, '.') + cresFormat);
        console.log(ipcaFormat.padEnd(30, '.') + inflacaoArray.toFixed(2).replace("." , ","));

        console.log("\n\n");
    }
}

else{
    console.log("Escolha invalida")
}