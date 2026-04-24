/*EXERCÍCIO 1 (Fácil)
Verifique se um número é positivo ou não.*/
let numero = 5;
let resultado = numero > 0 ? "positivo"  : "negativo";
console.log(`o numero${numero} é: ${resultado}`);

/*EXERCÍCIO 2 (Fácil)
Verifique se uma pessoa pode votar.
- Se sim, retorne "Pode votar"- Se não, "Não pode votar"*/
let idade = 16;
let podeVotar = idade >=16 ? "pode votar": "nao pode votar"
console.log(`com ${idade} anos: ${podeVotar}`);

/*EXERCÍCIO 3 (Fácil)
Descubra se um número é par ou ímpar.
- Se par, retorne "Par"- Se ímpar, retorne "Ímpar"*/
let num = 7;
let parOuImpar = num % 2 ===0 ? "par" : "impar";
console.log(`${num} é: ${parOuImpar}`);

/*EXERCÍCIO 4 (Fácil)
Crie uma verificação de nível de acesso.
- Se nível for "admin", retorne "Acesso total"
- Caso contrário, "Acesso restrito"*/
let nivel = 2;
let acesso = nivel ==="admin"? "acesso total" : "acesso restrito";
console.log(`nivel ${nivel} : ${acesso}`);

/*EXERCÍCIO 5 (Médio-Fácil)
Aplique desconto em um produto.
- Se preço > 100, aplique 10% de desconto (multiplicar por 0.9)
- Caso contrário, mantenha o preço original*/
let preço = 120;
let preçoTotal = preço > 100 ? preço * 0.9 : preço;
console.log(`preço original: r$ ${preço}, com desconto: ${preçoTotal}`);

/*EXERCÍCIO 6 (Médio-Fácil)
Classifique a situação do aluno baseado na média.
- Se nota >= 7, retorne "Aprovado"
- Caso contrário, "Reprovado"*/
let nota = 7.5;
let statusAluno = nota >=7 ? "aprovado" : "reprovado";
console.log(`nota ${nota} : ${statusAluno}`);

/*EXERCÍCIO 7 (Médio)
Verifique se um número é par E maior que 10.
- Se sim, retorne "Atende critérios"
- Se não, "Não atende"*/
let valor = 12;
let resultado1 = valor % 2 ===0 && valor > 10 ? "atende aos criterios" : "não atende";
console.log(`valor ${valor} : ${resultado1}`);

/*EXERCÍCIO 8 (Médio)
Classifique o número em positivo, negativo ou zero.
- Se > 0: "Positivo"
- Se < 0: "Negativo"
- Se = 0: "Zero"*/
let num2 = -3;
let tipo = num2 >0 ? "positivo" : "reprovado";
console.log(`${num2} é: ${tipo}`);

/*EXERCÍCIO 9 (Médio)
Simule um login simples.
- Se usuario for "admin" E senha for "123", retorne "Login OK"
- Caso contrário, "Falha no login"*/

/*EXERCÍCIO 10 (Médio)
Classifique a pessoa por idade:
- Menor que 12: "Criança"
- Entre 12 e 17: "Adolescente"
- Entre 18 e 59: "Adulto"
- 60 ou mais: "Idoso"*/

