
/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por seletor: querySelector() - O mais usado pra acessar o DOM 
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '110%'
email.style.width = '110%'
assunto.style.width = '110%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'black'
    }
    else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'white'
        nomeOk = true
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'black'
    }
    else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'white'
        emailOk = true
    }
    
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'O texto pode conter no máximo 100 caracteres.'
        txtAssunto.style.color = 'black'
        txtAssunto.style.display = 'block'
    }
    else
        txtAssunto.style.display = 'none'
        assuntoOk = true
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert ('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha o formulário corretamente')
    }
}

function zoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

