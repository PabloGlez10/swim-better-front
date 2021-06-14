<template>
   <div class="home">

    <Slider preTitle="Bienvenido a" 
            :isBig="true"
            title="SWIM BETTER"
            desc="Donde encontraras los mejores entrenos" />

    <Swimbetterwall />
  
    <div class="swim-better-section swim-better-services">
      <div class="overlay"></div>
      <div class="container">
        <div class="columns is-justify-content-center mb-5 pb-3">
          <div class="column is-7 heading-section has-text-centered">
            <h2 class="mb-4">Our Services</h2>
            <p>
              Tenemos ejercicios para todas las edades, ademas si te registras pòdas optar a nuestro Randomizador y nuestro Calendario.
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <div class="media is-block has-text-centered block-6 services">
              <div class="icon is-flex is-justify-content-center is-align-items-center mb-5">
                <span class="fllaticon-diet"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">Ejercicios por edades</h3>
                <p>
                  ¡Ejercicios para todas las edades!
                </p>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="media is-block has-text-centered block-6 services">
              <div class="icon is-flex is-justify-content-center is-align-items-center mb-5">
                <span class="flaticon-bicycle"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">Randomizador</h3>
                <p>
                  ¡Registrate y prueba nuestro randomizador para que solamente tengas que apuntar el entreno!
                </p>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="media is-block has-text-centered block-6 services">
              <div class="icon is-flex is-justify-content-center is-align-items-center mb-5">
                <span class="flaticon-pizza-1"></span>
                <div class="media-body">
                  <h3 class="heading">Calendario</h3>
                  <p>
                    ¡Registrate y accede a nuestro calendario mensual donde habra entrenos para cada dia!
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="swim-better-section" style="background-image: url(images/3-5-yearsphoto.jpg">
      <div class="container">
        <div class="columns is-justify-content-center mb-5 pb-3">
          <div class="column is-7 heading-section has-text-centered">
            <h2 class="mb-4">Ejercicios 3-5 años</h2>
              <p>
                Ejercicios pensados para chicos entre 3 y 5 años. Ideales para aprender a nadar.
              </p>
              <button class="button nb-primary-color" @click="exercise1">Ir alli</button>
          </div>
        </div>
      </div>
    </div>

    <div class="swim-better-section">
      <div class="container">
        <div class="columns is-justify-content-center mb-5 pb-3">
          <div class="column is-7 heading-section has-text-centered">
            <h2 class="mb-4">Ejercicios 5-10 años</h2>
              <p>
                Ejercicios pensados para chicos entre 5 a 10 años. Ideales para aprender los diferentes estilos de natación y mejorar en el nado basico.
              </p>
              <button class="button nb-primary-color" @click="exercise2">Ir alli</button>
          </div>
        </div>
      </div>
    </div>

    <div class="swim-better-section">
      <div class="container">
        <div class="columns is-justify-content-center mb-5 pb-3">
          <div class="column is-7 heading-section has-text-centered">
            <h2 class="mb-4">Ejercicios 11-16 años</h2>
              <p>
                Ejercicios pensados para chicos entre 11 y 16 años. Ideales para aquellos que no quieran dejar de nadar o que quieran iniciarse en competición.
              </p>
              <button class="button nb-primary-color" @click="exercise3">Ir alli</button>
          </div>
        </div>
      </div>
    </div>

    <div class="swim-better-section">
      <div class="container">
        <div class="columns is-justify-content-center mb-5 pb-3">
          <div class="column is-7 heading-section has-text-centered">
            <h2 class="mb-4">Ejercicios Adultos</h2>
              <p>
                Ejercicios pensados para Adultos. Ideales para aquellos que no quieran seguir nadando y mantenerse en forma.
              </p>
              <button class="button nb-primary-color" @click="exercise4">Ir alli</button>
          </div>
        </div>
      </div>
    </div>

    <div class="swim-better-section">
      <div class="container">
        <div class="columns is-justify-content-center mb-5 pb-3">
          <div class="column is-7 heading-section has-text-centered">
            <h2 class="mb-4">Ejercicios para la espalda</h2>
              <p>
                Ejercicios pensados para todas las edades. Pensados para aquellas personas con problemas de espalda.
              </p>
              <button class="button nb-primary-color" @click="exercise5">Ir alli</button>
          </div>
        </div>
      </div>
    </div>

    <div class="swim-better-section">
      <div class="container">
        <div class="columns is-justify-content-center mb-5 pb-3">
          <div class="column is-7 heading-section has-text-centered">
            <h2 class="mb-4">Ejercicios competición</h2>
              <p>
                Ejercicios pensados para todas las edades. Pensados para aquellas personas que quieren competir o han competido y quieren seguir nadando.
              </p>
              <button class="button nb-primary-color" @click="exercise6">Ir alli</button>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import Slider from "@/components/slider"
import Swimbetterwall from "@/components/swimbetterwall"
export default {
  name: 'Home',
  components: {
    Slider,
    Swimbetterwall
  }
}
</script>