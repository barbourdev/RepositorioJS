const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for (let i = 0; i < q.length; i++) {
   q[i].addEventListener('click', () => {
      a[i].classList.toggle('a-opened');
      arr[i].classList.toggle('arrow-rotated');
   })
}

// Exercicio 1:

function receberDados1() {
   document.getElementById('titulo1').style.display = 'block';
   let celsius = document.getElementById('temperatura1').value;

   let fahrenheit = (9 * celsius + 160) / 5;

   document.getElementById('resultado1').innerHTML = fahrenheit.toFixed(2);
   document.getElementById('temperatura1').value = "";
}

function limpar1(){
   document.getElementById('temperatura1').value = "";
   document.getElementById('resultado1').innerHTML = "";
   document.getElementById('titulo1').style.display = 'none';
}

// Exercicio 2:

function receberDados2() {
   document.getElementById('titulo2').style.display = 'block';
   let fahrenheit = document.getElementById('temperatura2').value;

   let celsius = (fahrenheit - 32) * (5 / 9);

   document.getElementById('resultado2').innerHTML = celsius.toFixed(2);
   document.getElementById('temperatura2').value = "";
}

function limpar2(){
   document.getElementById('temperatura2').value = "";
   document.getElementById('resultado2').innerHTML = "";
   document.getElementById('titulo2').style.display = 'none';
}


// Exercicio 3:

function receberDados3() {
   let altura = document.getElementById('digite_altura').value;

   let raio = document.getElementById('digite_raio').value;

   let volume = Math.PI * raio ** 2 * altura;

   document.getElementById('resultado3').innerHTML = volume.toFixed(2);
}

//Exercicio 4:

function receberDados4() {
   let horasFormatadas;
   let velocidadeFormatada;
   let litrosFormatados;
   let distanciaFormatada;

   let horas = document.getElementById('digite_horas').value;

   let minutos = document.getElementById('digite_minutos').value;

   let velocidade = document.getElementById('digite_velocidade').value;

   velocidadeFormatada = parseFloat(velocidade);

   horasFormatadas = parseFloat(horas);

   horasFormatadas = horasFormatadas + (minutos / 60);

   let distancia = horasFormatadas * velocidadeFormatada;

   distanciaFormatada = parseFloat(distancia);

   let litros = distanciaFormatada / 12;

   litrosFormatados = parseFloat(litros);

   document.getElementById('resultado4').innerHTML = ('A velocidade média foi: ') + velocidadeFormatada + (' ; O tempo gasto na viagem foi: ') + horasFormatadas + (' horas; A distância da viagem foi: ') + distanciaFormatada + ('KM; e os litros gastos foram: ') + litrosFormatados.toFixed(2);
}

//Exercicio 5:

function receberDados5() {

   let valor = document.getElementById('digite_valorPrestação').value;
   let valorFormatado = parseFloat(valor);

   let mes = document.getElementById('digite_meses').value;
   let mesFormatados = parseInt(mes);

   let dias = document.getElementById('digite_dias').value;
   let diasFormatados = parseInt(dias);

   let taxa = document.getElementById('digite_taxa').value;
   let taxaFormatado = parseInt(taxa);

   mesFormatados = mesFormatados + (diasFormatados / 30);
   let prestacao = valorFormatado + ((valorFormatado * taxaFormatado / 100) * mesFormatados);

   document.getElementById('resultado5').innerHTML = prestacao;
}

//Exercicio 6:

function receberDados6() {
   let a = document.getElementById('digite_valor1').value;
   let b = document.getElementById('digite_valor2').value;

   document.getElementById('exercicio6').innerHTML = "Os valores iniciais foram: " + a + " e " + b;

   let c = a;
   a = b;

   document.getElementById('resultado6').innerHTML = "Com os valores trocados: " + a + " e " + c;
}

//Exercicio 7:

function receberDados7() {
   let a, b, c, d, aFormatado, bFormatado, cFormatado, dFormatado;

   a = document.getElementById('exercicio7_valor1').value;
   b = document.getElementById('exercicio7_valor2').value;
   c = document.getElementById('exercicio7_valor3').value;
   d = document.getElementById('exercicio7_valor4').value;

   aFormatado = parseInt(a);
   bFormatado = parseInt(b);
   cFormatado = parseInt(c);
   dFormatado = parseInt(d);

   let mult1 = aFormatado * bFormatado;
   let mult2 = aFormatado * cFormatado;
   let mult3 = aFormatado * dFormatado;
   let mult4 = bFormatado * cFormatado;
   let mult5 = bFormatado * dFormatado;
   let mult6 = cFormatado * dFormatado;

   let add1 = aFormatado + bFormatado;
   let add2 = aFormatado + cFormatado;
   let add3 = aFormatado + dFormatado;
   let add4 = bFormatado + cFormatado;
   let add5 = bFormatado + dFormatado;
   let add6 = cFormatado + dFormatado;

   document.getElementById('mult1').innerHTML = aFormatado + " x " + bFormatado + "= " + mult1;
   document.getElementById('mult2').innerHTML = aFormatado + " x " + cFormatado + "= " + mult2;
   document.getElementById('mult3').innerHTML = aFormatado + " x " + dFormatado + "= " + mult3;
   document.getElementById('mult4').innerHTML = bFormatado + " x " + cFormatado + "= " + mult4;
   document.getElementById('mult5').innerHTML = bFormatado + " x " + dFormatado + "= " + mult5;
   document.getElementById('mult6').innerHTML = cFormatado + " x " + dFormatado + "= " + mult6;

   document.getElementById('add1').innerHTML = aFormatado + " + " + bFormatado + "= " + add1;
   document.getElementById('add2').innerHTML = aFormatado + " + " + cFormatado + "= " + add2;
   document.getElementById('add3').innerHTML = aFormatado + " + " + dFormatado + "= " + add3;
   document.getElementById('add4').innerHTML = bFormatado + " + " + cFormatado + "= " + add4;
   document.getElementById('add5').innerHTML = bFormatado + " + " + dFormatado + "= " + add5;
   document.getElementById('add6').innerHTML = cFormatado + " + " + dFormatado + "= " + add6;
}

//Exercicio 8:

function receberDados8() {
   let volume, largura, comprimento, altura, comprimentoFormatado, larguraFormatado, alturaFormatado;

   comprimento = document.getElementById('exercicio8_comprimento').value;
   largura = document.getElementById('exercicio8_largura').value;
   altura = document.getElementById('exercicio8_altura').value;

   comprimentoFormatado = parseFloat(comprimento);
   larguraFormatado = parseFloat(largura);
   alturaFormatado = parseFloat(altura);

   volume = comprimentoFormatado * larguraFormatado * alturaFormatado;

   document.getElementById('exercicio8_resultado').innerHTML = "O volume da caixa retangular é: " + volume;
}

//Exercicio 9

function receberDados9() {

   let valor1, valor2, valor1Formatado, valor2Formatado, quadrado, diferenca;

   valor1 = document.getElementById('exercicio9_valor1').value;
   valor2 = document.getElementById('exercicio9_valor2').value;

   valor1Formatado = parseFloat(valor1);
   valor2Formatado = parseFloat(valor2);

   diferenca = valor1Formatado - valor2Formatado;
   quadrado = diferenca ** 2;

   document.getElementById('exercicio9_resultado').innerHTML = "O quadrado da diferença é: " + quadrado;
}

//Exercicio 10

function receberDados10() {
   let dolar, dolarFormatado, cotacao, cotacaoFormatado, real;

   cotacao = document.getElementById('exercicio10_cotacao').value;
   dolar = document.getElementById('exercicio10_dolar').value;

   cotacaoFormatado = parseFloat(cotacao);
   dolarFormatado = parseFloat(dolar);

   real = cotacaoFormatado * dolarFormatado;

   document.getElementById('exercicio10_resultado').innerHTML = "A quantidade em reais é: " + real + " R$.";
}

