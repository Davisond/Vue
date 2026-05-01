# Sistema de adoção/gerenciamento de Cachorros (Vue.js)
Projeto de estudo utilizando Vue.js, o objetivo dele foi utilizar as ferramentas do Vue.js para desenvolver um front-end moderno, interativo e dinâmico.<br>

## Tecnologias Utilizadas:

- Vue.js
- Vue Router
- JavaScript
- HTML5 + CSS3
- JSON Server (fake API)
- Axios

## Funcionalidades existentes:

- Listar cachorros cadastrados
- Cadastrar novos cachorros
- Remover cachorros -> a ideia foi simular o adotou, removeu
- Visualizar informações
- Formulário de cadastro
- Integração com API local (db.json)

## Estrutura do projeto

- components -> Componentes reutilizáveis (Navbar, Footer, Banner, etc)
- views -> Páginas (Home, Cadastrar, About)
- router -> Configuração de rotas
- assets -> Imagens e arquivos estáticos
- App.vue -> Componente principal

## Fluxo de uso

- Acessa a Home -> vê os cachorros
- Vai em "Cadastrar" -> adiciona um novo
- O sistema salva no db.json
- Lista atualiza automaticamente

## Json-Serve - Utilizado json-serve como formato de backend conforme orientação
 
- adicionado o seguinte trecho de código ao script do package.json para a execução do mesmo:
  ```Vue.js
    "back": "json-server --watch db/db.json"
  ```
- criado a pasta db com o arquivo db.json para conter os dados 
- Ao utilizar:  'npm run back'  obtem-se o endpoint: http://localhost:3000/cachorros

#   VIEWS 

## App.vue:

contém as views que se repetem, como no exemplo da Navbar, Footer e router-view onde as view  são impressas, e em scripts são importados os componentes 

# Router

## index.js: 

possui a rota referente a cada uma das views existentes, para que as mesmas possam ser acessadas,
nos componentes vai aparecer com o atributo 'to', definindo assim a rota que um determinado link vai acessar, como no exemplo:

```Vue.js
    <router-link to="/">Home</router-link> 
```

# Components

##  Navbar.vue:
contém os links para as 3 views principais utilizando o atributo 'to', trata-se da barra de navegação presente em ambas as views

##  Footer.vue: 
Assim como o Navbar, também está presente em ambas as páginas, porém com um intuito direcionado a estética 

##  Banner.vue:  
```Vue.js
<h1 @click="togglePage">Adote um dogo</h1>:

    Cabeçalho <h1> com o texto "Adote um dogo".
    //Evento @click: utilizado p/ vincular o evento de clique ao método togglePage. ao clicar no h1 'adote um dogo' o método troca de falso p/ verdadeiro (e assim por diante)

<div v-if="showOtherPage">:

    //Utilizado diretiva v-if do Vue para renderização condicional, se showOtherPage for false, o contêiner <Cachorros /> não é exibido
```
##  Cachorros.vue:
```Html
<div class="container">
  <!-- Contêiner principal para armazenar os cartões de cada cachorro -->

  <div class="card" v-for="cachorro in cachorros" :key="cachorro.id">
    <!-- Itera sobre os cachorros vindos do banco -->

    <div class="card-action">
      <button @click="adotarCachorro(cachorro.id)">
        Adotar
      </button>
    </div>
    <!-- Botão que chama o método de adoção -->
  </div>
</div>

```
##  DogForm.vue:
```Vue.js
<form id="dog-form" @submit.prevent="dogRegister">
    //Forumulário de id 'dog-form' usa o evento @submit.prevent="dogRegister p chamar o método dogRegister. Os campos de input do formulário utilizam v-model p capturar o 'nome' e 'status', a idéia de status é tipo uma 'condição atual'

dogRegister:
    //Obtém a lista de cachorros através de um GET p http://localhost:3000/cachorros.

    //Cria um próximo id com base no tamanho da lista:
        const lastId = cachorros.length ? cachorros[cachorros.length - 1].id : 0;
        const newId = lastId + 1;

    //Cria objeto data com status, nome e o próximo id sequencial:
         const data = {
                id: newId,
                dog: this.dog,
                status: this.status
                };
    //Efetua o POST para http://localhost:3000/cachorros, incrementando o novo dog
```

##  Inf.vue:
```Vue.js
//Faz uso de PROPS para setar o texto string em cada um dos parágrafos do template, segue o exemplo:
        ...
    <p>{{ mission }}</p>
        ...
        props: {
            mission: {
            type: String,
            default: 'Estamos comprometidos em encontrar o par perfeito entre cães resgatados e pessoas que desejam dar-lhes um lar para sempre. Queremos fazer parte da jornada de transformação de um cão sem lar em um membro amado da família.'
            }
        }
        ...
 ```           

