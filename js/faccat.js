const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for (let i = 0; i < q.length; i++) {
   q[i].addEventListener('click', () => {
      a[i].classList.toggle('a-opened');
      arr[i].classList.toggle('arrow-rotated');
   })
}

// Exercicio 1

function calcular1(){
    let fahrenheit = parseFloat(document.getElementById('fahrenheit1').value);

    document.getElementById('fahrenheit1').value = "";

    let celsius = (fahrenheit - 32) * (5/9);

    document.getElementById('titulo1').style.display = 'block';
    
    document.getElementById('exercicio1Resultado').innerHTML = "O valor convertido é: " + celsius + "° graus Celsius.";
}

function limpar1(){
    document.getElementById('titulo1').style.display = 'none';
    document.getElementById('exercicio1Resultado').innerHTML = "";
}

// Exercicio 2

function calcular2(){
    let nota1, nota2, nota3, media;

    nota1 = parseFloat(document.getElementById('ex2Nota1').value);
    nota2 = parseFloat(document.getElementById('ex2Nota2').value);
    nota3 = parseFloat(document.getElementById('ex2Nota3').value);

    document.getElementById('ex2Nota1').value = "";
    document.getElementById('ex2Nota2').value = "";
    document.getElementById('ex2Nota3').value = "";

    media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

    document.getElementById('titulo2').style.display = 'block';

    document.getElementById('exercicio2Resultado').innerHTML = "A média ponderada do aluno(a) é: " + media;
}

function limpar2(){
    document.getElementById('titulo2').style.display = 'none';
    document.getElementById('exercicio2Resultado').innerHTML = "";
}

// Exercicio 3

function calcular3(){
    let valor = parseFloat(document.getElementById('ex3Valor').value);

    document.getElementById('titulo3').style.display = 'block';

    if (valor > 10) {
        document.getElementById('exercicio3Resultado').innerHTML = "É maior que 10"
    } else if (valor == 10) {
        document.getElementById('exercicio3Resultado').innerHTML = "É igual a 10"
    } else {
        document.getElementById('exercicio3Resultado').innerHTML = "Não é maior que 10"
    }

    document.getElementById('ex3Valor').value = "";
}

function limpar3(){
    document.getElementById('exercicio3Resultado').innerHTML = ""
    document.getElementById('titulo3').style.display = 'none';
}

// Exericio 4

function calcular4(){
    let valor = parseFloat(document.getElementById('ex4Valor').value);

    document.getElementById('titulo4').style.display = 'block';

    if (valor >= 0) {
        document.getElementById('exercicio4Resultado').innerHTML = "O valor digitado é positivo!";
    } else {
        document.getElementById('exercicio4Resultado').innerHTML = "O valor digitado é negativo!";
    }

    document.getElementById('ex4Valor').value = "";
}

function limpar4(){
    document.getElementById('exercicio4Resultado').innerHTML = ""
    document.getElementById('titulo4').style.display = 'none';
}

// Exercicio 5

function calcular5(){
    let macas = parseInt(document.getElementById('ex5Macas').value);

    let precoTotal = 0;

    if (macas < 12 ) {
        precoTotal = macas * 1.30;
    } else if (macas >= 12) {
        precoTotal = macas * 1;
    }

    document.getElementById('titulo5').style.display = 'block';

    document.getElementById('exercicio5Resultado').innerHTML = "O preço total gasto com as maçãs foram: " + precoTotal.toFixed(2) + " R$.";

    document.getElementById('ex5Macas').value = "";
}

function limpar5(){
    document.getElementById('exercicio5Resultado').innerHTML = ""
    document.getElementById('titulo5').style.display = 'none';
}

// Exercicio 6