// Exericio 11

function receberDados11() {
   let real, realFormatado, cotacao, cotacaoFormatado, dolar;

   cotacao = document.getElementById('exercicio11_cotacao').value;
   real = document.getElementById('exercicio11_real').value;

   cotacaoFormatado = parseFloat(cotacao);
   realFormatado = parseFloat(dolar);

   dolar = real / cotacao;

   document.getElementById('exercicio11_resultado').innerHTML = "A quantidade em dólares é: " + dolar + " $.";
}

// Exericio 12

function receberDados12() {
   let a, b, c, quadrado;

   a = parseFloat(document.getElementById('exercicio12_valor1').value);
   b = parseFloat(document.getElementById('exercicio12_valor2').value);
   c = parseFloat(document.getElementById('exercicio12_valor3').value);

   quadrado = (a ** 2) + (b ** 2) + (c ** 2);

   document.getElementById('exercicio12_resultado').innerHTML = "A soma dos quadrados dos números lidos é: " + quadrado;
}

// Exericio 13

function receberDados13() {
   let a, b, c, quadrado, soma;

   a = parseFloat(document.getElementById('exercicio13_valor1').value);
   b = parseFloat(document.getElementById('exercicio13_valor2').value);
   c = parseFloat(document.getElementById('exercicio13_valor3').value);

   soma = a + b + c;
   quadrado = soma ** 2;

   document.getElementById('exercicio13_resultado').innerHTML = "O quadrado da soma dos números é: " + quadrado;
}

// Exericio 14

function receberDados14() {
   // let a, b, c, d

   // a = parseFloat(document.getElementById('exercicio14_valor1').value);
   // b = parseFloat(document.getElementById('exercicio14_valor2').value);
   // c = parseFloat(document.getElementById('exercicio14_valor3').value);
   // d = parseFloat(document.getElementById('exercicio14_valor4').value);

   let soma, produto;

   produto = parseFloat(document.getElementById('exercicio14_valor1').value) * parseFloat(document.getElementById('exercicio14_valor3').value);

   soma = parseFloat(document.getElementById('exercicio14_valor2').value) + parseFloat(document.getElementById('exercicio14_valor4').value);

   document.getElementById('exercicio14_resultado2').innerHTML = "O resultado do produto entre o 1° e 3° número é: " + produto;
   document.getElementById('exercicio14_resultado1').innerHTML = "O resultado da soma entre o 2° e 4° número é: " + soma;
}

// Exericio 15

function receberDados15() {
   let salario, porcentual, novoSalario;

   salario = parseFloat(document.getElementById('exercicio15_salario').value);
   porcentual = parseInt(document.getElementById('exercicio15_porcentual').value);

   novoSalario = salario + (salario * porcentual) / 100;

   document.getElementById('exercicio15_resultado').innerHTML = novoSalario;
}

//Exercicio 16: 

function receberDados16() {
   let aValidos, aBrancos, aNulos, aTotal, bValidos, bBrancos, bNulos, bTotal, cValidos, cBrancos, cNulos, cTotal, validos, brancos, nulos, total;

   aValidos = parseInt(document.getElementById('exercicio16_aValidos').value);
   aBrancos = parseInt(document.getElementById('exercicio16_aBrancos').value);
   aNulos = parseInt(document.getElementById('exercicio16_aNulos').value);
   aTotal = aValidos + aBrancos + aNulos;

   bValidos = parseInt(document.getElementById('exercicio16_bValidos').value);
   bBrancos = parseInt(document.getElementById('exercicio16_bBrancos').value);
   bNulos = parseInt(document.getElementById('exercicio16_bNulos').value);
   bTotal = bValidos + bBrancos + bNulos;

   cValidos = parseInt(document.getElementById('exercicio16_cValidos').value);
   cBrancos = parseInt(document.getElementById('exercicio16_cBrancos').value);
   cNulos = parseInt(document.getElementById('exercicio16_cNulos').value);
   cTotal = cValidos + cBrancos + cNulos;

   total = aTotal + bTotal + cTotal;

   document.getElementById('exercicio16_totalEleitores').innerHTML = "O total de eleitores dessa eleição foi de: " + total;

   validos = aValidos + bValidos + cValidos;
   validos = (validos * 100) / total;

   nulos = aNulos + bNulos + cNulos;
   nulos = (nulos * 100) / total;

   brancos = aBrancos + bBrancos + cBrancos;
   brancos = (brancos * 100) / total;

   aValidos = (aValidos * 100) / total
   bValidos = (bValidos * 100) / total
   cValidos = (cValidos * 100) / total

   document.getElementById('exercicio16_totalValidos').innerHTML = "O total de eleitores válidos nessa eleição foi de: " + validos.toFixed(1);
   document.getElementById('exercicio16_totalBrancos').innerHTML = "O total de eleitores que votaram Branco nessa eleição foi de: " + brancos.toFixed(1);
   document.getElementById('exercicio16_totalNulos').innerHTML = "O total de eleitores Nulos nessa eleição foi de: " + nulos.toFixed(1);

   document.getElementById('exercicio16_totalValidosA').innerHTML = "O total de eleitores válidos do canditado A nessa eleição foi de: " + aValidos.toFixed(1);
   document.getElementById('exercicio16_totalValidosB').innerHTML = "O total de eleitores válidos do canditado B nessa eleição foi de: " + bValidos.toFixed(1);
   document.getElementById('exercicio16_totalValidosC').innerHTML = "O total de eleitores válidos do canditado C nessa eleição foi de: " + cValidos.toFixed(1);
}

// Exericio 17

function receberDados17() {
   let n1 = parseInt(document.getElementById('exercicio17_diferenca1').value);
   let n2 = parseInt(document.getElementById('exercicio17_diferenca2').value);

   if (n1 > n2) {
      let resultado = n1 - n2;
      document.getElementById('exercicio17_resultado').innerHTML = "A diferença entre o maior número e o menor é: " + resultado;
   } else {
      let resultado = n2 - n1;
      document.getElementById('exercicio17_resultado').innerHTML = "A diferença entre o maior número e o menor é: " + resultado;
   }
}

// Exericio 18

function receberDados18() {
   let valor = parseInt(document.getElementById('exercicio18_valor').value);

   if (valor < 0) {
      valor = valor * (-1);
   }

   document.getElementById('exercicio18_resultado').innerHTML = "O modulo do número digitado é: " + valor;
}

// Exercicio 19

function receberDados19() {
   let nota1, nota2, nota3, nota4, media;

   limparDados19();

   nota1 = parseFloat(document.getElementById('exercicio19_nota1').value);
   nota2 = parseFloat(document.getElementById('exercicio19_nota2').value);
   nota3 = parseFloat(document.getElementById('exercicio19_nota3').value);
   nota4 = parseFloat(document.getElementById('exercicio19_nota4').value);

   media = (nota1 + nota2 + nota3 + nota4) / 4;

   if (media >= 5) {
      document.getElementById('exercicio19_resultado').innerHTML = "O aluno(a) foi aprovado com a média igual a: " + media;
   } else {
      document.getElementById('exercicio19_resultado').innerHTML = "O aluno(a) foi reprovado com a média igual a: " + media;
   }
}

function limparDados19() {
   document.getElementById('exercicio19_resultado').innerHTML = "";
}

// Exercicio 20

