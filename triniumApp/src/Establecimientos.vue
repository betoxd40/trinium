<template lang="html">
  <div id="establecimientos" class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="pt-4">Establecimientos</h1>
        <hr>
      </div>
    </div>
    <section id="estab" class="container">
      <div class="row">
        <div class="col-3">
          <div class="card">
            <img class="card-img-top img-fluid" src="./img/pica.jpg">
            <div class="card-body">
              <h3 class="card-title">IL PICACCIO</h3>
              <p class="card-text">Restaurante con gastronomía italiana mediterránea, con la mejor vista al Picacho de Galipán y al mar, disfrutando del excelente clima de montaña</p>
              <router-link to="/establecimientos/il-picaccio" class="btn btn-primary px-5">IR</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer class="pt-5"></Footer>
  </div>
</template>

<script>
  import NavBar from './components/nav-bar';
  import Footer from './components/footer';
  export default {
    name: 'app',
    data () {
      return {

      }
    },
    components: {
      NavBar,
      Footer
    }
  }
</script>

<style lang="css">
  #estab .btn-primary{
    color: black;
    background: transparent;
    border: 1px solid black;
  }
  #estab .btn-primary:hover{
    color: white;
    background: black;
    border: 1px solid black;
  }
  h1,h3{
    font-family: 'Pathway Gothic One', sans-serif;
  }
  p{
    font-size: 1rem;
  }
</style>
