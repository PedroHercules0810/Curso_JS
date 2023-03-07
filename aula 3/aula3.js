
// const nome_completo = prompt('Digite seu nome completo');
// const ano_nascimento = parseInt(prompt('Digite seu ano de nascimento'));
// const salario_mensal = parseFloat(prompt('Digite seu salario mensal em reais R$: '));



// const qntd_filhos = parseInt(prompt('Quantos filhos você tem em casa: '));

// const idade = 2023 - ano_nascimento;

// const aposentadoria = ((70 - idade)*12)*salario_mensal;

// const mesada = salario_mensal/qntd_filhos;

// if (isNaN(ano_nascimento) == true || isNaN(salario_mensal) == true) {
//     alert("A idade ou o salario não pode ser uma letra!")
// }else{


// console.log(`Ola, ${nome_completo}, tudo bem? Voce tem, ${idade} anos de idade, seu salario é R$${salario_mensal.toFixed(2)} e recebera R$${aposentadoria.toFixed(2)} ate se aposentar. Caso voce deseje dividir seu salario entre os seus filhos, dara R$${mesada.toFixed(2)} para cada um.`);

// alert(`Ola, ${nome_completo}, tudo bem? Voce tem, ${idade} anos de idade, seu salario é R$${salario_mensal.toFixed(2)} e recebera R$${aposentadoria.toFixed(2)} ate se aposentar. Caso voce deseje dividir seu salario entre os seus filhos, dara R$${mesada.toFixed(2)} para cada um.`);

// }

const valor_1 = prompt("Digite um valor para eleva-lo ao cubo: ");

const cubo = Math.pow(valor_1,3);

alert(`O cubo de ${valor_1} é ${cubo}`);

const valor_2 = prompt("Digite um valor para tirar a raiz quadrada: ");

const raiz = Math.sqrt(valor_2);

alert(`A raiz de ${valor_2} é ${raiz}`);
