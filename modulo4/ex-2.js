var appContainer = document.querySelector('#app');
var nomeUsuario = document.createElement('input');
    nomeUsuario.setAttribute('placeholder', 'Usuário no GitHub');
    appContainer.appendChild(nomeUsuario);

var button = document.createElement('button');
var textButton = document.createTextNode('Adicionar');
    button.appendChild(textButton);
    button.onclick = function(){
        axios.get('https://api.github.com/users/'+nomeUsuario.value+'/repos')
            .then(function(response){
                var lista = document.createElement('ul');
                for(data of response.data){
                    var listaLi = document.createElement('li');
                    var textLi = document.createTextNode(data.name);
                        listaLi.appendChild(textLi);
                        lista.appendChild(listaLi);
                }
                appContainer.appendChild(lista);
            })
            .catch(function(error){
                console.warn(error);
            });
    }
    appContainer.appendChild(button);

