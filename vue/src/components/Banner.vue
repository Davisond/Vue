<template>
    <div id="main-banner">
<h1 @click="togglePage">Adote um dogo</h1>
    </div>

 <div v-if="showOtherPage">
    <Cachorros />
 </div>

</template>

<script>
import Cachorros from '@/components/Cachorros.vue'
export default {
    name: "Banner",
    data() {
        return {
             showOtherPage: false
        }
    },
    components: {
    Cachorros
  },
     methods: {
   togglePage(  ) {
      this.showOtherPage = !this.showOtherPage;
    }
  }

}
</script>

<style scooped>

    #main-banner {
        background-image: url('../../public/img/dogo.jpg');
         background-position: 0 -250px;   /* desloca banner eixo y pra subir um pouco ele */
        background-size: cover; /* faz a imagem aparecer o maximo possivel na largura disponível */
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }



    #main-banner h1 {
        color: #EA736C;
        text-align: center;
        font-size: 60px;
         background-color: #e8cb9a;
        padding: 20px 40px;
        cursor: pointer;
    }
  #main-banner h1:hover{
    color: #e8cb9a;
    background-color: #EA736C;
  }


</style>