function receberDados20() {
   let nota1, nota2, nota3, nota4, media;

   nota1 = parseFloat(document.getElementById('exercicio20_nota1').value);
   nota2 = parseFloat(document.getElementById('exercicio20_nota2').value);
   nota3 = parseFloat(document.getElementById('exercicio20_nota3').value);
   nota4 = parseFloat(document.getElementById('exercicio20_nota4').value);

   media = (nota1 + nota2 + nota3 + nota4) / 4


   if (media >= 7) {
      document.getElementById('exercicio20_resultado').innerHTML = "O aluno foi aprovado com a média igual a: " + media;
      document.getElementById('exercicio20_exame').style.display = 'none';   //.id = "exercicio20_exameOff";
      document.getElementById('tituloExame').style.display = 'none';  //.id = "tituloExameOff";
   } else {
      document.getElementById('tituloExame').style.display = 'block';  //.id = "tituloExame";
      document.getElementById('exercicio20_exame').style.display = 'block';  //.id = "exercicio20_exame";
      document.getElementById('exercicio20On').style.display = 'none' //.id = 'exercicio20Off';
      document.getElementById('exercicio20Limpar').style.display = 'block'
      document.getElementById('calcularExame').style.display = 'block'

   }
}

function calcularExame20() {
   let nota1, nota2, nota3, nota4, media;

   nota1 = parseFloat(document.getElementById('exercicio20_nota1').value);
   nota2 = parseFloat(document.getElementById('exercicio20_nota2').value);
   nota3 = parseFloat(document.getElementById('exercicio20_nota3').value);
   nota4 = parseFloat(document.getElementById('exercicio20_nota4').value);

   media = (nota1 + nota2 + nota3 + nota4) / 4

   let mediaExame;
   let notaExame = parseFloat(document.getElementById('exercicio20_exame').value);

   mediaExame = (notaExame + media) / 2;

   if (mediaExame >= 5) {
      document.getElementById('exercicio20_resultado').innerHTML = "O aluno(a) foi Aprovado com a média igual a: " + mediaExame;
   } else {
      document.getElementById('exercicio20_resultado').innerHTML = "O aluno(a) foi reprovado com a média igual a: " + mediaExame;
   }
}

function limparElementos20() {
   document.getElementById('exercicio20_resultado').innerHTML = "";
   document.getElementById('exercicio20_nota1').value = "";
   document.getElementById('exercicio20_nota2').value = "";
   document.getElementById('exercicio20_nota3').value = "";
   document.getElementById('exercicio20_nota4').value = "";
   document.getElementById('exercicio20_exame').value = "";
   document.getElementById('exercicio20On').style.display = 'block';
   document.getElementById('exercicio20_exame').style.display = 'none';
   document.getElementById('tituloExame').style.display = 'none';
   document.getElementById('exercicio20Limpar').style.display = 'none';
   document.getElementById('calcularExame').style.display = 'none'
}

function limparDados20() {
   document.getElementById('exercicio20_resultado').innerHTML = "";
}


// Exercicio 21

function receberDados21() {
   let a, b, c, delta;

   a = parseFloat(document.getElementById('exercicio21_valor1').value);
   b = parseFloat(document.getElementById('exercicio21_valor2').value);
   c = parseFloat(document.getElementById('exercicio21_valor3').value);

   delta = b ** 2 - 4 * a * c;

   if (a == 0) {
      document.querySelector('.resultados').style.display = 'block';
      document.getElementById('exercicio21_resultado1').innerHTML = 'O valor de A deve ser diferente de zero.';
      document.getElementById('exercicio21_valor1').value = "";
      document.getElementById('exercicio21_valor2').value = "";
      document.getElementById('exercicio21_valor3').value = "";
   } else if (delta < 0) {
      document.querySelector('.resultados').style.display = 'block';
      document.getElementById('exercicio21_resultado1').innerHTML = 'Não foi possível encontar raízes reais';
      document.getElementById('exercicio21_valor1').value = "";
      document.getElementById('exercicio21_valor2').value = "";
      document.getElementById('exercicio21_valor3').value = "";
   } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.querySelector('.resultados').style.display = 'block';
      document.getElementById('exercicio21_resultado1').innerHTML = 'O delta foi igual a: ' + delta;
      document.getElementById('exercicio21_resultado2').innerHTML = 'As raizes encontradas foram: ' + x1.toFixed(3) + " | " + x2.toFixed(3);
   }
}

function limparTudo21() {
   document.getElementById('exercicio21_resultado1').innerHTML = "";
   document.getElementById('exercicio21_resultado2').innerHTML = "";
   document.querySelector('.resultados').style.display = 'none';
   document.getElementById('exercicio21_valor1').value = "";
   document.getElementById('exercicio21_valor2').value = "";
   document.getElementById('exercicio21_valor3').value = "";
}

function limparDados21() {
   document.getElementById('exercicio21_resultado1').innerHTML = "";
   document.getElementById('exercicio21_resultado2').innerHTML = "";
   document.querySelector('.resultados').style.display = 'none';
}

// Exercicio 22

function receberDados22() {
   let valor1, valor2, valor3, aux;

   valor1 = parseFloat(document.getElementById('exercicio22_valor1').value);
   valor2 = parseFloat(document.getElementById('exercicio22_valor2').value);
   valor3 = parseFloat(document.getElementById('exercicio22_valor3').value);

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

   document.querySelector('.resultados').style.display = 'block';

   document.getElementById('exercicio22_resultado').innerHTML = "O maior número é: " + valor1 + ", o intermediário: " + valor2 + ", o menor número: " + valor3;

}

function limparDados22() {
   document.getElementById('exercicio22_resultado').innerHTML = "";
   document.querySelector('.resultados').style.display = 'none';
}

function limparTudo22() {
   document.getElementById('exercicio22_resultado').innerHTML = "";
   document.querySelector('.resultados').style.display = 'none';
   document.getElementById('exercicio22_valor1').value = '';
   document.getElementById('exercicio22_valor2').value = '';
   document.getElementById('exercicio22_valor3').value = '';
}

//Exercicio 23

function receberDados23() {
   let valor1, valor2, valor3, valor4;

   valor1 = parseInt(document.getElementById('exercicio23_valor1').value);
   valor2 = parseInt(document.getElementById('exercicio23_valor2').value);
   valor3 = parseInt(document.getElementById('exercicio23_valor3').value);
   valor4 = parseInt(document.getElementById('exercicio23_valor4').value);

   document.querySelector('.resultados').style.display = 'block';

   if (valor1 % 2 == 0) {
      document.getElementById('exercicio23Invisivel1').style.display = 'block';
      let elemento_pai = document.getElementById('exercicio23_resultado2');
      conteudo = document.createTextNode(valor1 + " | ");
      elemento_pai.appendChild(conteudo);
   }

   if (valor1 % 3 == 0) {
      document.getElementById('exercicio23Invisivel2').style.display = 'block';
      let elemento_pai = document.getElementById('exercicio23_resultado3');
      conteudo = document.createTextNode(valor1 + " | ");
      elemento_pai.appendChild(conteudo);
   }

   if (valor2 % 2 == 0) {
      document.getElementById('exercicio23Invisivel1').style.display = 'block';
      let elemento_pai = document.getElementById('exercicio23_resultado2');
      conteudo = document.createTextNode(valor2 + " | ");
      elemento_pai.appendChild(conteudo);
   }

   if (valor2 % 3 == 0) {
      document.getElementById('exercicio23Invisivel2').style.display = 'block';
      let elemento_pai = document.getElementById('exercicio23_resultado3');
      conteudo = document.createTextNode(valor2 + " | ");
      elemento_pai.appendChild(conteudo);
   }

   if (valor3 % 2 == 0) {
      document.getElementById('exercicio23Invisivel1').style.display = 'block';
      let elemento_pai = document.getElementById('exercicio23_resultado2');
      conteudo = document.createTextNode(valor3 + " | ");
      elemento_pai.appendChild(conteudo);
   }

   if (valor3 % 3 == 0) {
      document.getElementById('exercicio23Invisivel2').style.display = 'block';
      let elemento_pai = document.getElementById('exercicio23_resultado3');
      conteudo = document.createTextNode(valor3 + " | ");
      elemento_pai.appendChild(conteudo);
   }

   if (valor4 % 2 == 0) {
      document.getElementById('exercicio23Invisivel1').style.display = 'block';
      let elemento_pai = document.getElementById('exercicio23_resultado2');
      conteudo = document.createTextNode(valor4 + " ");
      elemento_pai.appendChild(conteudo);
   }

   if (valor4 % 3 == 0) {
      document.getElementById('exercicio23Invisivel2').style.display = 'block';
      let elemento_pai = document.getElementById('exercicio23_resultado3');
      conteudo = document.createTextNode(valor4 + " ");
      elemento_pai.appendChild(conteudo);
   }

   if (valor1 % 2 != 0 && valor1 % 3 != 0 && valor2 % 2 != 0 && valor2 % 3 != 0 && valor3 % 2 != 0 && valor3 % 3 != 0 && valor4 % 2 != 0 && valor4 % 3 != 0) {
      document.getElementById('exercicio23_resultado3').innerHTML = "Os números que digitou, não podem ser dividos por 2 e nem por 3."
   }
}

