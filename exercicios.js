//forEach
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

//Traversing e Manipulação
//duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const clone = menu.cloneNode(true);
copy.appendChild(clone);

//selecione o primeiro DT da dl de faq
const faq = document.querySelector(".faq");
const primeriDt = faq.querySelector("dt");
console.log(primeriDt);

//selecione o DD referente ao primeiro DT
const proximoDD = primeriDt.nextElementSibling;
console.log(proximoDD);

//substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");
const animaisLista = document.querySelector(".animais-lista");
animais.replaceChild(faq, animaisLista);
