# Davison:
    Bom dia, tudo bem? tentei deixar tudo o mais organizado e 'entendível' possível (será que essa palavra existe?), possívelmente vai ter comentários perdidos pelo código (ignora eles), qualquer dúvida tô a disposição!
        

#   Json-Serve - Utilizado json-serve como formato de backend conforme orientação
 
    1 - adicionado o seguinte trecho de código ao script do package.json para a execução do mesmo:
        
        "back": "json-server --watch db/db.json"
    
    2 - criado a pasta db com o arquivo db.json para conter os dados 
    
    3 - Ao utilizar:  'npm run back'  obtem-se o endpoint: http://localhost:3000/cachorros

#   VIEWS 

##      App.vue:
            contém as views que se repetem, como no exemplo: <Navbar>, <Footer> e <router-view> onde as view  são impressas, e em scripts são importados os componentes 

#   Router

##      index.js: 
            possui a rota referente a cada uma das views existentes, para que as mesmas possam ser acessadas,
            nos componentes vai aparecer com o atributo 'to', definindo assim a rota que um determinado link vai acessar, como no exemplo ao lado: <router-link to="/">Home</router-link> 

#   Components

##      Navbar.vue:
        contém os links para as 3 views principais utilizando o atributo 'to', trata-se da barra de navegação presente em ambas as views

##      Footer.vue: 
            Assim como o Navbar, também está presente em ambas as páginas, porém com um intuito direcionado a estética 

##      Banner.vue:  
            <h1 @click="togglePage">Adote um dogo</h1>:

                Cabeçalho <h1> com o texto "Adote um dogo".
                Evento @click: utilizado p/ vincular o evento de clique ao método togglePage. ao clicar no h1 'adote um dogo' o método troca de falso p/ verdadeiro (e assim por diante)

            <div v-if="showOtherPage">:

                Utilizado diretiva v-if do Vue para renderização condicional, se showOtherPage for false, o contêiner <Cachorros /> não é exibido

##      Cachorros.vue:
            <div class="container">:
                contêiner principal p/ armazenar os cartões de cada cachorro.

            <div class="card" v-for="cachorro in cachorros" :key="cachorro.id">:
                v-for: Diretiva Vue usada aqui p iterar um cachorro diferente do banco a cada <div class="card">

            <div class="card-action">: 
            <button @click="adotarCachorro(cachorro.id)">Adotar</button>
            </div>
                botão "Adotar" com evento de click p chamar o método adotarCachorro

            getCadastrados:
                Método que busca os cachorros cadastrados no 'servidor', efetua requisição GET no endpoint http://localhost:3000/cachorros, converte em json e atribui à cachorros

            adotarCachorro:
                Método que simula uma adoção, o que ele realmente faz é uma requisição `DELETE` em http://localhost:3000/cachorros/${id}, removendo o cachorro pelo id (Já que poderiam ter nomes iguais)

##      DogForm.vue:
                <form id="dog-form" @submit.prevent="dogRegister">
                    Forumulário de id 'dog-form' usa o evento @submit.prevent="dogRegister p chamar o método dogRegister. Os campos de input do formulário utilizam v-model p capturar o 'nome' e 'status', a idéia de status é tipo uma 'condição atual'

                dogRegister:
                    Obtém a lista de cachorros através de um GET p http://localhost:3000/cachorros.

                    Cria um próximo id com base no tamanho da lista:
                        const lastId = cachorros.length ? cachorros[cachorros.length - 1].id : 0;
                        const newId = lastId + 1;

                    Cria objeto data com status, nome e o próximo id sequencial:
                         const data = {
                                id: newId,
                                dog: this.dog,
                                status: this.status
                                };
                    Efetua o POST para http://localhost:3000/cachorros, incrementando o novo dog

##      Inf.vue:
                Faz uso de PROPS para setar o texto string em cada um dos parágrafos do template, segue o exemplo:
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











# projfinalvue

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




 -->
