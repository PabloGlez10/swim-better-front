<template>
  <section :class="{'home-slider' : isBig }" class="slider">
    <div class="style-item" style="background-image: url();">
      <div class="overlay"></div>
      <div class="container">
        <div class="columns slider-text is-justify-content-center is-align-items-center" data-scrollax-parent="true">
          <div class="column has-text-centered">
            <span class="subheading">{{preTitle}}</span>
            <h1>{{title}}</h1>
            <p class="mb-4 mb-md-5">
              {{desc}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Slider",
    props:{
      preTitle: {
        type: String,
      },
      title: {
        type: String,
      },
      desc: {
        type: String,
      },
      btnInfo: {
        type: Object,
        default: null
      },
      isBig:{
        type: Boolean,
        default: true
      }
    }
}
</script>

<style>

</style>