<template lang="html">
  <div id="estabPica" class="container-fluid pt-5">
    <el-carousel class="carousel" type="card" height="400px" :interval="4000">
      <el-carousel-item class="carousel-item">
        <img src="./img/pica-1.jpg" class="img-fluid" >
      </el-carousel-item>
      <el-carousel-item class="carousel-item">
        <img src="./img/pica-2.jpg" class="img-fluid" >
      </el-carousel-item>
      <el-carousel-item class="carousel-item">
        <img src="./img/pica-4.jpg" class="img-fluid" >
      </el-carousel-item>
    </el-carousel>
    <section id="info" class="container">
      <div class="row pt-3">
        <div class="col-12 text-center">
          <h1>IL PICACCIO</h1>
        </div>
      </div>

      <div class="row pt-5">
        <div class="col-12">
          <h2>Entradas</h2>
          <hr>
          <div class="row">
            <div class="col-4">
              <el-card :body-style="{ padding: '0px' }">
                <img src="./img/pica-3.jpg" class="img-fluid">
                <div class="pt-3 pl-3">
                  <h3>Tarta de atún</h3>
                  <h4>BSF 601.152,00</h4>
                  <div class="bottom text-right">
                    <el-button type="text" class="button btn-shop px-3 mb-2 mx-2"  @click="addItem(item1)">Comprar</el-button>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="col-4">
              <el-card :body-style="{ padding: '0px' }">
                <img src="./img/pica-5.jpg" class="img-fluid">
                <div class="pt-3 pl-3">
                  <h3>Bruchettas Capresa</h3>
                  <h4>BSF 313.100,00</h4>
                  <div class="bottom text-right">
                    <el-button type="text" class="button btn-shop px-3 mb-2 mx-2 "  @click="addItem(item2)">Comprar</el-button>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="col-4">
              <el-card :body-style="{ padding: '0px' }">
                <img src="./img/pica-6.jpg" class="img-fluid">
                <div class="pt-3 pl-3">
                  <h3>Filet miñon</h3>
                  <h4>BSF 347.200,00</h4>
                  <div class="bottom text-right">
                    <el-button type="text" class="button btn-shop px-3 mb-2 mx-2" @click="addItem(item3)">Comprar</el-button>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <el-card :body-style="{ padding: '0px' }">
                <img src="./img/pica-3.jpg" class="img-fluid">
                <div class="pt-3 pl-3">
                  <h3>Ración de Tequeños</h3>
                  <h4>BSF 270.051,16</h4>
                  <div class="bottom text-right">
                    <el-button type="text" class="button btn-shop px-3 mb-2 mx-2"  @click="addItem(item4)">Comprar</el-button>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="col-4">
              <el-card :body-style="{ padding: '0px' }">
                <img src="./img/pica-5.jpg" class="img-fluid">
                <div class="pt-3 pl-3">
                  <h3>Ración de Camarones</h3>
                  <h4>BSF 508.400,00 </h4>
                  <div class="bottom text-right">
                    <el-button type="text" class="button btn-shop px-3 mb-2 mx-2 "  @click="addItem(item5)">Comprar</el-button>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="col-4">
              <el-card :body-style="{ padding: '0px' }">
                <img src="./img/pica-6.jpg" class="img-fluid">
                <div class="pt-3 pl-3">
                  <h3>Arrosticini</h3>
                  <h4>BSF 300.285,57</h4>
                  <div class="bottom text-right">
                    <el-button type="text" class="button btn-shop px-3 mb-2 mx-2" @click="addItem(item6)">Comprar</el-button>
                  </div>
                </div>
              </el-card>
            </div>
          </div>

        </div>
        <div class="col-12 pt-5">
          <h2>Risottos</h2>
          <hr>
          <div class="row">
            <div class="col-4">
              <el-card :body-style="{ padding: '0px' }">
                <img src="./img/pica-3.jpg" class="img-fluid">
                <div class="pt-3 pl-3">
                  <h3>Tomates secos</h3>
                  <h4>BSF 549.461,34 </h4>
                  <div class="bottom text-right">
                    <el-button type="text" class="button btn-shop px-3 mb-2 mx-2"  @click="addItem(item7)">Comprar</el-button>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="col-4">
              <el-card :body-style="{ padding: '0px' }">
                <img src="./img/pica-6.jpg" class="img-fluid">
                <div class="pt-3 pl-3">
                  <h3>Funghi</h3>
                  <h4>BSF 473.503,31 </h4>
                  <div class="bottom text-right">
                    <el-button type="text" class="button btn-shop px-3 mb-2 mx-2" @click="addItem(item8)">Comprar</el-button>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="icon-middle" v-if="show">
      <transition name="fade" mode="out-in">
        <a @click="open4()">
          <i class="fas fa-shopping-cart fa-1x"></i>
        </a>

      </transition>

    </div>
    <Footer class="pt-5 mt-5"></Footer>
  </div>
