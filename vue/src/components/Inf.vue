<template>
  <div class="about-us">
    <div class="container">
      <div class="about-card">
        <h2 class="section-title">
          <img src="../../public/img/salsicha.jpg" alt="Sobre Nós" class="avatar">
          Sobre Nós
        </h2>
        <div class="about-us-content">
          <div class="about-us-topic">
            <h3>Missão</h3>
            <p>{{ mission }}</p>
          </div>
          <div class="about-us-topic">
            <h3>Visão</h3>
            <p>{{ vision }}</p>
          </div>
          <div class="about-us-topic">
            <h3>Valores</h3>
            <p>{{ values }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    mission: {
      type: String,
      default: 'Estamos comprometidos em encontrar o par perfeito entre cães resgatados e pessoas que desejam dar-lhes um lar para sempre. Queremos fazer parte da jornada de transformação de um cão sem lar em um membro amado da família.'
    },
    vision: {
      type: String,
      default: 'Sonhamos com um futuro em que não haja mais cães abandonados ou negligenciados, e onde a adoção seja a primeira escolha para quem procura um novo companheiro canino. '
    },
    values: {
      type: String,
      default: 'Amor pelos dogs, compromisso com uma adoção responsável levando em consideração suas necessidades e o estilo de vida da família adotiva'
    }
  }
};
</script>

<style scoped>
.about-us {
  padding: 10px;
}

.about-card {
  max-width: 700px; /* Defina a largura máxima do card */
  margin: 0 auto; /* Centraliza o card na página */
  padding: 20px;
  border-radius: 10px;
  
}

.section-title {
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  display: flex;
  align-items: center; /* Centraliza a imagem verticalmente */
}

.avatar {
  width: 130px; /* Tamanho da imagem */
  height: 105px; /* Tamanho da imagem */
  border-radius: 50%; /* Bordas redondas */
  margin-right: 20px; /* Espaçamento entre a imagem e o texto */
}

.about-us-content {
  padding-right: 20px; /* Espaçamento à direita para separar a imagem */
}

.about-us-topic {
  margin-bottom: 15px;
}

.about-us-topic h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.about-us-topic p {
  font-size: 16px;
  color: #666;
}
</style>
