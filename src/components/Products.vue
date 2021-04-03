<template>
  <div class="product-container">
    <v-container>
      <v-row justify="center">
        <v-col cols="6" sm="4" md="" v-for="n in 5" :key ="n">
          <Product
            :icon="products[n-1].icon"
            :name="products[n-1].name"
            :ios="products[n-1].ios"
            :android="products[n-1].android"
            :web="products[n-1].web"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Product from './Product.vue'
import firebase from 'firebase'

export default {
  components :{
    Product
  },
  data: ()=> ({
    products: []
  }),
  created (){
    let ls = firebase.database().ref('products');
    let self = this;
    let prearray = [];
    //let storage = firebase.storage()
    ls.once('value',snapshot => {
      snapshot.forEach(function(children){
        prearray.push(children.val()); //配列に入れる
      })
      for(let i=0;i<5;i++){
        let rand = Math.floor(Math.random()*prearray.length);
        self.products.push(prearray[rand]);  //ランダムに5個取り出す
        prearray.splice(rand,1);
      }
    })
  }
}
</script>

<style scoped>

</style>
