<template>
  <section class="swim-better-section">
    <div class="container">
      <div class=" is-justify-content-center mb-5 pb-3">
        <div class=" is-7 heading-section has-text-centered">
          <h2 class="mb-4 white">¡Bienvenido a Swim Better!</h2>
          <p class="white">
            Selecciona tu edad y dentro encontraras los ejercicios para dichas edades los cuales estan catalogados por un sistema de colores el cual determinara su dificultad.
            El color blanco es el nivel mas bajo y rojo el mas alto. Para competicion habra ejercicios sin explicacion.
          </p>
        </div>
      </div>
    </div>
    <div class="container-wrap">
      <div class="columns is-gapless is-flex is-multiline">
        <levelItem 
          v-for="item in featuredLevels"
          :value="item"
          :key="item._id"
          /> 
      </div>
    </div>
  </section>
</template>

<script>
import levelItem from "@/components/partials/levelItem"

export default {
  name: "swimbetterwall",
  components: {
    levelItem,
  },
  data() {
    return {
      levels: [],
    }
  },
  computed: {
    featuredLevels() {
      return this.levels.filter((item) => item.featured);
    }
  },
}
</script>

<style>

</style>