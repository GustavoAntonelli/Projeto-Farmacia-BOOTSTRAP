//função font-size


//Validaçoes: linha 26 à 164

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

//AREA DE VALIDAÇAO

function valida_nome(x) {

    var nome = x.value

    if (isNaN(nome)) {
        x.style.border = "2px solid #28A745"
        return true;
    }

    else {
        x.style.border = "2px solid #DC3545"
        return false;
    }

}

function valida_cpf(x) {
    var cpf_valor = x.value;

    if (cpf_valor.length == 14) {
        x.style.border = "2px solid #28A745"
        return true;
    }

    else {
        x.style.border = "2px solid #DC3545"
        return false;
    }
}

function valida_idade(x) {
    var idade = calculaIdade(x.value);
    if (idade > 130 || idade == " " || idade <= 0) {
        x.style.border = "2px solid #DC3545"
        return false;
    } else {
        x.style.border = "2px solid #28A745"
        return true;
    }
}

function valida_email(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
            field.style.border = "2px solid green"
        return true;
    }
    else {
        field.style.border = "2px solid #DC3545"
        return false;
    }
}

function valida_sexo(x) {
    if(x.value == "") {
        x.style.border = "2px solid #DC3545"
        return false;
    }
    else {
        x.style.border = "2px solid #28A745"
        return true;
    }
}


function valida_cidade(x){
    var cidade = x.value

    if(cidade == '' || !isNaN(cidade)){
        x.style.border= "2px solid #DC3545"
        return false
    }

    else{
        x.style.border= "2px solid #28A745"
        return true
    }
}

function valida_estado(x){
    var estado = x.value

    if(estado == '' || !isNaN(estado)){
        x.style.border= "2px solid #DC3545"
        return false
    }

    else{
        x.style.border= "2px solid #28A745"
        return true
    }
}

function valida_cep(x){
    var cep = x.value

    if(cep.length == 9){
        x.style.border= '2px solid #28A745'
        return true
    }

    else{
        x.style.border= "2px solid #DC3545"
        return false
    }
}

function valida_telefone(x){
    var telefone = x.value;

    if(telefone.length == 15 || telefone.length == 14){
        x.style.border= '2px solid #28A745'
        return true
    }

    else{
        x.style.border= '2px solid #DC3545'
        return false
    }
}

function valida_termo(){

    if(document.getElementById("checa").checked){
        $("#texto_checa").css({color: "#28A745"})
        return true
    }

    else{
        $("#texto_checa").css({color: "#DC3545"})
        return false
    }

}



//AREA DE MASCARA

function fMasc(objeto, mascara) {
    obj = objeto;
    masc = mascara;
    setTimeout("fMascEx()", 1);
}

function fMascEx() {
    obj.value = masc(obj.value);
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf;
}

function mTELE(tele) {
    tele = tele.replace(/\D/g, "")
    tele = tele.replace(/(\d{2})(\d)/, "($1) $2")
    tele = tele.replace(/(\d{4})(\d)/, "$1-$2")
    tele = tele.replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    tele = tele.replace(/(-\d{4})\d+?$/, "$1")

    return tele;
}

function mCEP(cep) {
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/(\d{5})(\d{3})$/, "$1-$2")
    return cep;
}


//AREA DE CALCULO


function calculaIdade(dataNasc) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('-');
    var anoNasc = anoNascParts[0];
    var mesNasc = anoNascParts[1];
    var diaNasc = anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1;
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
    if (mesAtual < mesNasc) {
        idade--;
    } else {
        //Se estiver no mes do nascimento, verificar o dia
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--;
            }
        }
    }
    return idade;
}


//AREA DE ENVIO DE DADOS

function enviar_dados() {
    var nome_input = document.getElementById("nome"); //está recebendo dados do input
    var cpf_input = document.getElementById("cpf");
    var email_input = document.getElementById("email");
    var data_nascimento_input = document.getElementById("data_nascimento");
    var sexo_input = document.getElementById("sexo");
    var cep_input = document.getElementById("cep")
    var cidade_input = document.getElementById("cidade")
    var estado_input = document.getElementById("estado")
    var telefone_input = document.getElementById("telefone")
    var termo_input = document.getElementById("checa")
    var formValido = true;

    //validando todos os dados do input segundo as funções valida
    
    if(!valida_nome(nome_input)) {
        formValido = false;
    }
      
    if(!valida_cpf(cpf_input)) {
        formValido = false;
    }

    if(!valida_idade(data_nascimento_input)) {
        formValido = false;
    }    

    
    if(!valida_email(email_input)) {
        formValido = false;
    }   

    if(!valida_sexo(sexo_input)) {
        formValido = false;
    }

    if(!valida_sexo(cep_input)) {
        formValido = false;
    }

    if(!valida_sexo(cidade_input)) {
        formValido = false;
    }

    if(!valida_sexo(estado_input)) {
        formValido = false;
    }

    if(!valida_telefone(telefone_input)) {
        formValido = false;
    }


    if(!valida_termo(termo_input)) {
        formValido = false;
    }

    //se qualquer erro retorna falso e não envia o form

    if(!formValido) {
        alert("Dados Inválidos! Por favor, verifique os campos em vermelho e tente novamente.") 
        return formValido;
    }
    else {
        window.open("print.html")
        return true;
    }    
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