function calcular6(){
    let nota1, nota2, media;

    nota1 = parseFloat(document.getElementById('ex6Nota1').value);
    nota2 = parseFloat(document.getElementById('ex6Nota2').value);

    media = (nota1 + nota2)/2;

    document.getElementById('titulo6').style.display = 'block';

    if (media >= 6) {
        document.getElementById('exercicio6Resultado').innerHTML = "O aluno foi aprovado, com a média: " + media;
    } else {
        document.getElementById('exercicio6Resultado').innerHTML = "O aluno foi reprovado, com a média: " + media;
    }

    document.getElementById('ex6Nota1').value = "";
    document.getElementById('ex6Nota2').value = "";
}

function limpar6(){
    document.getElementById('exercicio6Resultado').innerHTML = ""
    document.getElementById('titulo6').style.display = 'none';
}

// Exercicio 7

function calcular7(){
    document.getElementById('titulo7').style.display = 'block';

    let anoAtual, anoNascimento, idade;

    anoAtual = parseInt(document.getElementById('ex7Ano').value);
    anoNascimento = parseInt(document.getElementById('ex7Nascimento').value);

    idade = anoAtual - anoNascimento;

    if (idade >= 16) {
        document.getElementById('exercicio7Resultado').innerHTML = "Você já pode votar!";
    } else {
        document.getElementById('exercicio7Resultado').innerHTML = "Você ainda não completou 16 anos, portanto não poderá votar";
    }

    document.getElementById('ex7Ano').value = "";
    document.getElementById('ex7Nascimento').value = "";
}

function limpar7(){
    document.getElementById('exercicio7Resultado').innerHTML = ""
    document.getElementById('titulo7').style.display = 'none';
}

// Exercicio 8

function calcular8(){
    let valor1, valor2;
    valor1 = parseInt(document.getElementById('ex8Valor1').value);
    valor2 = parseInt(document.getElementById('ex8Valor2').value);

    document.getElementById('titulo8').style.display = 'block';

    if (valor1 > valor2) {
        document.getElementById('exercicio8Resultado').innerHTML = "O maior valor digitado foi: " + valor1;
    } else {
        document.getElementById('exercicio8Resultado').innerHTML = "O maior valor digitado foi: " + valor2;
    }

    document.getElementById('ex8Valor1').value = "";
    document.getElementById('ex8Valor2').value = "";
}

function limpar8(){
    document.getElementById('exercicio8Resultado').innerHTML = ""
    document.getElementById('titulo8').style.display = 'none';  
}

// Exercicio 9

function calcular9(){
    let valor1, valor2;

    valor1 = parseInt(document.getElementById('ex9Valor1').value);
    valor2 = parseInt(document.getElementById('ex9Valor2').value);
    
    document.getElementById('titulo9').style.display = 'block';

    if (valor1 > valor2) {
        document.getElementById('exercicio9Resultado').innerHTML = "O maior valor digitado foi: " + valor1 + ", e o menor número foi: " + valor2;
    } else {
        document.getElementById('exercicio9Resultado').innerHTML = "O maior valor digitado foi: " + valor2 + ", e o menor número foi: " + valor1;
    }

    document.getElementById('ex9Valor1').value = "";
    document.getElementById('ex9Valor2').value = "";
}

function limpar9(){
    document.getElementById('exercicio9Resultado').innerHTML = ""
    document.getElementById('titulo9').style.display = 'none';  
}

// Exercicio 10

function calcular10(){
    let inicio, termino, duracao;

    inicio = parseInt(document.getElementById('ex10Inicio').value);
    termino = parseInt(document.getElementById('ex10Termino').value);

    document.getElementById('titulo10').style.display = 'block';

    if (termino < inicio) {
        duracao = (24-inicio)+fim;

        document.getElementById('exercicio10Resultado').innerHTML = "A duração da partida foi de: " + duracao + " horas.";
    } else if (termino > inicio) {
        duracao = termino - inicio;

        document.getElementById('exercicio10Resultado').innerHTML = "A duração da partida foi de: " + duracao + " horas.";
    } else if (termino == inicio) {
        duracao = 24;

        document.getElementById('exercicio10Resultado').innerHTML = "A duração da partida foi de: " + duracao + " horas.";
    }

    document.getElementById('ex10Inicio').value = "";
    document.getElementById('ex10Termino').value = "";
}

