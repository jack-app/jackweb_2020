<template>
<div class = "product">
  <div v-if = "icon">
    <img class="productimage" :src="icon" :alt="name" />
  </div>
  <div v-else>
    <img class="productimage" src="@/assets/noimage.png" :alt = "name"/>
  </div>
  <div class="icons">
    <a v-if = "web" v-bind:href = "web">
      <img class="iconimage" src="@/assets/website.png" />
    </a>
    <a v-if = "ios" v-bind:href ="ios" >
      <img class="iconimage" src="@/assets/apple.png" />
    </a>
    <a v-if = "android" v-bind:href = "android">
      <img class="iconimage" src="@/assets/android.png"/>
    </a>
  </div>
</div>
</template>

<script>
export default {
  props: ['icon','name','ios','android','web']
}
</script>

<style scoped>
.product {
  width: 20%;
  padding: 15px 10px;
  margin: 5% 0;
}

.productimage {
  width: 100%;
}

.icons {
  margin-top: 8px;
  display: flex;
  justify-content: space-around;
}

.iconimage {
  width: 3vw;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
