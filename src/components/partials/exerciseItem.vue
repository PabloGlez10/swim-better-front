<template>
  <div class="container">
    <div class="is-flex m-6">
      <div class="is-flex is-flex-direction-column is-align-items-betwe mr-4 ml-4">
        <div class>
          <h3 class="title is-6">Ejercicios</h3>
        </div>
        <div class>
          <router-li :to="{ name: 'exercise', params: { value: value}}"></router-li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exerciseItem",
  props: {
    value: Object
  }
};
</script>

<style>

</style>