function mostraNome(){
    var span = document.getElementById("recebeNome")
    var nome = document.getElementById('nome').value
    if(nome == ''){
        alert('Por favor insira seu nome!')
    } else {
        span.innerHTML = '<p> Seja bem vindo <strong> '+ nome +'</p> </strong>'
    }
}