function limpar10(){
    document.getElementById('exercicio10Resultado').innerHTML = ""
    document.getElementById('titulo10').style.display = 'none';  
}

// Exercicio 11

function calcular11(){
    let horas, salario, novoSalario, extraSalario;
    horas = parseInt(document.getElementById('ex11Horas').value);
    salario = parseFloat(document.getElementById('ex11Salario').value);
    document.getElementById('titulo11').style.display = 'block';
    if (horas <= 160) {
        novoSalario = salario * horas;
        console.log(novoSalario)

        document.getElementById('exercicio11Resultado').innerHTML = "O salário sem horas extras, ficou: " + novoSalario + " R$."
    } else {
        novoSalario = salario * horas;
        horas = horas - 160;
        extraSalario = horas * 10 * 1.5;
        novoSalario = novoSalario + extraSalario;

        document.getElementById('exercicio11Resultado').innerHTML = "O novo salário, com as horas extras é: " + novoSalario + " R$."
    }
    document.getElementById('ex11Horas').value = "";
    document.getElementById('ex11Salario').value = "";
}

function limpar11(){
    document.getElementById('exercicio11Resultado').innerHTML = ""
    document.getElementById('titulo11').style.display = 'none';  
}

// Exercicio 12

function calcular12(){
    let sexo, altura, pesoIdeal;
    sexo = document.getElementById('ex12Sexo').value;
    altura = parseFloat(document.getElementById('ex12Altura').value);
    resultado = document.getElementById('exercicio12Resultado');

    if (sexo === "M" || sexo === "m") {
        pesoIdeal = (72.2 * altura) - 58;

        document.getElementById('exercicio12Resultado').innerHTML = "O seu peso ideal é: " + pesoIdeal.toFixed(2);
    } else  if (sexo === "F" || sexo === "f") {
        pesoIdeal = (62.1 * altura) - 44.7;

        document.getElementById('exercicio12Resultado').innerHTML = "O seu peso ideal é: " + pesoIdeal.toFixed(2);
    } else {
        document.getElementById('exercicio12Resultado').innerHTML = "O sexo informado, não esta de acordo com o solicitado.";
    }

    document.getElementById('titulo12').style.display = 'block';
    document.getElementById('ex12Sexo').value = "";
    document.getElementById('ex12Altura').value = "";
}

function limpar12(){
    document.getElementById('exercicio12Resultado').innerHTML = "";
    document.getElementById('titulo12').style.display = 'none';  
}

// Exercicio 13

function calcular13(){
    let salario, venda, novoSalario;

    salario = parseFloat(document.getElementById('ex13Salario').value);
    venda = parseFloat(document.getElementById('ex13Valor').value);

    if (venda <= 1500) {
        novoSalario = salario + (venda * 3)/100;
        document.getElementById('exercicio13Resultado').innerHTML = "O seu novo salário é: " + novoSalario + " R$.";
    } else {
        novoSalario = salario + (venda * 5)/100;
        document.getElementById('exercicio13Resultado').innerHTML = "O seu novo salário é: " + novoSalario + " R$.";
    }

    document.getElementById('ex13Salario').value = "";
    document.getElementById('ex13Valor').value = "";
    document.getElementById('titulo13').style.display = 'block';
}

function limpar13(){
    document.getElementById('exercicio13Resultado').innerHTML = "";
    document.getElementById('titulo13').style.display = 'none';   
}

// Exercicio 14

function calcular14(){
    let saldo, novoSaldo, credito, debito;
    saldo = parseFloat(document.getElementById('ex14Saldo').value);
    debito = parseFloat(document.getElementById('ex14Debito').value);
    credito = parseFloat(document.getElementById('ex14Credito').value);

    novoSaldo = saldo - debito + credito;

    if (novoSaldo >= 0) {
        document.getElementById('exercicio14Resultado').innerHTML = "O seu saldo está POSITIVO!!"
    } else {
        document.getElementById('exercicio14Resultado').innerHTML = "O seu saldo está NEGATIVO!"
    }

    document.getElementById('titulo14').style.display = 'block';
    document.getElementById('ex14Saldo').value = "";
    document.getElementById('ex14Debito').value = "";
    document.getElementById('ex14Credito').value = "";
}

