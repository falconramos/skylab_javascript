var appContainer = document.querySelector('#app');
var nomeUsuario = document.createElement('input');
    nomeUsuario.setAttribute('placeholder', 'Usuário no GitHub');
    appContainer.appendChild(nomeUsuario);

var button = document.createElement('button');
var textButton = document.createTextNode('Adicionar');
var lista = document.createElement('ul');
    button.appendChild(textButton);
    button.onclick = function(){
        lista.innerHTML='';
        var listaLiWait = document.createElement('li');
        var textLiWait = document.createTextNode('Carregando ...');
            listaLiWait.appendChild(textLiWait);
            lista.appendChild(listaLiWait);
            appContainer.appendChild(lista);
            
        axios.get('https://api.github.com/users/'+nomeUsuario.value+'/repos')
            .then(function(response){
                lista.innerHTML='';
                for(data of response.data){
                    var listaLi = document.createElement('li');
                    var textLi = document.createTextNode(data.name);
                        listaLi.appendChild(textLi);
                        lista.appendChild(listaLi);
                }
                appContainer.appendChild(lista);
            })
            .catch(function(error){
                lista.innerHTML='';
                console.warn(error);
                var listaLi = document.createElement('li');
                var textLi = document.createTextNode('Não existe esse usuário no GitHub!');
                    listaLi.appendChild(textLi);
                    lista.appendChild(listaLi);
                    appContainer.appendChild(lista);
            });
    }
    appContainer.appendChild(button);

