//função font-size
tamanho = 12;
function aumentarFonte() {
  tamanho++;
  document.body.style.fontSize = tamanho + "px"; //style que muda tamanho da fonte 
}

function diminuirFonte() {
  tamanho--;
  document.body.style.fontSize = tamanho + "px";
}

//função modo noite/dia
function modoEscuro() {
    document.body.style.backgroundColor = "#212529"; //mudando cor do background   
  }
  
  function modoClaro() {
    document.body.style.backgroundColor = "steelblue";
  }