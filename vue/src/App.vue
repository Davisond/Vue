<template>
  <Navbar/> 
  <router-view/>
  <Footer />
</template>


<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


export default {
  components: {
    Navbar,
    Footer
  }
  
}
</script>

<style scoped>

  * {
    font-family:'Courier New', Courier, monospace;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1{
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: black;
  }


</style>