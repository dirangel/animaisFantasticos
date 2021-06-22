const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-lista");
const descricaoAnimais = document.querySelector(".animais-descricao");

console.log("titulo inner: ", h1.innerHTML);
console.log("titulo outer: ", h1.outerHTML);

// h1.innerHTML = "<p>Teste</p>";

// console.log(".animais-lista: ", animaisLista.innerHTML);
// console.log(".animias-descricao: ", descricaoAnimais.innerText);
// console.log(".animias-descricao: ", descricaoAnimais.innerHTML);

//vai navegar um elemento acima
console.log(animaisLista.parentElement);
//vai navegar dois elemento acima
console.log(animaisLista.parentElement.parentElement);

//vai navegar elemento abaixo:
console.log(animaisLista.nextElementSibling);

//testando elemento
const desc = animaisLista.nextElementSibling;
console.log(desc.innerText);

console.log(desc.children);

const lista = document.querySelector(".animais-lista");

const contato = document.querySelector(".contato");
const titulo = document.querySelector(".titulo");
const animais = document.querySelector(".animais");
const mapa = document.querySelector(".mapa");
const copy = document.querySelector(".copy");
const frase = document.querySelector(".frase");

// console.log(titulo);

// jogando o elemento titulo para o ultimo filho da lista
// lista.appendChild(titulo);
// faq.appendChild(titulo);

// animais.removeChild(titulo);

// faq.replaceChild(lista, titulofaq);

// const novoH1 = document.createElement("h1");
// novoH1.innerText = "Novo Título";
// novoH1.classList.add("titulo");
// animais.appendChild(novoH1);

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");
const clone = h1.cloneNode(true);
faq.appendChild(clone);

console.log(clone);
