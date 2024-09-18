<template>
  <div>
    <div id="titulo">
      <h1> Dogos cadastrados </h1>
    </div>     
    <div class="container">
      <div class="card" v-for="cachorro in cachorros" :key="cachorro.id">
        <!-- NAO ESQUECE: Aqui vai a imagem do cachorro assim que eu descobrir como fazer isso-->
        <div class="card-content">
          <p>{{ cachorro.dog }}</p>
          <p>{{ cachorro.status }}</p>
        </div>
        <div class="card-action">
          <button @click="adotarCachorro(cachorro.id)">Adotar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>export default {
  name: "Cachorros", 
  data() {
    return {
      cachorros: []
    }  
  },
  methods: {
    async getCadastrados() {
      const response = await fetch("http://localhost:3000/cachorros");
      const data = await response.json();
      this.cachorros = data;
    },


    async adotarCachorro(id) {
      await fetch(`http://localhost:3000/cachorros/${id}`, {
        method: "DELETE"
      });
      this.cachorros = this.cachorros.filter(cachorro => cachorro.id !== id);
    }
  },
  mounted() {
    this.getCadastrados();
  }
}

</script>


<style Scooped>

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Ou qualquer outra opção de alinhamento */
}


.container-cachorros {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
      width: calc(25% - 20px); /* 25% da largura da tela, menos a margem entre os cartões */
  margin-bottom: 20px; /* Adicione margem inferior para espaçamento entre os cartões */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 200px;

  margin-bottom: 20px; /* Adicione margem inferior para espaçamento entre os cartões */
}

.card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.card button {
  display: block;
  width: 100%;
   color: #EA736C;
    background-color: #e8cb9a;
  border: none;
  border-radius: 5px;
  padding: 8px 0;
  cursor: pointer;
}

.card button:hover {
    background-color: #EA736C;
    color: #e8cb9a;
}

 #titulo{
  color: #EA736C;
   background-size: cover;
   background-color: #e8cb9a;
        text-align: center;
        width: 400px;
        margin-left: 500px;
        border-bottom: 15px;
    
 }


</style>
 