/*"use strict";

//classe pai

class List {
  //Primeiro método executado toda vez que vamos instanciar um novo objeto apartir da classe 
  //É o método constructor
  //Nele podemos iniciar variaveis
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}
//classe filho
class TodoList extends List {
  constructor(){
   //usar o super é basicamente chamar o constructor da classe pai
    super();

    this.usuario = 'Willian';
  }
  mostraUsario() {
    console.log(this.usuario);
  }
 
  }
  

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.add('Novo todo');
}
MinhaLista.mostraUsario();



//toda vez que tiver o metodo static ele serve para que passamos uma informação para ele
//E ele retornar outra informação independente do restante da classe
//normalmente quando estiver metodos static em uma classe não irá ter constructor
//No exemplo a seguir o static se encaixa
class Matematica {
  static soma(a, b) {
    return a + b;

  }
}
console.log(Matematica.soma(1, 2));

//Na const não podemos reatribuir um valor a uma variavel mas podemos mutar
//Podemos mutar na const quando trabalhamos com o mesmo formato/informações do objeto
//Porém alteramos valores dentro dele no caso seguinte mudou de Wilson para Willian
const usuario = {nome: 'Wilson'};
usuario.nome = 'Willian'
console.log(usuario);


//Dentro de cada chave a gente chama de escopo 
//Abertura
function teste (x)  {//abertura
  let y = 2;
  if (x > 5)  {//abertura
    let y = 4;
    console.log(x, y);
              }//fechamento
                    } //fechamento
teste(10)

//map serve para percorrer o vetor e retornar uma nova informação
//no caso do exemplo a seguir irá multiplicar pelo index
//0x2=0 1x3=3 2x4=8 3x5=15 4x6=24 5x7=35
const arr = [2, 3, 4, 5, 6, 7];
const newArr = arr.map(function(item, index) {
return item * index;
});
console.log(newArr);
//vai somar todos os valores do array
const sum = arr.reduce(function(total, next) {
return total  + next;
});
console.log(sum);
//nesse filter está filtrando os numeros que são pares e obrigatoriamente tem que retornar
//true or false dentro do array
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log(filter)
//Serve para encontrar se existe alguma opção dentro do array
const find = arr.find(function(item){
  return item === 4;
});
console.log(find);

//Sem Arrow function 
const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map(function(item){
  return item *2;
})
console.log(newArr);

//Com arrow function
//Quando a função recebe apenas um parametro podemos remover os parentes
//como o exemplo seguinte
const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map(item => {
  return item *2;
})
console.log(newArr);
//Quando a função retorna simplesmente alguma informação por exemplo (item * 2)
//Quando não tem varias linhas ou ser um corpo de função
//Pode ser feito da seguinte forma
  
const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map(item => item *2);
console.log(newArr);
//Na arrow function quando quer mostrar um objeto deverá adicionar um parentese

//Quando retorna null quer dizer que o numero é infinito ou ele não conseguiu encontrar
//tem que definir um valor para as variaveis 


//definir valores padrões para funções no javascript
const soma = (a =3, b=6) => a+b;
console.log(soma(1));
console.log(soma());

const usuario = {
  nome: 'Willian',
  idade: 20,
  endereco: {
  cidade: 'Colatina',
  estado: 'Espirito Santo',
},
};
//jeito mais rapido para buscar informações
//Conceito de desestruturação
const { nome, idade, endereco: {cidade, estado}} =usario;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);

jeito mais longo para buscar informações no javascript
const nome = usario.nome;
const idade = usario.idade;
const cidade = usario.endereco.cidade;

//Pode ser usado a desestruturação também para os parametros de funções
function mostraNome({nome, idade}) {
  console.log(nome, idade);

}
mostraNome(usuario);
//REST
//serve pra pegar o resto das propriedades exemplo
const usuario = {
  nome: 'Willian',
  idade: 20,
  empresa: 'Amazon'
};
const { nome, ...resto} = usuario;
console.log(nome);
console.log(resto);
//REST usado em vetores
const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;
console.log(a); //vai conter o 1
console.log(b); //vai conter o 2
console.log(c); //vai conter o resto o 3, 4, 5

//REST em parametros de funções
//para somar os valores
function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 4))
//conversão dos params em formato de array
function soma(...params) {
  return params;
}
console.log(soma(1, 2, 4))

//REST colocar o resto pro params
function soma (a, b, ...params) {
  return params;
}
console.log(soma(1, 2, 3, 4, 5, 6, 7));

//SPREAD
//enquanto o rest pega o resto de uma estruturação ou passagem de parametros 
//o spread faz o papel de propagar/repassar as informações de um objeto ou array
//para outra estrutura de dados 
const arr1= [1, 2, 3];
const arr2= [4, 5, 6];
//o ... utilizado nesse escopo ele vai copiar cada uma das informações do array1 e 2
//E colocar dentro do arr3
const arr3= [...arr1, ...arr2];
console.log(arr3);


//Muda o nome mantendo as mesmas informações de idade e empresa
const usuario1 = {
  nome: 'Willian',
  idade: 23,
  empresa: 'Amazon',
};
const usuario2 = {...usuario1, nome: 'Gabriel'};
console.log(usuario2);

const nome = "Willian";
const idade = 20;
//sintaxe errada de fazer concatenação
console.log('Meu nome é ' + nome  + ' e tenho ' + idade + ' anos');
//sintaxe certa de fazer concatenação
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)

//Sitaxe curta de objetos
var nome = 'Willian';
var idade = 20;
var usuario = {
  //No ES6 não precisa fazer essa repetição do nome sendo nome idade sendo idade etc
  //nome: nome,
  //idade: idade,
  //empresa: 'Amazon'
  //basta deixar apenas 1 deles 
  nome: nome,
  idade: idade,
  empresa: 'Amazon'
};
console.log(usuario);*/