function limparTudo23() {
   document.getElementById('exercicio23_resultado2').innerHTML = "";
   document.getElementById('exercicio23_resultado3').innerHTML = "";
   document.getElementById('exercicio23_valor1').value = "";
   document.getElementById('exercicio23_valor2').value = "";
   document.getElementById('exercicio23_valor3').value = "";
   document.getElementById('exercicio23_valor4').value = "";
   document.querySelector('.resultados').style.display = 'none';
   document.getElementById('exercicio23Invisivel1').style.display = 'none';
   document.getElementById('exercicio23Invisivel2').style.display = 'none';
}

function limparDados23() {
   document.getElementById('exercicio23_resultado2').innerHTML = "";
   document.getElementById('exercicio23_resultado3').innerHTML = "";
   document.querySelector('.resultados').style.display = 'none';
   document.getElementById('exercicio23Invisivel1').style.display = 'none';
   document.getElementById('exercicio23Invisivel2').style.display = 'none';
}

// Exercicio 24

function receberDados24() {
   let valor1, valor2, valor3, valor4, valor5, aux, aux2;

   valor1 = parseFloat(document.getElementById('exercicio24_valor1').value);
   valor2 = parseFloat(document.getElementById('exercicio24_valor2').value);
   valor3 = parseFloat(document.getElementById('exercicio24_valor3').value);
   valor4 = parseFloat(document.getElementById('exercicio24_valor4').value);
   valor5 = parseFloat(document.getElementById('exercicio24_valor5').value);

   //Tornando o valor1 sempre o maior de todos e o valor5 o menor de todos

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
      aux2 = valor3;
      valor3 = valor2;
      valor2 = aux2;
   }

   if (valor4 > valor1) {
      aux = valor4;
      valor4 = valor1;
      valor1 = aux;
   }

   if (valor4 > valor3) {
      aux2 = valor4;
      valor4 = valor3;
      valor3 = aux2;
   }

   if (valor5 > valor1) {
      aux = valor5;
      valor5 = valor1;
      valor1 = aux;
   }

   if (valor5 > valor4) {
      aux2 = valor5;
      valor5 = valor4;
      valor4 = aux2;
   }

   document.querySelector('.resultados').style.display = 'block';

   document.getElementById('exercicio24_resultado').innerHTML = "O maior número digitado foi: " + valor1 + " e o menor: " + valor5;
}

function limparTudo24() {
   document.getElementById('exercicio24_resultado').innerHTML = "";
   document.getElementById('exercicio24_valor1').value = "";
   document.getElementById('exercicio24_valor2').value = "";
   document.getElementById('exercicio24_valor3').value = "";
   document.getElementById('exercicio24_valor4').value = "";
   document.getElementById('exercicio24_valor5').value = "";
   document.querySelector('.resultados').style.display = 'none';
}

function limparDados24() {
   document.querySelector('.resultados').style.display = 'none';
   document.getElementById('exercicio24_resultado').innerHTML = "";
}

// Exercicio 25

function receberDados25() {
   let valor = parseInt(document.getElementById('exercicio25_valor').value);

   document.getElementById('titulo25').style.display = 'block';

   if (valor % 2 == 0) {
      document.getElementById('exercicio25_resultado').innerHTML = "O valor " + valor + " é par!";
   } else {
      document.getElementById('exercicio25_resultado').innerHTML = "O valor " + valor + " é ímpar!";
   }
}

function limparDados25() {
   document.getElementById('titulo25').style.display = 'none';
   document.getElementById('exercicio25_resultado').innerHTML = "";
}

function limparTudo25() {
   document.getElementById('exercicio25_resultado').innerHTML = "";
   document.getElementById('exercicio25_valor').value = "";
   document.getElementById('titulo25').style.display = 'none';
}

// Exercicio 26

function receberDados26() {
   let valor = parseInt(document.getElementById('exercicio26_valor').value);

   if (valor >= 1 && valor <= 9) {
      document.getElementById('titulo26').style.display = 'block';
      document.getElementById('exercicio26_resultado').innerHTML = "O número digitado está DENTRO da faixa permitida de 1 a 9"
   } else {
      document.getElementById('titulo26').style.display = 'block';
      document.getElementById('exercicio26_resultado').innerHTML = "O número digitado está FORA da faixa permitida de 1 a 9"
   }
}

function limparDados26() {
   document.getElementById('titulo26').style.display = 'none';
   document.getElementById('exercicio26_resultado').innerHTML = "";
}

function limparTudo26() {
   document.getElementById('exercicio26_resultado').innerHTML = "";
   document.getElementById('exercicio26_valor').value = "";
   document.getElementById('titulo26').style.display = 'none';
}

// Exercicio 27

function receberDados27() {
   let valor = parseInt(document.getElementById('exercicio27_valor').value);

   if (valor < 3) {
      document.getElementById('titulo27').style.display = 'block';
      document.getElementById('exercicio27_resultado').innerHTML = "O valor digitado foi: " + valor;
   } else {
      document.getElementById('titulo27').style.display = 'block';
      document.getElementById('exercicio27_resultado').innerHTML = "O valor não é menor que três, portanto não será apresentado";
   }
}

function limparDados27() {
   document.getElementById('titulo27').style.display = 'none';
   document.getElementById('exercicio27_resultado').innerHTML = "";
}

function limparTudo27() {
   document.getElementById('exercicio27_resultado').innerHTML = "";
   document.getElementById('exercicio27_valor').value = "";
   document.getElementById('titulo27').style.display = 'none';
}

// Exercicio 28

function receberDados28() {
   let nome, sexo;

   nome = document.getElementById('exercicio28_nome').value;
   sexo = document.getElementById('exercicio28_sexo').value;

   nome = nome[0].toUpperCase() + nome.substr(1);

   if (sexo == "M" || sexo == "m") {
      document.getElementById('titulo28').style.display = 'block';
      document.getElementById('exercicio28_resultado').innerHTML = "Ilmo Sr." + nome;
   } else if (sexo == "F" || sexo == "f") {
      document.getElementById('titulo28').style.display = 'block';
      document.getElementById('exercicio28_resultado').innerHTML = "Ilma Sra. " + nome;
   } else {
      document.getElementById('titulo28').style.display = 'block';
      document.getElementById('exercicio28_resultado').innerHTML = "Por favor coloque o sexo como F ou M!!";
   }
}

