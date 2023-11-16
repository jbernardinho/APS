/*função que define se a busca será feita atráves da função getAll ou getEspecific()*/

function main(){
    const tbody = document.getElementById('tabela_corpo')
    const corptoTabela =  "<tbody>"

    const inputTabela = document.getElementById('form_busca_input').value;
    if (inputTabela == ""){
        getAll();
    }else if (inputTabela != ""){
        getEspecific(inputTabela);
    }
    tbody.innerHTML = corptoTabela;
}

/*função chama o metodo fetch(), que faz uma conexão com a api, atráves do metodo "get", 
ele pega os dados enviados pela api, no looping "Data.forEach(), ele pega cada struct "livro" e mostra na tela atráves de "insertAdjacentHTML"
*/
function getAll() {
    fetch("18.224.184.9:5000/Artigos", {
    method: 'GET', headers: {
        'Accept': 'application/json',
        },
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro HTTP! Status: ${res.status}');
            }
            return res.json();
        })
        .then(data => {
            data.forEach(Artigos => {
                const tbody = document.getElementById('tabela_corpo')
                var novaLinha = document.createElement('tr')

                tbody.insertAdjacentElement('beforeend', novaLinha)

                const marcacao_id = `<td class="tabela_texto">${Artigos.id}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_id);

                const marcacao_t = `<td class="tabela_texto">${Artigos.titulo}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_t);
                
                const marcacao_a = `<td class="tabela_texto">${Artigos.autor}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_a);
                
            })
        })
        .catch(erro => console.log(erro)) 
    }

/*função chama o metodo fetch(), que faz uma conexão com a api, atráves do metodo "get", 
ele pega os dados especificos enviados pela api, atravez do dado escrito pelo usuario, ele pega cada struct "livro"
 que contenha o dado e mostra na tela atráves de "insertAdjacentHTML"
*/
function getEspecific(id) {
    
    fetch("18.224.184.9:5000/Artigos/" + id, {
    method: 'GET', headers: {
        'Accept': 'application/json',
        },
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro HTTP! Status: ${res.status}');
            }
            return res.json();
            })
        .then(data => {
            data.forEach(Artigos => {
                const tbody = document.getElementById('tabela_corpo')
                var novaLinha = document.createElement('tr')
            
                tbody.insertAdjacentElement('beforeend', novaLinha)
            
                const marcacao_id = `<td class="tabela_texto">${Artigos.id}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_id);

                const marcacao_t = `<td class="tabela_texto">${Artigos.titulo}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_t);
                
                const marcacao_a = `<td class="tabela_texto">${Artigos.autor}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_a);
                        
                })
            })
        .catch(erro => console.log(erro))
    }
    

/*função clone da função main() */
function mainAdm(){
    const tbody = document.getElementById('tabela_corpo')
    const corptoTabela =  "<tbody>"

    const inputTabela = document.getElementById('form_busca_input--adm').value;
    if (inputTabela == ""){
        getAllAdm();
    }else if (inputTabela != ""){
        getEspecificAdm(inputTabela);
    }
    
    tbody.innerHTML = corptoTabela;
}

    //código da página Adm


/*função clone da função getAll, já citada acima, todavia está tem uma leve diferença, para cada struct Livro, 
é criado um botão "X" para delete e um botãO "Edit" para editar a struct.
*/
function getAllAdm() {
    fetch("18.224.184.9:5000/Artigos", {
    method: 'GET', headers: {
        'Accept': 'application/json',
        },
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro HTTP! Status: ${res.status}');
            }
            return res.json();
        })
        .then(data => {
            data.forEach(Artigos => { 
                const tbody = document.getElementById('tabela_corpo')
                var novaLinha = document.createElement('tr')

                tbody.insertAdjacentElement('beforeend', novaLinha)

                const btn_Delete = `<td class="tabela_texto"><button class="btn_Delete"onclick="del($'{Artigos.id})">X</button></td>`;
                novaLinha.insertAdjacentHTML('beforeend', btn_Delete);

                const btn_Edit = `<td class="tabela_texto"><button class="btn_Edit" id="btn_edit--$'{Artigos.id}" onclick="edit($'{Artigos.id)">Edit</button></td> `;
                novaLinha.insertAdjacentHTML('beforeend', btn_Edit);
                
                const marcacao_id = `<td id="id--$'{Artigos.id}" class="tabela_texto">$"{Artigos.id}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_id);

                const marcacao_t = `<td id="titulo--$'{Artigos.id}" class="tabela_texto">$"{Artigos.titulo}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_t);
                
                const marcacao_a = `<td id="autor--$'{Artigos.id}" class="tabela_texto">$"{Artigos.autor}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_a);
                
            })
        })
        .catch(erro => console.log(erro))

    }

/*função clone do getEspecific, todavia está tem uma leve diferença, para cada struct Livro, 
é criado um botão "X" para delete e um botãO "Edit" para editar a struct.
*/
function getEspecificAdm(id) {

    fetch("18.224.184.9:5000/Artigos/" + id, {
    method: 'GET', headers: {
        'Accept': 'application/json',
        },
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro HTTP! Status: ${res.status}');
            }
            return res.json();
            })
        .then(data => {
            data.forEach(Artigos => {
                const tbody = document.getElementById('tabela_corpo')
                var novaLinha = document.createElement('tr')

                tbody.insertAdjacentElement('beforeend', novaLinha)

                const btn_Delete = `<td class="tabela_texto"><button class="btn_tabela"onclick="del($'{Artigos.id})">X</button></td>`;
                novaLinha.insertAdjacentHTML('beforeend', btn_Delete);

                const btn_Edit = `<td class="tabela_texto"><button class="btn_Edit" id="btn_edit--$'{Artigos.id}" onclick="edit($'{Artigos.id)">Edit</button></td> `;
                novaLinha.insertAdjacentHTML('beforeend', btn_Edit);
                
                const marcacao_id = `<td id="id--$'{Artigos.id}" class="tabela_texto">$"{Artigos.id}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_id);

                const marcacao_t = `<td id="titulo--$'{Artigos.id}" class="tabela_texto">$"{Artigos.titulo}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_t);
                
                const marcacao_a = `<td id="autor--$'{Artigos.id}" class="tabela_texto">$"{Artigos.autor}</td>`;
                novaLinha.insertAdjacentHTML('beforeend', marcacao_a);
        
                })
            })
        .catch(erro => console.log(erro))
    }

