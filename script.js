// Utilize os arquivos de base disponibilizados para realizar os exercícios
// propostos. Manipule os elementos HTML utilizando o querySelectorAll e o
// setAttribute, aplicando as alterações necessárias para que fique
// semelhante a imagem abaixo.

// 1. Capture, armazene e manipule todos os elementos de classe "card".
// Modifique os estilos necessários nesses elementos para que fique
// semelhante a imagem.
/*const className = document.querySelectorAll(".card");
for (let i = 0; i < className.length; i++) {
  className[i].style.background="orange";}*/

  let card = document.getElementsByClassName('card')
  for (let i = 0; i < card.length; i++) {
      card[i].style.background = 'orange'
  }
  

    //2. Capture, armazene e manipule todos os elementos de classe
//"titulo-card". Modifique os estilos necessários nesses elementos
//para que fique semelhante a imagem.
const titulo= document.getElementsByClassName('titulo-card')
for (let i=0;i< titulo.length; i++){
    titulo[i].style.color ='#2b385b'
}

//3. Modifique o texto dos títulos nos cards para "Meu card".
for (let i = 0; i < titulo.length; i++) {
    titulo[i].innerText = "Meu Card";
  }

 //4. Capture, armazene e manipule todos os elementos de classe
//"descricao-card". Modifique os estilos necessários nesses elementos
//para que fique semelhante a imagem. 
const descricao= document.getElementsByClassName('descricao-card')
for (let i=0;i< descricao.length;i++){
  descricao[i].style.color="white"
  descricao[i].style.fontSize = "14px";
  descricao[i].style.marginTop = "40px";
  descricao[i].style.marginBottom = "40px";
}

//5.Modifique o texto das descrições nos cards para "Descrição
//modificadapeloJavaScript".
for (let i = 0; i< descricao.length;i++){
  descricao[i].innerText = "Descrição modificada pelo JavaScript"
}

// 6. Capture, armazene e manipule todos os elementos de classe
// "botao-editar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.
const botao= document.getElementsByClassName('botao-editar')
for (let i=0;i< botao.length;i++){
  botao[i].style.color="white"
  botao[i].style.background="green"
}

//7. Capture, armazene e manipule todos os elementos de classe
//"botao-apagar". Modifique o estilo desses elementos para que fique
//semelhante a imagem.
const botaoApagar= document.getElementsByClassName("botao-apagar")
 for (let i=0;i < botaoApagar.length;i++){
    botaoApagar[i].style.color="white"
    botaoApagar[i].style.background="red"
    botaoApagar[i].innerText="Apagar";
 }

 // 8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
// Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
// Essa função deve mostrar um alerta com a mensagem "Clicou em
// Editar!".


let selecionarBotaoAdd = document.querySelectorAll(".botao-editar");
const editarCard = () => {
  alert("Clicou em Editar!");
};

for (let i = 0; i < selecionarBotaoAdd.length; i++) {
  selecionarBotaoAdd[i].setAttribute("onclick", "editarCard()");
}
// 9. Adicione o atributo 'onclick' nos elementos de classe
// “botão-apagar”. Ao clicar nesses elementos deve chamar a função
// 'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
// certeza da exclusão do card. Se o usuário confirmar a exclusão deve
// mostrar um alerta com a mensagem "Confirmado!", se não deve
// mostrar a mensagem "Cancelou!".
const apagarCard = () => {
  if (confirm("Deseja excluir este card?")) {
    alert("Confirmado");
  } else {
    alert("Cancelado");
  }
};

let selecionarBotaoApagar = document.querySelectorAll(".botao-apagar");

for (let i = 0; i < selecionarBotaoApagar.length; i++) {
  selecionarBotaoApagar[i].setAttribute("onclick", "apagarCard()");
}