function limparDados28() {
   document.getElementById('titulo28').style.display = 'none';
   document.getElementById('exercicio28_resultado').innerHTML = "";
}

function limparTudo28() {
   document.getElementById('titulo28').style.display = 'none';
   document.getElementById('exercicio28_resultado').innerHTML = "";
   document.getElementById('exercicio28_nome').value = "";
   document.getElementById('exercicio28_sexo').value = "";
}

// Exercicio 29

function receberDados29() {
   let valor, contador

   contador = 1
   document.getElementById('exercicio29_resultado').innerHTML = "";
   valor = parseInt(document.getElementById('exercicio29_tabuada').value);
   let elementoPai = document.getElementById('exercicio29_resultado');
   document.getElementById('titulo29').style.display = 'block';

   while (contador <= 10) {
      let resultado = (valor * contador)
      let elemento = document.createElement('br');
      let conteudo = document.createTextNode(valor + " x " + contador + " = " + resultado);
      elementoPai.appendChild(conteudo);
      elementoPai.appendChild(elemento);
      contador++
   }
}

function limparDados29() {
   document.getElementById('exercicio29_resultado').innerHTML = "";
   document.getElementById('titulo29').style.display = 'none';
}

// Exercicio 30

function receberDados30() {
   let contador = 1;
   let soma = 0;

   while (contador <= 100) {
      soma = soma + contador;
      contador++;
   }
   document.getElementById('titulo30').style.display = 'block';
   document.getElementById('exercicio30_resultado').innerHTML = "A soma de todos os núemros de 1 a 100 foi de: " + soma;
}

// Exercicio 31

function receberDados31() {
   let contador = 1;
   soma = 0;

   document.getElementById('exercicio31_resultado');

   while (contador <= 500) {
      if (contador % 2 == 0) {
         soma = soma + contador;
      }
      contador++
   }
   document.getElementById('titulo31').style.display = 'block'
   document.getElementById('exercicio31_resultado').innerHTML = "A soma dos números pares de 1 a 500 foi: " + soma;
}

// Exercicio 32

function receberDados32() {
   let contador = 0
   let elementoPai = document.getElementById('exercicio32_resultado2');

   document.getElementById('exercicio32_resultado2').innerHTML = "";

   document.getElementById('exercicio32_resultado').style.display = 'block'

   document.getElementById('titulo32').style.display = 'block'

   while (contador <= 20) {
      if (contador % 2 == 1) {
         let conteudo = document.createTextNode(contador + " | ");
         elementoPai.appendChild(conteudo);
      }
      contador++
   }
}

// Exercicio 33

function receberDados33() {
   let resultado = 1;
   let contador = 0;

   document.getElementById('titulo33').style.display = 'block';
   document.getElementById('exercicio33_resultado').style.display = 'block';

   let elementoPai = document.getElementById('exercicio33_resultado2');

   while (contador < 15) {
      if (contador == 0) {
         resultado = 1
      } else if (contador == 1) {
         resultado = 3
      }
      let conteudo = document.createTextNode(resultado + " | ")
      elementoPai.appendChild(conteudo);
      resultado = resultado * 3
      contador++
   }
}

function receberDados34() {
   let base, expoente, contador, resultado;
   base = parseInt(document.getElementById('exercicio34_base').value);
   expoente = parseInt(document.getElementById('exercicio34_expoente').value);
   contador = 1;
   resultado = 1;
   while (contador <= expoente) {
      resultado = resultado * base
      document.getElementById('exercicio34_resultado').innerHTML = "O resultado da potenciação é: " + resultado
      contador++
   }
   document.getElementById('titulo34').style.display = 'block'
   document.getElementById('exercicio34_resultado').style.display = 'block'

}

function limparTudo34() {
   document.getElementById('titulo34').style.display = 'none';
   document.getElementById('exercicio34_resultado').style.display = 'none';
   document.getElementById('exercicio34_base').value = "";
   document.getElementById('exercicio34_expoente').value = "";
}

function limparDados34() {
   document.getElementById('titulo34').style.display = 'none';
   document.getElementById('exercicio34_resultado').style.display = 'none';
}

// Exercicio 35

function receberDados35() {
   let termo1, termo2, termo3, elementoPai, conteudo, contador;

   termo1 = -1;
   termo2 = 1;
   termo3 = 0;
   contador = 0;
   elementoPai = document.getElementById('exercicio35_resultado');
   document.getElementById('titulo35').style.display = 'block'
   document.getElementById('exercicio35_resultado').style.display = 'block'
   document.getElementById('exercicio35Botao').style.display = 'none';
   document.getElementById('exercicio35Botao2').style.display = 'block';
   document.getElementById('titulo35_2').innerHTML = "Clique para Limpar"
   while (contador < 15) {
      termo3 = termo1 + termo2;
      termo1 = termo2;
      termo2 = termo3;
      conteudo = document.createTextNode(termo3 + " | ");
      elementoPai.appendChild(conteudo);
      contador++
   }
}

function limparDados35() {
   document.getElementById('exercicio35Botao').style.display = 'block';
   document.getElementById('exercicio35Botao2').style.display = 'none';
   document.getElementById('exercicio35_resultado').innerHTML = "";
   document.getElementById('titulo35').style.display = 'none';
   document.getElementById('titulo35_2').innerHTML = "Clique para Calcular"
}

// Exercicio 36

function receberDados36() {
   let contador, fahrenheit, elementoPai, conteudo, elemento;

   document.getElementById('exercicio36Botao').style.display = 'none';
   document.getElementById('exercicio36Botao2').style.display = 'block';
   document.getElementById('titulo36').style.display = 'block';
   document.getElementById('exercicio36_resultado').style.display = 'block';
   elementoPai = document.getElementById('exercicio36_resultado2');

   contador = 10;
   fahrenheit = 0;

   while (contador <= 100) {
      fahrenheit = (9 * contador + 160) / 5;
      elemento = document.createElement('br');
      conteudo = document.createTextNode(contador + '° Celsius | Fahrenheit: ' + fahrenheit + "°");
      elementoPai.appendChild(conteudo);
      elementoPai.appendChild(elemento);
      contador = contador + 10;
   }
}

function limparDados36() {
   document.getElementById('exercicio36Botao').style.display = 'block';
   document.getElementById('exercicio36Botao2').style.display = 'none';
   document.getElementById('exercicio36_resultado2').innerHTML = "";
   document.getElementById('exercicio36_resultado').style.display = 'none';
   document.getElementById('titulo36').style.display = 'none';
}

// Exercicio 37

function receberDados37() {
   let valor, soma, media, contador;

   contador = 1;

   while (contador <= 5) {
      valor = parseInt(document.getElementById('valor' + contador).value);
      soma += valor;
      contador++;
   }

   media = soma / contador;

   document.getElementById('titulo37').style.display = 'block';
   document.getElementById('exercicio37_resultado').innerHTML = "O valor da somatória: " + soma + " | O valor da média: " + media;
}

function limparTudo37() {
   document.getElementById('titulo37').style.display = 'none';
   document.getElementById('exercicio37_resultado').innerHTML = "";
   document.getElementById('exercicio37_valor1').value = "";
   document.getElementById('exercicio37_valor2').value = "";
   document.getElementById('exercicio37_valor3').value = "";
   document.getElementById('exercicio37_valor4').value = "";
   document.getElementById('exercicio37_valor5').value = "";
}

function limparDados37() {
   document.getElementById('titulo37').style.display = 'none';
   document.getElementById('exercicio37_resultado').innerHTML = "";
}

// Exercicio 38