function limpar14(){
    document.getElementById('exercicio14Resultado').innerHTML = "";
    document.getElementById('titulo14').style.display = 'none';   
}

// Exercicio 15

function calcular15(){
    let atual, maximo, minimo, media;

    atual = parseInt(document.getElementById('ex15Estoque').value);
    maximo = parseInt(document.getElementById('ex15Maximo').value);
    minimo = parseInt(document.getElementById('ex15Minimo').value);

    media = (maximo + minimo) / 2;

    document.getElementById('titulo15').style.display = 'block';

    if (atual >= media) {
        document.getElementById('exercicio15Resultado').innerHTML = "Não é necessário efetuar a compra de itens";
    } else {
        document.getElementById('exercicio15Resultado').innerHTML = "Seu estoque está abaixo da média, precisa efetuar a compra!";
    }
}

function limpar15(){
    document.getElementById('exercicio15Resultado').innerHTML = "";
    document.getElementById('titulo15').style.display = 'none';

    document.getElementById('ex15Estoque').value = '';
    document.getElementById('ex15Maximo').value = '';
    document.getElementById('ex15Minimo').value = '';
}

// Exercicio 16

function calcular16(){
    let valor = parseInt(document.getElementById('ex16Numero').value);

    document.getElementById('titulo16').style.display = 'block';

    if (valor == 0) {
        document.getElementById('exercicio16Resultado').innerHTML = "O número " + valor + " é Nulo!";
    } else if (valor > 0) {
        document.getElementById('exercicio16Resultado').innerHTML = "O número " + valor + " é Positivo!";
    } else {
        document.getElementById('exercicio16Resultado').innerHTML = "O número " + valor + " é Negativo!";
    }   
}

function limpar16(){
    document.getElementById('exercicio16Resultado').innerHTML = "";
    document.getElementById('ex16Numero').value = '';
    document.getElementById('titulo16').style.display = 'none';
}

// Exercicio 17

function calcular17() {
    let valor1, valor2, valor3, aux;
 
    valor1 = parseFloat(document.getElementById('ex17Numero1').value);
    valor2 = parseFloat(document.getElementById('ex17Numero2').value);
    valor3 = parseFloat(document.getElementById('ex17Numero3').value);
 
    //Tornando o valor1 sempre o maior de todos, o valor2 o meio termo e o valor3 o menor de todos
 
    if (valor2 > valor1) {
       aux = valor2;
       valor2 = valor1;
       valor1 = aux;
    }
 
    if (valor3 > valor1) {
       aux = valor3;
       valor3 = valor1;
       valor1 = aux;
    }
 
    if (valor3 > valor2) {
       aux = valor3;
       valor3 = valor2;
       valor2 = aux;
    }

    document.getElementById('titulo17').style.display = 'block';
    document.getElementById('exercicio17Resultado').innerHTML = "O maior número é: " + valor1;
 
 }

 function limpar17(){
    document.getElementById('exercicio17Resultado').innerHTML = "";
    document.getElementById('ex17Numero1').value = '';
    document.getElementById('ex17Numero2').value = '';
    document.getElementById('ex17Numero3').value = '';
    document.getElementById('titulo17').style.display = 'none';
}

// Exercicio 18

