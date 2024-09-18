<template>
  <div class="container">
    <div class="card">
      <form id="dog-form" @submit.prevent="dogRegister">
        <div class="input-container">
          <label for="dog">Nome do doguinho:</label>
          <input type="text" id="dog" v-model="dog" placeholder="Digite o nome do doguinho..">
        </div> 

        <div class="input-container">
          <label for="status">Qual o estado do doguinho?</label>
          <input type="text" id="status" v-model="status" placeholder="Digite a condição atual do dogo..">
        </div>

        <div class="input-container">
          <input class="submit-btn" type="submit" value="Cadastre">
        </div>
      </form>
    </div>
  </div>
</template>

<script>


export default {
  name: "dogForm",
  data() {
    return {
      status: null,
      dog: null,
      id:  null
    };
  },
  methods: {
 
    async dogRegister() {

        //fazer id sequencial pra nao apanhar na hora de apagar/adote
      const response = await fetch("http://localhost:3000/cachorros");
      const cachorros = await response.json();
      const lastId = cachorros.length ? cachorros[cachorros.length - 1].id : 0;
      const newId = lastId + 1;

      const data = {
        id: newId,
      dog: this.dog,
      status: this.status
      };
      
        await fetch("http://localhost:3000/cachorros", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        this.dog = ""; // Limpar o campo nome do doguinho
        this.status = ""; // Limpar o campo status do doguinho
      
    }
    }
};
  
 

   

</script>
<style scoped>
.card {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
  height: 200px;
  margin-top: 20px;
  margin-block: 140px;
}

.input-container {
  margin-bottom: 15px;
  margin-top: 15px;
}
.container {
  display: flex;
  justify-content: center;
}

label {
  font-weight: bold;
}

input[type="text"] {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-btn {
  width: 100%;
  background-color: #e8cb9a;
  color: #EA736C;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #EA736C;
  color: #e8cb9a;
}

</style>