function receberDados38() {
   let contador, contadorSoma, media, soma;
   contador = 50;
   contadorSoma = 0;
   soma = 0;
   while (contador <= 70) {
      if (contador % 2 == 0) {
         contadorSoma++
         soma = soma + contador;
      }
      contador++;
   }
   media = soma / contadorSoma;
   document.getElementById('titulo38').style.display = 'block';
   document.getElementById('exercicio38_resultado').innerHTML = "O total da soma dos números pares é: " + soma + " | O total da média entre eles é: " + media;
}

// Exercicio 39

let comodos39 = [];

function adicionarComodo39() {
   // Obtém os valores do formulário
   let nome = document.getElementById("exercicio39Nome").value;
   let largura = parseFloat(document.getElementById("exercicio39Largura").value);
   let comprimento = parseFloat(document.getElementById("exercicio39Comprimento").value);

   // Calcular a área do cômodo
   let area = largura * comprimento;

   // Criar um objeto com as informações do cômodo
   let comodo = {
      nome: nome,
      largura: largura,
      comprimento: comprimento,
      area: area,
   };

   // Adicionar o cômodo à lista
   comodos39.push(comodo);

   // Limpar os campos do formulário
   document.getElementById("exercicio39Nome").value = "";
   document.getElementById("exercicio39Largura").value = "";
   document.getElementById("exercicio39Comprimento").value = "";

   // Exibir a área do cômodo adicionado
   document.getElementById('titulo39').style.display = 'block'
   let elementoPai = document.getElementById('exercicio39_comodo');
   let elemento = document.createElement('br');
   let mensagem = document.createTextNode("Área do cômodo " + nome.toUpperCase() + ": " + area + " metros quadrados")
   elementoPai.appendChild(mensagem);
   elementoPai.appendChild(elemento);
}

function calcularAreaTotal39() {
   // Calcular a área total dos cômodos adicionados
   let areaTotal = 0;
   for (let indice = 0; indice < comodos39.length; indice++) {
      areaTotal += comodos39[indice].area;
   }

   // Exibir o resultado
   document.getElementById('titulo39_2').style.display = 'block'
   document.getElementById('exercicio39_resultado').innerHTML = "Área total da residência: " + areaTotal + " metros quadrados";
}

function limparTudo39() {
   document.getElementById("exercicio39Nome").value = "";
   document.getElementById("exercicio39Largura").value = "";
   document.getElementById("exercicio39Comprimento").value = "";
   document.getElementById('exercicio39_comodo').innerHTML = "";
   document.getElementById('exercicio39_resultado').innerHTML = "";
   document.getElementById('titulo39_2').style.display = 'none';
   document.getElementById('titulo39').style.display = 'none';
   comodos = [];
}

//exercicio 40

let numeros40 = [];
let maior40;
let menor40;

function adicionarNumero40() {

   let valor = parseFloat(document.getElementById('exercicio40Numero').value);

   document.getElementById('exercicio40Numero').value = "";

   numeros40.unshift(valor);
   // Verificações
   if (valor < 0) {
      apresentarMaiorMenor40();
   }
}


function apresentarMaiorMenor40() {
   maior40 = numeros40[0];
   menor40 = numeros40[0];
   for (let indice = 0; indice < numeros40.length; indice++) {
      if (numeros40[indice] > maior40) {
         maior40 = numeros40[indice];
      } else {
         if (numeros40[indice] < menor40) {
            menor40 = numeros40[indice];
         }
      }
   }
   document.getElementById('titulo40').style.display = 'block';
   document.getElementById('exercicio40_resultado').innerHTML = "O maior número: " + maior40 + " | O menor número foi: " + menor40;
}

function limparTudo40() {
   document.getElementById('exercicio40Numero').value = "";
   document.getElementById('exercicio40_resultado').innerHTML = "";
   document.getElementById('titulo40').style.display = 'none';
   numeros40 = [];
}

//  Exercicio 41

function calcular41() {
   let contador = 15;
   document.getElementById('calcular41').style.display = 'none';
   document.getElementById('limpar41').style.display = 'block';
   document.getElementById('titulo41').style.display = 'block';
   document.getElementById('titulo41_2').innerHTML = "Clique para limpar";
   let elementoPai = document.getElementById('exercicio41_resultado');
   do {
      let quadrado = contador ** 2;
      let conteudo = document.createTextNode(contador + " ^ 2  = " + quadrado);
      let elemento = document.createElement('br');
      elementoPai.appendChild(elemento);
      elementoPai.appendChild(conteudo);
      contador++
   } while (contador <= 30);
}

function limpar41() {
   document.getElementById('titulo41_2').innerHTML = "Clique para calcular";
   document.getElementById('calcular41').style.display = 'block';
   document.getElementById('limpar41').style.display = 'none';
   document.getElementById('titulo41').style.display = 'none';
   document.getElementById('exercicio41_resultado').innerHTML = "";
}

// Exercicio 42

function calcular42() {
   document.getElementById('calcular42').style.display = 'none';
   document.getElementById('limpar42').style.display = 'block';
   document.getElementById('titulo42').style.display = 'block';
   document.getElementById('titulo42_2').innerHTML = "Clique para limpar";

   let contador, soma;
   contador = 1;
   soma = 0;

   do {
      if (contador % 2 == 0) {
         soma += contador
      }
      contador++
   } while (contador < 500);

   document.getElementById('exercicio42_resultado').innerHTML = "O resultado da soma de todos os pares, entre 1 e 500 é: " + soma;
}

function limpar42() {
   document.getElementById('titulo42_2').innerHTML = "Clique para calcular";
   document.getElementById('calcular42').style.display = 'block';
   document.getElementById('limpar42').style.display = 'none';
   document.getElementById('titulo42').style.display = 'none';
   document.getElementById('exercicio42_resultado').innerHTML = "";
}

// Exercicio 43

function calcular43() {
   let contador = 1;
   let elementoPai, elemento, conteudo;

   document.getElementById('calcular43').style.display = 'none';
   document.getElementById('limpar43').style.display = 'block'
   document.getElementById('titulo43').style.display = 'block';
   document.getElementById('exercicio43_resultado').style.display = 'block';
   elementoPai = document.getElementById('exercicio43_resultado');
   elemento = document.createElement('br');
   elementoPai.appendChild(elemento);
   do {
      if (contador % 4 == 0) {
         conteudo = document.createTextNode(contador + ' | ');
         elementoPai.appendChild(conteudo);
      }
      contador++
   } while (contador <= 200);
}

function limpar43() {
   document.getElementById('limpar43').style.display = 'none'
   document.getElementById('calcular43').style.display = 'block';
   document.getElementById('titulo43').style.display = 'none';
   document.getElementById('exercicio43_resultado').style.display = 'none';
   document.getElementById('exercicio43_resultado').innerHTML = "";
}

// Exercicio 44

function calcular44() {
   document.getElementById('calcular44').style.display = 'none';
   document.getElementById('titulo44').style.display = 'block';
   document.getElementById('limpar44').style.display = 'block';
   let contador, soma, graos;
   contador = 1;
   soma = 0;
   graos = 1;

   do {
      soma += graos
      graos *= 2
      contador++
   } while (contador <= 64);

   document.getElementById('exercicio44_resultado').innerHTML = "O somatório total foi: " + soma;
   document.getElementById('titulo44_2').innerHTML = "Clique para limpar";
}

function limpar44() {
   document.getElementById('exercicio44_resultado').innerHTML = "";
   document.getElementById('titulo44_2').innerHTML = "Clique para calcular";
   document.getElementById('calcular44').style.display = 'block';
   document.getElementById('titulo44').style.display = 'none';
   document.getElementById('limpar44').style.display = 'none';
}

// Exercicio 45

let numeros45 = [];

function adicionar45() {
   let valor = parseInt(document.getElementById('valor45').value);
   numeros45.unshift(valor);
   document.getElementById('valor45').value = "";
}