function calcular18() {
    let valor1, valor2, valor3, aux, soma;
 
    valor1 = parseFloat(document.getElementById('ex18Numero1').value);
    valor2 = parseFloat(document.getElementById('ex18Numero2').value);
    valor3 = parseFloat(document.getElementById('ex18Numero3').value);
 
    //Tornando o valor1 sempre o maior de todos, o valor2 o meio termo e o valor3 o menor de todos
 
    if (valor2 > valor1) {
       aux = valor2;
       valor2 = valor1;
       valor1 = aux;
    }
 
    if (valor3 > valor1) {
       aux = valor3;
       valor3 = valor1;
       valor1 = aux;
    }
 
    if (valor3 > valor2) {
       aux = valor3;
       valor3 = valor2;
       valor2 = aux;
    }

    soma = valor1 + valor2

    document.getElementById('titulo18').style.display = 'block';
    document.getElementById('exercicio18Resultado').innerHTML = "A soma dos maiores números é: " + soma;
 
 }

 function limpar18(){
    document.getElementById('exercicio18Resultado').innerHTML = "";
    document.getElementById('ex18Numero1').value = '';
    document.getElementById('ex18Numero2').value = '';
    document.getElementById('ex18Numero3').value = '';
    document.getElementById('titulo18').style.display = 'none';
}

// Exercicio 19

function calcular19() {
    let valor1, valor2, valor3, aux, soma;
 
    valor1 = parseFloat(document.getElementById('ex19Numero1').value);
    valor2 = parseFloat(document.getElementById('ex19Numero2').value);
    valor3 = parseFloat(document.getElementById('ex19Numero3').value);
 
    //Tornando o valor1 sempre o maior de todos, o valor2 o meio termo e o valor3 o menor de todos
 
    if (valor2 > valor1) {
       aux = valor2;
       valor2 = valor1;
       valor1 = aux;
    }
 
    if (valor3 > valor1) {
       aux = valor3;
       valor3 = valor1;
       valor1 = aux;
    }
 
    if (valor3 > valor2) {
       aux = valor3;
       valor3 = valor2;
       valor2 = aux;
    }

    soma = valor1 + valor2

    document.getElementById('titulo19').style.display = 'block';
    document.getElementById('exercicio19Resultado').innerHTML = "O maior número é: " + valor1 + ", o intermediário: " + valor2 + ", o menor número: " + valor3;
 
 }

 function limpar19(){
    document.getElementById('exercicio19Resultado').innerHTML = "";
    document.getElementById('ex19Numero1').value = '';
    document.getElementById('ex19Numero2').value = '';
    document.getElementById('ex19Numero3').value = '';
    document.getElementById('titulo19').style.display = 'none';
}

// Exercicio 20

function calcular20(){
    let valor1, valor2, valor3;

    valor1 = parseFloat(document.getElementById('ex20Valor1').value);
    valor3 = parseFloat(document.getElementById('ex20Valor2').value);
    valor2 = parseFloat(document.getElementById('ex20Valor3').value);

    document.getElementById('titulo20').style.display = 'block'

    if (valor1 < valor2 + valor3) {
        if (valor2 < valor1 + valor3) {
            if (valor3 < valor1 + valor2) {
                document.getElementById('exercicio20Resultado').innerHTML = "Com os dados informados, pode-se se tornar um triangulo";
            } else {
                document.getElementById('exercicio20Resultado').innerHTML = "Com os dados informados, é impossível formar um triangulo";
            }
        } else {
            document.getElementById('exercicio20Resultado').innerHTML = "Com os dados informados, é impossível formar um triangulo";
        }
    } else {
        document.getElementById('exercicio20Resultado').innerHTML = "Com os dados informados, é impossível formar um triangulo";
    }
}

function limpar20(){
    document.getElementById('exercicio20Resultado').innerHTML = "";
    document.getElementById('ex20Valor1').value = '';
    document.getElementById('ex20Valor2').value = '';
    document.getElementById('ex20Valor3').value = '';
    document.getElementById('titulo20').style.display = 'none';
}

// Exercicio 21

