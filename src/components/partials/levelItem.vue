<template>
  <div class="column is-6 has.text-centered">
    <div class="menu-wrap">
      <a class="menu-img img mb-4" href="#" :style="`background-image: url()`"></a>
      <div class="text">
        <h3><a href="#">{{value.title}}</a></h3>
        <p>
          {{value.description}}
        </p>
        <a @click.prevent="$emit('go')" class="button is-white is-outlined" href="#">Ir a este nivel</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LevelItem",
  props: {
    value: Object
  }
};
</script>

<style>

</style>