// ==================== ATIVIDADES COM FOR ====================

    // 1: Exiba os números de 1 a 10 usando for
    for(let i=1; i<=10; i++){
    console.log(i);}
    
    // 2: Exiba os números de 10 até 1 em ordem decrescente
    for(let i=10; i>=1; i--){
    console.log(i);}
    
    // 3: Exiba todos os números pares de 2 a 20
    console.log("\n==== Números pares até 20 ====");
    for(let i=2; i<=20; i= i + 2){
    console.log(i);}
    
    // 4: Exiba a tabuada do número 5 (5x1 até 5x10);
    console.log("\n=== Tabuada do 5 ====");
    for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5 * i}`);}
    
    // 5: Calcule e exiba a soma dos números de 1 até 50
    console.log("\n=== Soma de 1 a 50 =====");
    let soma = 0;
    for(let i =1; i<=50; i++){
    soma = soma + i;}
    console.log(`A soma é: ${soma}`);
    
    // 6: Conte de 1 até o número 8 (use for);
    for(let i=1; i<=8; i++){
    console.log(i);}
    
    // 7: Exiba todos os números ímpares de 1 a 15
    for(let i= 1; i<=15; i= i +2){
    console.log(i);}
    // 8: Exiba o resultado da multiplicação de 1 a 10 por 2
    for(let i=1; i<=10; i++){
    console.log(`${i} x 2 ${i*2}`);}
    // 9: Exiba os números de 5 em 5, de 5 até 50
    for(let i=5; i<=50; i = i+ 5){
    console.log(i);}
    // 10: Calcule e exiba o quadrado dos números de 1 a 10
    for(let i =1; i<=10; i++){
    console.log(`${i}² = ${i*i}`);}
    
    
    // ==================== ATIVIDADES COM IF ====================
    
    // 11: Verifique se o número 15 é positivo e exiba uma mensagem
    let numro =-1;
    if(numero >0){
    console.log(`${numero} é positivo`);
    }else{
    console.log(`${numero} é negativo`);
    }
    
    
    // 12: Verifique se uma pessoa com 17 anos é maior de idade
    
    let idde =17;
    if(idade >=18){
    console.log("Maior de idade");
    }else{
    console.log("Menor de idade");
    }
    
    
    // 13: Verifique se o número 7 é par ou ímpar
    
    // 14: Verifique se a nota 7.5 é suficiente para aprovação (média 6)
    let notta =7.5;
    if(nota>=6){
    console.log("Aprovado");}
    else{console.log("Reprovado");}
    
    // 15: Verifique se o número 8 é maior que 10
    let numm =8;
    if(num>=10){
    console.log(`${num} é maior do 10`);
    
    }else{
    console.log("menor");
    }
    
    // 16: Verifique se o número 0 é igual a zero
    
    // 17: Compare os números 10 e 20 e diga qual é o maior
    
    // 18: Verifique se uma pessoa de 16 anos pode votar (16+ pode votar)
    
    // 19: Verifique se o número 25 está entre 10 e 30
    
    // 20: Verifique se "sábado" é dia útil (segunda a sexta)
    
    
    // ==================== ATIVIDADES COM FUNÇÕES ====================
    
    // 21: Crie uma função que exiba "Olá, mundo!" quando for chamada
    
    // 22: Crie uma função que receba um nome e exiba "Olá, [nome]"
    
    // 23: Crie uma função que receba dois números e retorne a soma
    
    // 24: Crie uma função que receba um número e retorne o dobro
    
    // 25: Crie uma função que receba um número e diga se ele é par
    
    // 26: Crie uma função que receba duas notas e retorne a média
    
    // 27: Crie uma função que receba um número e retorne ele ao quadrado
    
    // 28: Crie uma função que converta Celsius para Fahrenheit
    
    // 29: Crie uma função que receba três números e retorne a multiplicação
    
    // 30: Crie uma função que receba um número e retorne o sucessor dele
    
    
    // ==================== ATIVIDADES COM ARRAY ====================
    
    // 31: Crie um array com os números 10, 20, 30, 40 e exiba todos
    
    
    // 32: Crie um array com 5 frutas e exiba a primeira fruta
    let frutas = ["maça","banana","laranja","uva","manga"];
    console.log(frutas[0]);
    
    
    // 33: Adicione o número 50 no final do array [10, 20, 30, 40]
    let arr = [10,20,30,40];
    
    
    // 34: Remova o último elemento do array [1, 2, 3, 4, 5]
    
    // 35: Exiba quantos elementos tem o array [5, 10, 15, 20]
    
    // 36: Some todos os números do array [2, 4, 6, 8]
    
    // 37: Multiplique cada elemento do array [1, 2, 3, 4] por 2
    
    // 38: Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]
    
    // 39: Exiba um por um os elementos do array ["azul", "verde", "amarelo"]
    
    // 40: Exiba o último elemento do array [100, 200, 300, 400, 500]
    
    
    // ==================== ATIVIDADES COM MATRIZ ====================
    
    // 41: Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3, 4 na segunda

    // 42: Exiba o elemento da linha 1, coluna 2 da matriz [[5, 6], [7, 8]]
    let matriz = [
        [5,6],
        [7,8]
    ]
    console.log(`${matriz[0] [1]}`);
    
    // 43: Exiba todos os elementos da matriz [[1, 2, 3], [4, 5, 6]]
    let elements = [
        [1,2,3],
        [4,5,6]
    ];
    for(let i=0; i<elements.length;i++){
    for(let j=0; j<elements[i];j++){
        console.log(`elements [${i}] [${j}] = ${elements[i] [j]}`);
    }
    }
    
    // 44: Some todos os números da matriz [[2, 4], [6, 8]]
    let somamatriz = 0; // Começa em 0 para somar os números

    for (let i = 0; i < matrizsoma.length; i++) {
        for (let j = 0; j < matrizsoma[i].length; j++) {
            somamatriz = somamatriz + matrizsoma[i][j]; 
        }
    }

    console.log(`soma dos elementos ${somamatriz}`);
    
    // 45: Crie uma matriz 3x3 com números de 1 a 9
    
    // 46: Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]

    
    // 47: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para  
    let matrizAlt = [
        [1,2],
        [3,4]];
    console.log("antes", matrizAlt);
    matrizAlt[0] [1] = 10;
    console.log("depois", matrizAlt);
    
    // 48: Exiba apenas a primeira linha da matriz [[10,20],[30,40],[50,60]]
    let linha = [
        [10,20],
        [30,40],
        [50,60]
    ];
    console.log("pro linha", linha [0]);
    
    // 49: Exiba apenas os elementos da primeira coluna da matriz [[1,2],[3,4],[5,6]]
    let column = [
        [5,6]
    ];
    console.log("pri column");
    for(let i=0; i<column.length; i++){
        console.log(column[i] [0]);
    }
    
    // 50: Multiplique todos os elementos da matriz [[1,2],[3,4]] por 2
    let multi = [
        [1,2],
        [3,4]];
    console.log("multiplicar");
    for(let i=0; i<multi.length; i++){
        resmulti[i] = [];
        for(let j=0; j<multi.length; j++){
            resmulti[i] [j] = calmulti[i] [j] *2;
        }
    }
    console.log("original", calmulti)
    console.log("multip", resmulti)
    
    
    // ==================== ATIVIDADES COM OBJETOS ====================
    
    // 51: Crie um objeto pessoa com nome "Ana" e idade 25
    let pessoa ={
        nome: "ana",
        iddd: 25
    }
    console.log(pessoa);
    
    // 52: Acesse e exiba o nome do objeto {nome: "Carlos", cidade: "São Paulo"}
    let usuario ={
        nome: "carlinho",
        cidade: "sp"
    }
    console.log(`${usuario.nome}`)
    
    // 53: Adicione a propriedade "curso" ao objeto {nome: "Maria", idade: 20}
    let estudante ={
        nome: "maria",
        idade: 20
    }
    console.log("antes" , estudante);
    console.log("depois" , estudante);
    
    // 54: Altere a idade do objeto {nome: "João", idade: 18} para 19
    
    // 55: Remova a propriedade "telefone" do objeto {nome: "Pedro", telefone: "99999-9999"}
    
    // 56: Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}
    
    // 57: Crie um objeto cachorro com nome "Rex" e um método latir que exibe "Au au!"
    
    // 58: Crie um objeto aluno com nome "Lucas" e notas [8, 7, 9]
    
    // 59: Crie um objeto carro com marca "Fiat" e um objeto motor com potencia "1.0"
    
    // 60: Crie um array com 3 objetos de produtos (nome e preço) e exiba todos