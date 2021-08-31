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
    document.body.style.backgroundColor = "white";
  }

  window.onscroll = function () {
    scroll();
}

function scroll() {
    var btn = document.getElementById("subirTopo");
    if (document.documentElement.scrollTop > 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none"
    }
}

function voltarTop(){
    document.documentElement.scrollTop = 0;
}