<template>
  <div class="product-container">
    <Product v-for = "product in products"
      :key ="product.name"
      :icon="product.icon"
      :name="product.name"
      :ios="product.ios"
      :android="product.android"
      :web="product.web"
    />
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
    products:[
    /*{
        name:"Qroon",
        ios:"https://apps.apple.com/us/app/qroon/id1354363903?l=ja",
        android:"https://play.google.com/store/apps/details?id=tmy.jack.Qroon",
        web:"https://jack-web.herokuapp.com/products"
      }*/
    ]
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
.product-container{
  display: flex;
}
</style>
