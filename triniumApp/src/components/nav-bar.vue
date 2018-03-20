<template lang="html">
  <div id="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">INICIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">/</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">¿QUÉ ES TRINIUM?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">/</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">¿CÓMO PODEMOS AYUDARTE?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">/</a>
          </li>
          <li class="nav-item">
            <router-link to="/establecimientos" class="nav-link">ESTABLECIMIENTOS</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">/</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">/</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACTO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">/</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn btn-primary px-5" href="#">LOGIN</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="css">
  .bg-light{
    background: transparent !important;
  }
  #nav-bar a{
    font-family: 'Pathway Gothic One', sans-serif;
  }
  #nav-bar{
    font-size: 1.3rem;
  }
  .btn-primary{
    background: transparent;
    border: black 1px solid;
    font-size: 1.3rem;
  }
  .btn-primary:hover{
    background: black;
    border-color: black;
    color: white !important;
  }

</style>