function calcular21(){
    let time1, time2, gols1, gols2;

    time1 = document.getElementById('ex20Time1').value;
    time2 = document.getElementById('ex20Time2').value;

    gols1 = parseInt(document.getElementById('ex20Gols1').value);
    gols2 = parseInt(document.getElementById('ex20Gols2').value);

    document.getElementById('titulo21').style.display = 'block'

    if (gols1 > gols2) {
        document.getElementById('exercicio21Resultado').innerHTML = "O time ganhador foi: " + time1;
    } else if (gols1 == gols2) {
        document.getElementById('exercicio21Resultado').innerHTML = "O jogo terminou em empate, com o placar de: " + gols1 + " x " + gols2;
    } else {
        document.getElementById('exercicio21Resultado').innerHTML = "O time ganhador foi: " + time2;
    }
}

function limpar21(){
    document.getElementById('exercicio21Resultado').innerHTML = "";
    document.getElementById('ex20Time1').value = '';
    document.getElementById('ex20Time2').value = '';
    document.getElementById('ex20Gols1').value = '';
    document.getElementById('ex20Gols2').value = '';
    document.getElementById('titulo21').style.display = 'none';
}

// Exercicio 22

function calcular22(){
    let valor1, valor2;

    valor1 = parseFloat(document.getElementById('ex22Valor1').value);
    valor2 = parseFloat(document.getElementById('ex22Valor2').value);

    document.getElementById('titulo22').style.display = 'block';

    if (valor1 == valor2) {
        document.getElementById('exercicio22Resultado').innerHTML = "Os números são iguais";
    } else if (valor1 > valor2) {
        document.getElementById('exercicio22Resultado').innerHTML = "O 1° valor é maior que o segundo!";
    } else {
        document.getElementById('exercicio22Resultado').innerHTML = "O 2° valor é maior que o primeiro!";
    }
}

function limpar22(){
    document.getElementById('exercicio22Resultado').innerHTML = "";
    document.getElementById('ex22Valor1').value = '';
    document.getElementById('ex22Valor2').value = '';
    document.getElementById('titulo22').style.display = 'none';
}

// Exercicio 23

function calcular23(){
    let litros, combustivel, precoGasolina, precoAlcool, desconto, precoTotal;

    precoAlcool = 2.90;
    precoGasolina = 3.30;

    litros = parseFloat(document.getElementById('ex23Litros').value);
    combustivel = document.getElementById('ex23Combustivel').value;

    document.getElementById('titulo23').style.display = 'block';

    if (combustivel === "a" || combustivel === "A" || combustivel === "alcool" || combustivel === "Alcool") {
        if (litros <= 20) {
            desconto = (precoAlcool * 3)/100;
            precoTotal = (2.90 - desconto) * litros;

            document.getElementById('exercicio23Resultado').innerHTML = "O preço total a pagar é: " + precoTotal.toFixed(2) + " R$.";
        } else {
            desconto = (precoAlcool * 5)/100;
            precoTotal = (2.90 - desconto) * litros;

            document.getElementById('exercicio23Resultado').innerHTML = "O preço total a pagar é: " + precoTotal.toFixed(2) + " R$.";
        }
    } else if (combustivel === "g" || combustivel === "G" || combustivel === "gasolina" || combustivel === "Gasolina") {
        if (litros <= 20) {
            desconto = (precoGasolina * 4)/100;
            precoTotal = (2.90 - desconto) * litros;

            document.getElementById('exercicio23Resultado').innerHTML = "O preço total a pagar é: " + precoTotal.toFixed(2) + " R$.";
        } else {
            desconto = (precoGasolina * 6)/100;
            precoTotal = (2.90 - desconto) * litros;

            document.getElementById('exercicio23Resultado').innerHTML = "O preço total a pagar é: " + precoTotal.toFixed(2) + " R$.";
        }
    } else {
        document.getElementById('exercicio23Resultado').innerHTML = "O dados informados no tipo do combustível é inválido. Tente novamente!!";

        document.getElementById('ex23Litros').value = '';
        document.getElementById('ex23Combustivel').value = '';

    }
}

function limpar23(){
    document.getElementById('exercicio23Resultado').innerHTML = "";
    document.getElementById('ex23Litros').value = '';
    document.getElementById('ex23Combustivel').value = '';
    document.getElementById('titulo23').style.display = 'none';
}

// Exercicio 24