let somatorio = 0;
let indice = 0;
function calcular45() {
   somatorio = 0;
   do {
      const valor = numeros45[indice];
      somatorio += fatorial45(valor);
      console.log(somatorio);
      indice++;
   } while (indice < numeros45.length);

   document.getElementById('titulo45').style.display = 'block';
   document.getElementById('exercicio45_resultado').innerHTML = "A somatória das fatorias, foi: " + somatorio;
   numeros45 = [];
}

function fatorial45(n) {
   if (n < 0) {
      return NaN;
   } else if (n === 0) {
      return 1;
   } else {
      return n * fatorial45(n - 1);
   }
}

function limpar45() {
   document.getElementById('exercicio45_resultado').innerHTML = "";
   numeros45 = [];
   document.getElementById('titulo45').style.display = 'none';
}

// Exercicio 46
let numeros46 = [];

function adicionar46() {
   let valor = parseInt(document.getElementById('valor46').value);
   if (valor < 0) {
      calcular46();
   }
   numeros46.unshift(valor);
   document.getElementById('valor46').value = "";
}

function calcular46() {
   let soma, media, indice;
   indice = 0, soma = 0, media = 0;
   do {
      const valor = numeros46[indice];
      soma += valor;
      indice++;
   } while (indice < numeros46.length);

   media = soma / indice;

   document.getElementById('titulo46').style.display = 'block';
   document.getElementById('exercicio46_resultado').innerHTML = "O total de valores lidos foi: " + indice + " | A soma total foi: " + soma + " | A média aritmética foi: " + media;
   numeros46 = [];
}

function limpar46() {
   document.getElementById('titulo46').style.display = 'none';
   document.getElementById('exercicio46_resultado').innerHTML = "";
   numeros46 = [];
}

// Exercicio 47

function fatorial47(n) {
   if (n < 0) {
      return NaN;
   } else if (n === 0) {
      return 1;
   } else {
      return n * fatorial47(n - 1);
   }
}

function calcular47() {
   const resultados = document.getElementById('exercicio47_resultado');
   document.getElementById('exercicio47_resultado').innerHTML = "";
   let indice = 1
   do {
      if (indice % 2 === 1) { // se o número é ímpar
         const fatorialAtual = fatorial47(indice);
         const elemento = document.createElement('br');
         const conteudo = document.createTextNode("O fatorial de: !" + indice + " = " + fatorialAtual);
         resultados.appendChild(conteudo);
         resultados.appendChild(elemento);
      }
      indice++
   } while (indice <= 10);
   document.getElementById('titulo47').style.display = 'block';
}

function limpar47() {
   document.getElementById('titulo47').style.display = 'none';
   document.getElementById('exercicio47_resultado').innerHTML = "";
}

// Exercicio 48

let comodos48 = [];

function adicionarComodo48() {
   // Obtém os valores do formulário
   let nome = document.getElementById("exercicio48Nome").value;
   let largura = parseFloat(document.getElementById("exercicio48Largura").value);
   let comprimento = parseFloat(document.getElementById("exercicio48Comprimento").value);

   // Calcular a área do cômodo
   let area = largura * comprimento;

   // Criar um objeto com as informações do cômodo
   let comodo = {
      nome: nome,
      largura: largura,
      comprimento: comprimento,
      area: area,
   };

   // Adicionar o cômodo à lista
   comodos48.push(comodo);

   // Limpar os campos do formulário
   document.getElementById("exercicio48Nome").value = "";
   document.getElementById("exercicio48Largura").value = "";
   document.getElementById("exercicio48Comprimento").value = "";

   // Exibir a área do cômodo adicionado
   document.getElementById('titulo48').style.display = 'block'
   let elementoPai = document.getElementById('exercicio48_comodo');
   let elemento = document.createElement('br');
   let mensagem = document.createTextNode("Área do cômodo " + nome.toUpperCase() + ": " + area + " metros quadrados")
   elementoPai.appendChild(mensagem);
   elementoPai.appendChild(elemento);
}

function calcularAreaTotal48() {
   // Calcular a área total dos cômodos adicionados
   let areaTotal = 0;
   let indice = 0

   do {
      areaTotal += comodos48[indice].area;
      indice++
   } while (indice < comodos48.length);


   // Exibir o resultado
   document.getElementById('titulo48_2').style.display = 'block'
   document.getElementById('exercicio48_resultado').innerHTML = "Área total da residência: " + areaTotal + " metros quadrados";
}

function limparTudo48() {
   document.getElementById("exercicio48Nome").value = "";
   document.getElementById("exercicio48Largura").value = "";
   document.getElementById("exercicio48Comprimento").value = "";
   document.getElementById('exercicio48_comodo').innerHTML = "";
   document.getElementById('exercicio48_resultado').innerHTML = "";
   document.getElementById('titulo48_2').style.display = 'none';
   document.getElementById('titulo48').style.display = 'none';
   comodos = [];
}

// Exercicio 49

let numeros49 = [];
let maior49;
let menor49;

function adicionar49() {

   let valor = parseFloat(document.getElementById('exercicio49Numero').value);

   document.getElementById('exercicio49Numero').value = "";

   numeros49.unshift(valor);
   // Verificações
   if (valor < 0) {
      apresentarMaiorMenor49();
   }
}


function apresentarMaiorMenor49() {
   maior49 = numeros49[0];
   menor49 = numeros49[0];
   let indice = 0
   do {
      if (numeros49[indice] > maior49) {
         maior49 = numeros49[indice];
      } else {
         if (numeros49[indice] < menor49) {
            menor49 = numeros49[indice];
         }
      }
      indice++
   } while (indice < numeros49.length);

   document.getElementById('titulo49').style.display = 'block';
   document.getElementById('exercicio49_resultado').innerHTML = "O maior número: " + maior49 + " | O menor número foi: " + menor49;
}

function limpar49() {
   document.getElementById('exercicio49Numero').value = "";
   document.getElementById('exercicio49_resultado').innerHTML = "";
   document.getElementById('titulo49').style.display = 'none';
   numeros49 = [];
}

// Exercicio 50

function calcular50(){
   let dividendo = parseInt(document.getElementById("dividendo50").value);
   let divisor = parseInt(document.getElementById("divisor50").value);
   document.getElementById("divisor50").value = "";
   document.getElementById("dividendo50").value = "";
   let quociente = 0;
   
   let exibirDividendo = dividendo;
   while (dividendo >= divisor) {
     dividendo -= divisor;
     quociente++;
   }
 
   document.getElementById("titulo50").style.display = 'block';
   document.getElementById("exercicio50_resultado").innerHTML = "A divisão entre " + exibirDividendo + " por " + divisor + " foi igual a: " + quociente;
 }

 function limpar50(){
   document.getElementById("titulo50").style.display = 'none';
   document.getElementById("exercicio50_resultado").innerHTML = "";
 }

// Exercicio 51

function calcular51(){
   document.getElementById('exercicio51_resultado').innerHTML = "";
   document.getElementById('limpar51').style.display = 'block';
   document.getElementById('titulo51').style.display = 'block';
   document.getElementById('calcular51').style.display = 'none';
   document.getElementById('titulo51_2').innerHTML = "Clique para limpar";
   let potencia;
   let elementoPai = document.getElementById('exercicio51_resultado');
   for (let contador = 15; contador <= 30; contador++) {
      let elemento = document.createElement('br');
      potencia = contador ** 2
      let conteudo = document.createTextNode(contador + ' ^ 2 = ' + potencia);
      elementoPai.appendChild(conteudo);
      elementoPai.appendChild(elemento);
   }
}

