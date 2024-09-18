<template>
<div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/Cadastrar">Cadastre</router-link>
    <router-link to="/About">About</router-link>
</div>
</template>

<script>
export default {
    name:"Navbar"
   
}
</script>

<style scoped>
    #nav {
        background-color: #e8cb9a;
        border-bottom: 4px solid #e8cb9a;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #nav #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #logo{
        width: 40px;
        height: 40px;
    }

    #nav a {
        font-weight: bold;
        color:#EA736C;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    #nav a:hover {
        color: white;
    }
</style>