function calcular24(){
    let idadeHomem1, idadeHomem2, idadeMulher1, idadeMulher2, aux, soma, produto;

    idadeHomem1 = parseInt(document.getElementById('ex24IdadeHomem1').value);
    idadeHomem2 = parseInt(document.getElementById('ex24IdadeHomem2').value);

    idadeMulher1 = parseInt(document.getElementById('ex24IdadeMulher1').value);
    idadeMulher2 = parseInt(document.getElementById('ex24IdadeMulher2').value);

    document.getElementById('titulo24').style.display = 'block';

    // Tornar sempre o 1° homem o mais velho

    if (idadeHomem2 > idadeHomem1) {
        aux = idadeHomem2;
        idadeHomem2 = idadeHomem1;
        idadeHomem1 = aux;
    }

    // Tornar sempre a 1° mulher o mais velha

    if (idadeMulher2 > idadeMulher1) {
        aux = idadeMulher2;
        idadeMulher2 = idadeMulher1;
        idadeMulher1 = aux;
    }

    soma = idadeHomem1 + idadeMulher2;
    produto = idadeMulher1 * idadeHomem2;

    document.getElementById('exercicio24Resultado').innerHTML = "A soma entre o homem mais velho e a mulher mais nova é: " + soma + " | O produto entre a mulher mais velha e o homem mais novo é: " + produto;
}

function limpar24(){
    document.getElementById('exercicio24Resultado').innerHTML = "";
    document.getElementById('ex24IdadeHomem1').value = '';
    document.getElementById('ex24IdadeHomem2').value = '';
    document.getElementById('ex24IdadeMulher1').value = '';
    document.getElementById('ex24IdadeMulher2').value = '';
    document.getElementById('titulo24').style.display = 'none';
}

// Exercicio 25

function calcular25(){
    let morango, maca, totalKg, precoMaca, precoMorango, precoTotal;

    morango = parseInt(document.getElementById('ex25Morango').value);
    maca = parseInt(document.getElementById('ex25Maca').value);

    if (morango <= 5) {
        precoMorango = morango * 2.50;
    } else {
        precoMorango = morango * 2.20;
    }

    if (maca <= 5) {
        precoMaca = maca * 1.80;
    } else {
        precoMaca = maca * 1.50;
    }

    precoTotal = precoMaca + precoMorango;
    totalKg = morango + maca;

    if (totalKg >= 8 || precoTotal > 25) {
        precoTotal = precoTotal - (precoTotal * 10)/100;
    } 

    document.getElementById('titulo25').style.display = 'block';

    document.getElementById('exercicio25Resultado').innerHTML = "O valor total a ser pago pelo cliente é: " + precoTotal.toFixed(2) + " R$";
}

function limpar25(){
    document.getElementById('exercicio25Resultado').innerHTML = "";
    document.getElementById('ex25Morango').value = '';
    document.getElementById('ex25Maca').value = '';
    document.getElementById('titulo25').style.display = 'none';
}

// Exercicio 26

function calcular26(){
    let senha, usuario, senhaConfirmar, usuarioConfirmar;

    usuario = "1234";
    senha = "9999";

    usuarioConfirmar = document.getElementById('ex26Usuario').value;
    senhaConfirmar = document.getElementById('ex26Senha').value;

    document.getElementById('titulo26').style.display = 'block'

    if (senhaConfirmar === senha) {
        if (usuarioConfirmar === usuario) {
            document.getElementById('exercicio26Resultado').innerHTML = "Acesso permitido!"
        } else {
            document.getElementById('exercicio26Resultado').innerHTML = "Acesso Negado! Dados incorretos"
        }
    } else {
        document.getElementById('exercicio26Resultado').innerHTML = "Acesso Negado! Dados incorretos"
    }
}

function limpar26(){
    document.getElementById('exercicio26Resultado').innerHTML = "";
    document.getElementById('ex26Usuario').value = '';
    document.getElementById('ex26Senha').value = '';
    document.getElementById('titulo26').style.display = 'none';
}