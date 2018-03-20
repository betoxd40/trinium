<template lang="html">
<div class="container pt-5 mt-5">
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="¿Que medios de pago aceptan?" name="1">
      <p>
        En Trinium aceptamos transferencias bancarias  y pagos por tarjetas de credito, nuestras cuentas son:</br>
        A nombre de Trinium Enterprise,C.A</br>
        RIF: J-24128812-1</br>
        Correo:administracion@trinium.com</br>
        Banco Mercantil 0105-3556-1245-6543-7896</br>
        Bancaribe 0114-6578-8523-3257-1241</br>
        Banco Caroni 0128-0023-5643-7683-3939</br>
        BBVA Provincial 0108-0125-4365-4322-6893</br>
        Banco de Venezuela 0102-5454-1235-6579-3292</br>
        BOD: 0116-0453-3135-6544-2311</br>
        Banesco: 0134-2823-2927-5425-2493</br>
      </p>
    </el-collapse-item>
    <el-collapse-item title="¿Donde recibo mi factura?" name="2">
      <p>Tras realizar el pago se enviara la factura con los datos de la orden a tu correo electronico para que sea escaneada en el comercio.</p>
    </el-collapse-item>
    <el-collapse-item title="¿Trinium es gratis?" name="3">
      <p>
        Si! Para las personas naturales es gratis.</br>
        A los comercios se les cobra una tarifa por el servicio que ofrecemos.Si quieres saber cuales son las tarifas escribenos a atencioncliente@trinium.com
      </p>
    </el-collapse-item>
  </el-collapse>
  <Footer class="pt-5 mt-5"></Footer>
</div>
</template>

<script>
  import Footer from './components/footer';
    export default {
      data(){
        return{

        }
      },
      components: {
        Footer
      }
    }
</script>

<style lang="css">
  @import url("//unpkg.com/element-ui@2.1.0/lib/theme-chalk/index.css");
</style>
