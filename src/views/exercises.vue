<template>
<div class="container">
    <section>
        
        <b-tabs position="is-centered" class="block" v-model="activeTab">
            <b-tab-item label="3-5 Años">
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
                          Materiales a utilizar: <br/>
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
                          Materiales a utilizar: <br/>
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