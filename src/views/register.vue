<template>
<div>

<div class = "container">

  <h1 class = "title is-1 pink is-flex is-justify-content-center white">Únete a Swim Better</h1>
  <h2 class = "title is-2 pink is-flex is-justify-content-center white">Y accede a varias sorpresas</h2>

  <div class="container">
  <div class="notification justify-content is-align-items-center bg-pink">
    ¿Te gusta nadar pero estas harto de hacer siempre lo mismo? Confia en nosotros y dejate llevar. <br>
    <strong>¿Quieres mejorar un estilo?</strong> <a href="#">Selecciona tu nivel y apunta todos los ejercicios que te interesen de ese estilo.</a>. <br>
    <strong>¿Quieres hacer un entreno pero no sabes como?</strong> Accede al <a href="#">Randomizador</a> selecciona tu nivel y deja que el haga su magia. <br>
    <strong>¿Tienes hijos y quieres que aprendan a nadar?</strong> Tambien tenemos ejercicios para cada etapa de la vida no solo la adultez. <br>
    Entérate sobre más cosas de SWIM BETTER en el <a href="#">FAQ</a>.
  </div>
</div>

<h3 class="title is-3 pink is-flex is-justify-content-center white">Regístrate en SWIM BETTER</h3>

<div class="field">
  <label class="label white">Nombre</label>
  <div class="control">
    <input class="input" type="text" placeholder="Nombre">
  </div>
</div>

<div class="field">
  <label class="label white">Apellidos</label>
  <div class="control">
    <input class="input" type="text" placeholder="Apellidos">
  </div>
</div>

<div class="field">
  <label class="label white">Nombre de usuario</label>
  <div class="control has-icons-left">
    <input class="input" type="text" placeholder="Nombre de usuario" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label white">Email</label>
  <div class="control has-icons-left">
    <input class="input" type="email" placeholder="Correo electrónico" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label white">Contraseña</label>
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Contraseña">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
    <span class = "icon is-small is-right">
      <i class="far fa-eye"></i>
    </span>
  </p>
</div>

<h6 class = "subtitle is-7 white">Al menos ocho caracteres, incluyendo mayúsculas, minúsculas y números</h6>

<div class="field">
  <label class="label white">Confirmación de contraseña</label>
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Confirmación de la contraseña">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
    <span class = "icon is-small is-right">
      <i class="far fa-eye"></i>
    </span>
  </p>
</div>

<div class="field">
  <label class="label"></label>
  <div class="control">
    <textarea class="textarea">
      En cumplimiento de lo establecido en los artículos 13 y 14 del RGPD (UE) 2016/679, de 27 de abril, y en el artículo 11 de la LOPD 3/2018, de 5 de diciembre, ponemos a disposición del interesado la información adicional referente al tratamiento de sus datos de carácter personal.
      La actividad de tratamiento es REGISTRO EN PLATAFORMA WEB, cuya ubicación se encuentra en https://www.swimbetter.net/. El Responsable del tratamiento es: SWIMBETTER COMUNCIACIONES S.L, con N.I.F.: B57466229, y con domicilio en C/ Alcalá 155-3 Izda. C.P.: 28009 - Madrid. La finalidad del tratamiento es la de: Registro de alta de nuevos usuarios en la web. La tipología de los datos del interesado son los siguientes: Correo electrónico; Contraseña; Nombre; Dirección IP de conexión; . El plazo de supresión de dichos datos es de 5 años desde la finalización de la prestación de los servicios. No está prevista la realización de perfiles, decisiones automatizadas y/o lógica aplicada. En cuanto a la base jurídica para el tratamiento, es consentimiento inequívoco del interesado. En relación con los destinatarios, el Responsable podrá ceder los datos personales facilitados a destinatarios y proveedores de servicios prestados, siempre que se limite a la finalidad que la justifica, así como a las cesiones previstas en la legislación aplicable. No hay previsión de cesiones, salvo obligación legal. Por otro lado, en materia de transferencias internacionales, queda previsto que no se realiza ninguna transferencia internacional de datos de carácter personal. En cuanto a los derechos que dispone el interesado en relación con sus datos, podrá ejercer los derechos de acceso, rectificación, supresión, limitación de su tratamiento, oposición, revocación, a la portabilidad de sus datos, derecho a retirar el consentimiento prestado, ejerciendo sus derechos dirigiéndose a SWIMBETTER COMUNCIACIONES S.L como responsable: abuse@swimbetter.net o https://www.swimbetter.net/. Igualmente tiene el interesado derecho a reclamar ante la Autoridad de Control en materia de protección de datos, la Agencia Española de Protección de datos (AEPD).
      El interesado podrá acceder a esta información en materia de protección de datos actualizada en todo momento en https://www.swimbetter.net/.</textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
       <span class="white"> Al marcar acepta el tratamiento de datos anteriormente descrito.</span>
      
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
     <span class="white"> Cuando te registras aceptas las</span> <a class = "pink" href="#">Condiciones de Uso, Política de Privacidad y el Uso de Cookies</a>.
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link nb-primary-color" @click= "signUp">Crear usuario</button>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      userName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signUp(){
      try {
        const credentials = {
          firstName: "Pablo",
          lastName: "Gonzalez",
          userName: "Kbesa",
          email: "pggambero@gmail.com",
          password: "123456",
        }
        console.log(credentials)
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
        
        }
        // const requestOptions = {
        // method: 'GET',
        // headers: { 'Content-Type': 'application/json' },
        // return fetch("AQUI VA LA URL QUE QUEREMOS LLAMAR", requestOptions);
        
        // }

        return fetch("http://localhost:5005/users", requestOptions);
      } catch (error) {
        console.log(error)
        alert("El nombre de usuario y/o el email ya estan cogidos")
      }
    },
  },
};
</script>