/*está função faz a ligação com a api atravez do "fetch()", todavia é passado um id, e é setado o metodo "delete" para deletar a struct que possui o id*/
function del(id) {

    fetch("18.224.184.9:5000/Artigos/" + id, {
    method: 'DELETE', headers: {
        'Accept': 'application/json',
        },
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Erro HTTP! Status: ${res.status}');
        }
        return res.json();
        })
        .catch(erro => console.log(erro))


    const tbody = document.getElementById('tabela_corpo')
    const corptoTabela =  "<tbody>"
                
    tbody.innerHTML = corptoTabela;
}

/*está função é acionada atraves de um botão em uma linha da tabela, ao o botão ser acionado é passado o "id" do botão, 
quando isso acontece os dados dessa linha são passados para o formulario para que possam ser editados*/
function edit(id){
    const btn_salvar = document.getElementById('btn_salvar');
    btn_salvar.onclick = salvar_editar();

    const input_botao_edit = document.getElementById('btn_edit--' + id);
    const input_id = document.getElementById('formSetId');
    const input_titulo = document.getElementById('formSetTitulo');
    const input_autor = document.getElementById('formSetAutor');

    const dado_id = input_botao_edit.siblings('id--' + id).value
    const dado_titulo = input_botao_edit.siblings('titulo--' + id).value
    const dado_autor = input_botao_edit.siblings('autor--' + id).value


    input_id.value = dado_id;
    input_titulo.value = dado_titulo;
    input_autor.value = dado_autor;

    mostrarForm();

    /*a função salvar_editar é parecido com a função "novo()" a função envia os dados para a api com o metodo "POST" =, os dados são obtidos atráves do document.getElementById() e 
    atribuidos a uma variavel e posteriormente atribuidos num array "dados_novo_livro", posteriormente depois os dados doa array são passados para uma struct "novo_livro"
    após isso ocorre uma confirmação pelo "confirm()"*/
    function salvar_editar(){

        dados_editar_Artigo = [input_id.value, input_titulo.value, input_autor.value]
       
        const editar_Artigo = {
            'id': dados_editar_Artigo[0],
            'titulo':  dados_editar_Artigo[1],
            'autor':  dados_editar_Artigo[2],
        }

        if (confirm(`Você está editando um Artigo ${novo_Artigo.titulo}, do autor ${novo_Artigo.autor}`) == true){
            fetch("18.224.184.9:5000/Artigos", {
            method: 'PUT', headers: {
            'Accept': 'application/json',
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erro HTTP! Status: ${res.status}');
                }
                return res.json();
            })
            .then(data => {
                return editar_Artigo;
               
        })
            .catch(erro => console.log(erro))
        }

    }
    salvar_editar();
}

/*a função envia os dados para a api com o metodo "POST" =, os dados são obtidos atráves do document.getElementById() e atribuidos 
a uma variavel e posteriormente atribuidos num array "dados_novo_livro", posteriormente depois os dados doa array são passados para uma struct "novo_livro"
após isso ocorre uma confirmação pelo "confirm()"*/
function novo(){
    const input_titulo = document.getElementById('formSetTitulo');
    const input_autor = document.getElementById('formSetAutor');

    dados_novo_Artigo = ["", input_titulo.value, input_autor.value]
    
    const novo_Artigo = {
        'id': dados_novo_Artigo[0],
        'titulo':  dados_novo_Artigo[1],
        'autor':  dados_novo_Artigo[2],
      }
    
    if (confirm(`Você está cadastrando um Artigo ${novo_Artigo.titulo}, do autor ${novo_Artigo.autor}`) == true){
        fetch("18.224.184.9:5000/Artigos", {
        method: 'POST', headers: {
            'Accept': 'application/json',
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erro HTTP! Status: ${res.status}');
                }
                return res.json();
            })
            .then(data => {
                tamanho = data.length();
                novo_Artigo.id = tamanho++
                return novo_Artigo;
                
        })
            .catch(erro => console.log(erro))
    }
}

/*A função mostra o formulario que estava oculto*/
function mostrarForm(){
    const formulario = document.getElementById('formcadastro_edicao');
    formulario.id = "";
}