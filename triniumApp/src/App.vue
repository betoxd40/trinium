<template lang="html">
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand pl-5" href="/"><img src="./img/logotrinium.png" alt="" width="150px" height="50px"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <router-link to="/" class="nav-link">INICIO</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">/</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#content-1">¿QUÉ ES TRINIUM?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">/</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#como-podemos-ayudarte">¿CÓMO PODEMOS AYUDARTE?</a>
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
            <a class="nav-link" href="/faq">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">/</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contact">CONTACTO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">/</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn btn-primary px-5" @click="dialogVisible = true" href="#">LOGIN</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view :key="$route.path"></router-view>
    <el-dialog
      title="Login | Register"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">

      <el-tabs v-model="activeName">
        <el-tab-pane label="Login" name="Login">
          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="pt-4">
            <el-form-item label="Correo">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="Clave">
              <el-input></el-input>
            </el-form-item>
            <el-button type="primary" class="ml-5">Entrar</el-button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="Register" name="Register">
          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" class="pt-4">
            <el-form-item label="Nombre">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="Apellido">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="Correo">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="Clave">
              <el-input></el-input>
            </el-form-item>
            <el-button type="primary" class="ml-5">Entrar</el-button>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    data(){
      return{
        dialogVisible: false,
        activeName: 'Login'
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style lang="css">
  @import url("//unpkg.com/element-ui@2.1.0/lib/theme-chalk/index.css");
  .bg-light{
    background: transparent !important;
  }
  #app a{
    font-family: 'Pathway Gothic One', sans-serif;
  }
  #app{
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
