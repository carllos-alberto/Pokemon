var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    //Bloqueia o refresh da página
    e.preventDefault()  

    //URL da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    // valor do input Name
    let nome = document.getElementById("name")

    urlForm = urlForm + this.name.value

    // trasnforma os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase()
    //ID ImgPokemon
    let imagem = document.getElementById('imgPokemon')
    //ID Content
    let resposta = document.getElementById('content')

    //Resposta em HTML
    fetch(urlForm)    
        .then(resposta => resposta.json())
        .then(function(data){
           
            console.log(data)
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

           imagem.innerHTML = "<img src='" + data.sprites.front_default +"'> <img src='" + data.sprites.back_default + "'>" 

        })

        .catch(function(err){
           if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
            html = 'Pokemon não encontrado! 🥴'
           } else {
            html = 'Erro:' + err
           }  
           resposta.innerHTML = html          
        })
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}


/* 
* addEventListener -> fica escultando e analisando a página, quando entrar no submit.
* preventDefault -> impede que a página atualize.
* Responsável por realizar a pesquisa e retornar um valor
*/