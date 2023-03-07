/*
console.log("Hello, world!");

console.log('Hello, world!');

console.log(`Hello, world!`);

console.log(2023);

alert('7632847327846328764');
*/

/*
var NomeDaVar = 10;

let NomeDaLet = 10;

//variaveis só podem ser declaradas com $ _ ou letra

{
    let NomeDaLet = 11;
    console.log(NomeDaLet);
}

console.log(NomeDaLet);

//const e let funcionam igual, ambos funcionam diferente se estão dentro ou fora do bloco, o var altera de acordo com o ultimo declarado.

const NomeDaConst = 0;
*/

/*
//tipos de variavel

//undefined
let var1 = undefined;
let var2;

//console.log(var1);

//boolean
let var3 = true;
let var4 = false;

//string
let var5 = "Codigo";
let var6 = 'codigu';
let var7 = `code`;

//number
let var8 = 10;
let var9 = 11.1;

//dizer qual tipo da variavel
console.log(typeof var5);

//concatenar
console.log('O tipo da variavel '+var5+" eh "+typeof(var5));

console.log(`O tipo da variavel ${var8} eh ${typeof(var8)}`);
*/

// entrada de dados

/*

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nome = prompt('Digite seu nome:');

let sobrenome = prompt('Digite seu sobrenome:');

let idade = prompt('Digite sua idade:');

id = getRandomInt(1, 999);

if (idade < 18) {
    alert("Você é menor de idade.")
} else {
    alert(`Acesso liberado para ${nome} ${sobrenome}, sua idade: ${idade} é maior ou igual 18 anos.`)
    console.log(`Olah, ${nome} ${sobrenome}, voceh tem ${idade} anos e seu ID eh ${id}`);
}
*/


// const PrimeiroNome = prompt("Digite seu Primeiro Nome: ");

// const Sobrenome = prompt("Digite seu sobrenome: ");

// const idade = prompt("Digite sua idade: ");

// const id = Math.floor(Math.random() * 100);

// console.log(`Olah, ${PrimeiroNome} ${Sobrenome}, voceh tem ${idade} e seu ID eh ${id}.`); 

// alert(`Olah, ${PrimeiroNome} ${Sobrenome}, voceh tem ${idade} e seu ID eh ${id}.`);

let idade = "22";

let novaidade = parseInt(idade); // 22

let idadecicero = parseFloat(idade); // 22.0

let nome = "Pedro";

let NovoNome = parseInt(nome);

let salario = 100.976476486754865486548654865486548654;

let novosalario = salario.toString();

console.log(typeof (novosalario));