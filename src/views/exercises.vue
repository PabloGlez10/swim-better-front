<template>
<div class="container">
    <section>
        
        <b-tabs position="is-centered" class="block" v-model="activeTab">
            <b-tab-item label="3-5 Años">
              <div class="content">
                <div class="columns">
                  <div class="column is-4">
                    <!-- imagen 1 -->
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                    <!-- imagen 2 -->
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                    <!-- imagen 3 -->
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                  </div>
                    <div class="column is-8">
                      <!-- Ejercicio 1 -->
                      <div class="white padding-exercise">
                      <h3 class="has-text-white">
                        Inicio piernas de crol en la pared
                      </h3>
                      <h5 class="subtitle has-text-white">Nivel: Blanco</h5>
                      <p>
                        Nos agarramos al bordillo con las dos manos y movemos las piernas verticalmente y alternativamente, <br/>
                        (haciendo espuma). También intentamos meter y sacar la cabeza del agua. <br/>
                        El objetivo es que seamos capaces de mover las piernas sacando los pies del agua con la cadera lo mas.<br/>
                        arriba que podamos.
                      </p>
                      
                        <p>
                          Materiales a utilizar: <br/>
                          Podemos utilizar un churro si nos cuesta levantar la cadera, pero lo ideal es acabar haciendolo sin este.
                        </p>
                      </div>

                      <!-- Ejercicio 2 -->

                      <div class="white padding-exercise">
                      <h3 class="has-text-white">
                        Respiracion lateral en pared
                      </h3>
                      <h5 class="subtitle has-text-white">Nivel: Blanco</h5>
                      <p>
                        Con las manos en la pared, procedemos a mover las piernas a crol, <br/>
                        con la cabeza dentro intentamos respirar lateralmente, moviendo la cabeza hacia un lado sin levantarla. <br/>
                        No olvidemos que las manos deben quedarse en la pared y que el cuerpo debe girarse ligeramente<br/>
                        hacia el lado al que queremos respirar
                      </p>
                      
                        <p>
                          Materiales a utilizar: <br/>
                          Podemos utilizar un churro si nos cuesta levantar la cadera, pero lo ideal es acabar haciendolo sin este.<br/>
                        </p>
                      </div>

                      <!-- Ejercicio 3 -->

                      <div class="white padding-exercise">
                      <h3 class="has-text-white">
                        Inicio brazos de crol en pared
                      </h3>
                      <h5 class="subtitle has-text-white">Nivel: Blanco</h5>
                      <p>
                        Con las manos en la pared, y sin soltarnos de ella, <br/>
                        movemos un brazo circularmente hacia abajo para despues sacar la mano del agua a la altura del gluteo. <br/>
                        Intentamos llevar la cabeza dentro, sacandola para respirar cada dos o tres brazadas.<br/>
                        Despues de varias repeticiones cambiamos de brazo.
                      </p>
                      
                        <p>
                          Materiales a utilizar: <br/>
                          Podemos utilizar un churro si nos cuesta levantar la cadera, pero lo ideal es acabar haciendolo sin este.<br/>
                        </p>
                      </div>

                    </div>
                    
                  </div>
                  </div>
            </b-tab-item>

            <b-tab-item label="6-10 Años">
              <div class="content">
                <div class="columns">
                  <div class="column is-4">
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                  </div>
                    <div class="column is-8">
                      <div>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <h5 class="subtitle">Nivel: Blanco</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                        <p></p>
                      </div>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                      </b-collapse>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                      </b-collapse>
                    </div>
                    
                  </div>
                  </div>
            </b-tab-item>

            <b-tab-item label="11-16 Años">
              <div class="content">
                <div class="columns">
                  <div class="column is-4">
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                  </div>
                    <div class="column is-8">
                      <div>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <h5 class="subtitle">Nivel: Blanco</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                        <p></p>
                      </div>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                      </b-collapse>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                      </b-collapse>
                    </div>
                    
                  </div>
                  </div>
            </b-tab-item>

            <b-tab-item label="Adultos">
              <div class="content">
                <div class="columns">
                  <div class="column is-4">
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                  </div>
                    <div class="column is-8">
                      <div>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <h5 class="subtitle">Nivel: Blanco</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                        <p></p>
                      </div>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                      </b-collapse>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                      </b-collapse>
                    </div>
                  </div>
                  </div>
            </b-tab-item>
            <b-tab-item label="Ejercicios de espalda">
              <div class="content">
                <div class="columns">
                  <div class="column is-4">
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                  </div>
                    <div class="column is-8">
                      <div>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <h5 class="subtitle">Nivel: Blanco</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                        <p></p>
                      </div>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                      </b-collapse>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                      </b-collapse>
                     </div>
                    </div>
                  </div>
            </b-tab-item>
            <b-tab-item label="Competición">
              <div class="content">
                <div class="columns">
                  <div class="column is-4">
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                  </div>
                    <div class="column is-8">
                      <div>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <h5 class="subtitle">Nivel: Blanco</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                        <p></p>
                      </div>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                      </b-collapse>
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                        </b-collapse>
                      </div>
                    </div>
                  </div>
            </b-tab-item>
        </b-tabs>
    </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: 0,
                showBooks: false
            }
        }
    }
</script>