function limpar51(){
   document.getElementById('limpar51').style.display = 'none';
   document.getElementById('titulo51').style.display = 'none';
   document.getElementById('calcular51').style.display = 'block';
   document.getElementById('titulo51_2').innerHTML = "Clique para Calcular";
   document.getElementById('exercicio51_resultado').innerHTML = "";
}

// Exercicio 52

function calcular52(){
   let elementoPai = document.getElementById('exercicio52_resultado');
   let valor = parseFloat(document.getElementById('valor52').value);
   document.getElementById('valor52').value = "";
   document.getElementById('exercicio52_resultado').innerHTML = "";
   document.getElementById('titulo52').style.display = 'block'
   let resultado;
   for (let contador = 1; contador <= 10; contador++) {
      let elemento = document.createElement('br');
      resultado = valor * contador;      
      let conteudo = document.createTextNode(valor + ' x ' + contador + " = " + resultado)
      elementoPai.appendChild(conteudo);
      elementoPai.appendChild(elemento);
   }
}

function limpar52(){
   document.getElementById('exercicio52_resultado').innerHTML = "";
   document.getElementById('titulo52').style.display = 'none   ' 
}

// Exercicio 53

function calcular53(){
   let soma = 0; 
   document.getElementById('titulo53').style.display = 'block';
   for (let contador = 1; contador <= 100; contador++) {
      soma += contador;
   }
   document.getElementById('exercicio53_resultado').innerHTML = "O reusltado da soma é: " + soma;
}

function limpar53(){
   document.getElementById('exercicio53_resultado').innerHTML = "";
   document.getElementById('titulo53').style.display = 'none';
}

// Exercicio 54

function calcular54(){
   let soma = 0;
   document.getElementById('titulo54').style.display = 'block';
   for (let contador = 1; contador <= 500; contador++) {
      if (contador % 2 == 0) {
         soma += contador;
      }
   }
   document.getElementById('exercicio54_resultado').innerHTML = "A soma dos números pares é: " + soma;
}

function limpar54(){
   document.getElementById('exercicio54_resultado').innerHTML = "";
   document.getElementById('titulo54').style.display = 'none';
}

// Exercicio 55

function calcular55(){
   document.getElementById('titulo55').style.display = 'block';
   document.getElementById('exercicio55_resultado').innerHTML = "";
   document.getElementById('exercicio55_resultado').innerHTML = "Os números ímpares são: ";
   let elementoPai = document.getElementById('exercicio55_resultado');
   for (let contador = 0; contador <= 20; contador++) {
      if (contador % 2 != 0) {
         let conteudo = document.createTextNode(contador + " | ");
         elementoPai.appendChild(conteudo);
      }
   }
}

function limpar55(){
   document.getElementById('titulo55').style.display = 'none';
   document.getElementById('exercicio55_resultado').innerHTML = "";
}

// Exercicio 56

function calcular56(){
   document.getElementById('titulo56').style.display = 'block';
   document.getElementById('exercicio56_resultado').innerHTML = "";
   document.getElementById('exercicio56_resultado').innerHTML = "Os números divisíveis por 4 são: ";
   let elementoPai = document.getElementById('exercicio56_resultado');
   for (let contador = 1; contador <= 200; contador++) {
      if (contador % 4 == 0) {
         let conteudo = document.createTextNode(contador + " | ");
         elementoPai.appendChild(conteudo);
      }
   }
}

function limpar56(){
   document.getElementById('titulo56').style.display = 'none';
   document.getElementById('exercicio56_resultado').innerHTML = "";
}

// Exercicio 57

function calcular57(){
   let elementoPai = document.getElementById('exercicio57_resultado');
   let resultado = 0;
   document.getElementById('titulo57').style.display = 'block';
   document.getElementById('exercicio57_resultado').innerHTML = "O resultado das potências é: ";
   for (let contador = 0; contador <= 15; contador++) {
      if (contador == 0) {
         resultado = 1;
      } else if (contador == 1) {
         resultado = 3;
      }
      let conteudo = document.createTextNode(resultado + ' | ');
      
      elementoPai.appendChild(conteudo);
      resultado *= 3
   } 
}

function limpar57(){
   document.getElementById('titulo57').style.display = 'none';
   document.getElementById('exercicio57_resultado').innerHTML = "";
}

// Exercicio 58

function calcular58(){
   let base, expoente, resultado;
   document.getElementById('titulo58').style.display = 'block';
   base = parseInt(document.getElementById('base58').value);
   expoente = parseInt(document.getElementById('expoente58').value);
   document.getElementById('base58').value = "";
   document.getElementById('expoente58').value = "";
   for (let contador = 0; contador <= expoente; contador++) {
      if (contador == 0) {
         resultado = 1;
      } else if (contador == 1) {
         resultado = base;
      }
      document.getElementById('exercicio58_resultado').innerHTML = "O resultado da potência entre " + base + "^" + expoente + " foi: " + resultado;
      
      resultado *= base;
   }
}

function limpar58(){
   document.getElementById('titulo58').style.display = 'none';
   document.getElementById('exercicio58_resultado').innerHTML = "";
   document.getElementById('base58').value = "";
   document.getElementById('expoente58').value = "";
}

// Exercicio 59

function calcular59(){
   let elementoPai = document.getElementById('exercicio59_resultado');
   document.getElementById('titulo59').style.display = 'block';
   document.getElementById('exercicio59_resultado').innerHTML = "";
   document.getElementById('exercicio59_resultado').innerHTML = "O resultado foi: ";
   let termo1, termo2, termo3;
   termo1 = -1;
   termo2 = 1;
   termo3 = 0;
   for (let contador = 0; contador < 15; contador++) {
      termo3 = termo1 + termo2;
      termo1 = termo2;
      termo2 = termo3;
      let conteudo = document.createTextNode(termo3 + ' | ');
      elementoPai.appendChild(conteudo);   

   }
}

function limpar59(){
   document.getElementById('exercicio59_resultado').innerHTML = "";
   document.getElementById('titulo59').style.display = 'none';
}

// Exercicio 60

function calcular60(){
   document.getElementById('exercicio60_resultado').innerHTML = "";
   document.getElementById('titulo60').style.display = 'block';
   let fahrenheit = 0;
   let elementoPai = document.getElementById('exercicio60_resultado');
   for (let celsius = 10; celsius <= 100; celsius+=10) {
      fahrenheit = (9 * celsius + 160)/5;
      let elemento = document.createElement('br');
      let conteudo = document.createTextNode('Celsius: ' + celsius + '° | Fahrenheit: ' + fahrenheit + '°');
      elementoPai.appendChild(conteudo);
      elementoPai.appendChild(elemento);
   }
}

function limpar60(){
   document.getElementById('exercicio60_resultado').innerHTML = "";
   document.getElementById('titulo60').style.display = 'none';
}

// Exercicio 61

function fatorial61(n) {
   if (n < 0) {
      return NaN;
   } else if (n === 0) {
      return 1;
   } else {
      return n * fatorial61(n - 1);
   }
}

function calcular61() {
   const resultados = document.getElementById('exercicio61_resultado');
   document.getElementById('exercicio61_resultado').innerHTML = "";
   
   for (let contador = 1; contador <= 10; contador++) {
      if (contador % 2 === 1) { // se o número é ímpar
         const fatorialAtual = fatorial61(contador);
         const elemento = document.createElement('br');
         const conteudo = document.createTextNode("O fatorial de: !" + contador + " = " + fatorialAtual);
         resultados.appendChild(conteudo);
         resultados.appendChild(elemento);
      }
   }
   document.getElementById('titulo61').style.display = 'block';
}

function limpar61() {
   document.getElementById('titulo61').style.display = 'none';
   document.getElementById('exercicio61_resultado').innerHTML = "";
}