</template>

<script>
  import Footer from './components/footer';
    export default {
      name: 'estabPica',

      data(){
        return {
          item1: {
            name: 'Tarta de atún',
            price: 601152.00 ,
          },
          item2: {
            name: 'Bruchettas Capresa',
            price: 313100.00 ,
          },
          item3: {
            name: 'Filet miñon',
            price: 347200.00 ,
          },
          item4: {
            name: 'Ración de Tequeños',
            price: 270051.16  ,
          },
          item5: {
            name: 'Ración de Camarones',
            price: 508400.00 ,
          },
          item6: {
            name: 'Arrosticini',
            price:  300285.57 ,
          },
          item8: {
            name: 'Tomates secos',
            price: 549461.34 ,
          },
          item7: {
            name: 'Funghi',
            price: 473503.31 ,
          },
          itemsInStore: [],
          show: false,
          priceTotal: 0
        }
      },
      methods: {
        addItem: function (item) {
          this.itemsInStore.push(item);
          this.priceTotal = this.priceTotal +  item.price;
          this.open3();
          this.verifyItems();

        },
        open3() {
          this.$notify({
            title: 'Item',
            message: 'Producto agregado exitosamente en a su carrito',
            type: 'success'
          });
        },
        open4() {
          const h = this.$createElement;
          this.$msgbox({
            title: 'Pago',
            message: h('p', null, [
              h('span', null, 'El total de su pago es: '),
              h('span',null, this.priceTotal)
            ]),
            showCancelButton: true,
            confirmButtonText: 'Pagar',
            cancelButtonText: 'Cancelar',
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
            //this.$router.push('/pago');
            this.$router.push({ name: 'Pago', params: { items: this.itemsInStore, pago: this.priceTotal }});
          });
        },
        verifyItems: function () {
          console.log(this.itemsInStore.length);
          if(this.itemsInStore.length < 1){
            this.show = false;
          }else{
            this.show = true;
          }
        }
      },
      mounted () {
      },
      components: {
        Footer
      },
      computed: {

      }
    }
</script>

<style lang="css">
  @import url("//unpkg.com/element-ui@2.1.0/lib/theme-chalk/index.css");
  .btn-shop{
    border: 1px solid black;
    color: black;
    background: transparent;
    font-family: "Pathway Gothic One",sans-serif;
    font-size: 18px;
  }
  .btn-shop:hover{
    border: 1px solid black;
    color: white;
    background: black;
    font-family: "Pathway Gothic One",sans-serif;
    font-size: 18px;
  }
  #estabPica .swiper-container2 {
    width: 100%;
    height: 100%;
  }
  #estabPica .swiper-slide {
    font-size: 18px;
    background: black;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 91vh;
    /* Center slide text vertically */
  }
  h1,h4{
    font-family: "Pathway Gothic One";
  }
  .icon-middle{
    top: 50%;
    right: 25px;
    position: fixed;
    z-index: 1;
    border-radius: 50%;
    background: black;
    color: white;
    padding: 12px 15px 12px 15px;
    cursor: pointer;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
