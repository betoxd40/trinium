<template lang="html">
<div class="container-fluid">
  <div class="row pt-5">
    <div class="col-8">
      <div class="row">
        <div class="col-12">
          <h1>Pago seguro</h1>
          <p>Su ticket será validado únicamente para la función seleccionada. Por favor seleccione su forma de pago y continue
          con las intrucciones señaladas.</p>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <el-form class="form-style pl-5">
            <div class="row">
              <div class="col-12">
                <el-form-item label="Forma de pago">
                  <el-select v-model="tipoPago"  placeholder="Forma de pago">
                    <el-option label="Tarjeta de Credito" value="credito"></el-option>
                    <el-option label="Transferencia Bancaria " value="banco"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <transition name="fade">
              <div v-if="showCredito">
                <div class="row">
                  <div class="col-12">
                    <el-form-item label="Tipo tarjeta de crédito">
                      <el-radio-group>
                        <el-radio label="Visa"></el-radio>
                        <el-radio label="MasterCard"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-3">
                        <el-form-item label="Fecha de vencimiento">
                        </el-form-item>
                      </div>
                      <div class="col-2">
                        <el-select placeholder="Mes">
                          <el-option label="1"></el-option><el-option label="2"></el-option><el-option label="3"></el-option><el-option label="4"></el-option><el-option label="5"></el-option><el-option label="6"></el-option><el-option label="7"></el-option><el-option label="8"></el-option><el-option label="9"></el-option><el-option label="10"></el-option><el-option label="11"></el-option><el-option label="12"></el-option>
                        </el-select>
                      </div>
                      <div class="col-2">
                        <el-select placeholder="Dia">
                          <el-option label="2018"></el-option><el-option label="2019"></el-option><el-option label="2020"></el-option><el-option label="2021"></el-option><el-option label="2022"></el-option><el-option label="2023"></el-option><el-option label="2024"></el-option><el-option label="2025"></el-option><el-option label="2026"></el-option>
                        </el-select>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-3">
                        <el-form-item label="Número de tarjeta">
                        </el-form-item>
                      </div>
                      <div class="col-9">
                        <el-input></el-input>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-3">
                        <el-form-item label="Código de seguridad">
                        </el-form-item>
                      </div>
                      <div class="col-1">
                        <el-input></el-input>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-3">
                        <el-form-item label="Numero impreso en la tarjeta"></el-form-item>
                      </div>
                      <div class="col-9">
                        <el-input></el-input>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-3">
                        <el-form-item label="Cédula o RIF"></el-form-item>
                      </div>
                      <div class="col-1">
                        <el-select placeholder="V">
                          <el-option label="V"></el-option><el-option label="J"></el-option><el-option label="E"></el-option>
                        </el-select>
                      </div>
                      <div class="col-8">
                        <el-input></el-input>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div v-else-if="showBanco">
                <p>
                  En Trinium aceptamos transferencias bancarias  y pagos por tarjetas de credito, nuestras cuentas son:
                  A nombre de Trinium Enterprise,C.A</br>
                  RIF: J-24128812-1</br>
                  Correo:administracion@trinium.com</br>
                  Banco Mercantil 0105-3556-1245-6543-7896</br>
                  Bancaribe 0114-6578-8523-3257-1241</br>
                  Banco Caroni 0128-0023-5643-7683-3939</br>
                  BBVA Provincial 0108-0125-4365-4322-6893</br>
                  Banco de Venezuela 0102-5454-1235-6579-3292</br>
                  BOD: 0116-0453-3135-6544-2311</br>
                  Banesco: 0134-2823-2927-5425-2493
                </p>
                <div class="row mb-5 pb-5">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-1  pt-2 mr-3">
                        <h5>Referencia:</h5>
                      </div>
                      <div class="col-5">
                        <el-input></el-input>
                      </div>
                    </div>
                    <el-form>

                    </el-form>
                  </div>
                </div>

              </div>

            </transition>

          </el-form>
        </div>
      </div>

    </div>
    <div class="col-4">
      <div class="side-bar">
        <div class="row">
          <div class="col-12">
            <h2>Detalles de compra</h2>
            <hr>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12" v-for="item in items">
                <div class="row mx-3">
                  <div class="col-8">
                    {{ item.name }}
                  </div>
                  <div class="col-4 text-right">
                    BSF {{ item.price }}
                  </div>
                </div>

              </div>
            </div>
            <hr>
            <div class="row px-3">
              <div class="col-12">
                <h3>TOTAL A PAGAR: <b>{{priceTotal}}</b></h3>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-12 text-center">
                <el-button type="primary px-5" @click="pagoAceptado()">Aceptar</el-button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>
</template>

<script>
    export default {
      name: 'pago',
      data (){
        return {
          tipoPago: '',
          showBanco: false,
          showCredito: false,
          items: [],
          priceTotal : 0
        }
      },
      created(){
        this.items = this.$route.params.items;
        this.priceTotal = this.$route.params.pago;
      },
      watch: {
        tipoPago: function () {
          console.log(this.tipoPago);
          if(this.tipoPago == 'credito'){
            this.showCredito = true;
            this.showBanco = false;
          }else{
            this.showBanco= true;
            this.showCredito = false;
          }
        }
      },
      methods: {
        pagoAceptado: function () {
          const h = this.$createElement;
          this.$msgbox({
            title: 'Pago exitoso',
            message: h('p', null, [
              h('span', null, 'Su pago se ha registrado exitosamente')
            ]),
            confirmButtonText: 'Aceptar',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = 'Cargando...';
                setTimeout(() => {
                  done();
                  setTimeout(() => {
                    instance.confirmButtonLoading = false;
                  }, 300);
                }, 3000);
              } else {
                done();
              }
            }
          }).then(action => {
            this.$router.push('/');
          });
        }
      }
    }
</script>

<style lang="css">
  @import url("//unpkg.com/element-ui@2.1.0/lib/theme-chalk/index.css");
  .form-style{
    font-family: "Pathway Gothic One",sans-serif;
    font-size: 2rem;
  }
  .side-bar{
    background: #eeeeee;
    font-family: "Pathway Gothic One", sans-serif;
    padding: 20px;
  }
</style>
