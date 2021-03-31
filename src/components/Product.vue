<template>
<div class = "product">
  <div v-if = "icon">
    <img class="productimage" :src="icon" :alt="name" />
  </div>
  <div v-else>
    <img class="productimage" src="@/assets/noimage.png" :alt = "name"/>
  </div>
  <div class="producttitle">
    <p class="productname">{{name}}</p>
  </div>
  <div class="badges">
    <a v-if = "web" v-bind:href = "web">
      <img class="badgeimage" src="@/assets/web-link-badge.png" />
    </a>
    <a v-if = "android" v-bind:href = "android">
      <img class="badgeimage" src="@/assets/google-play-badge.png"/>
    </a>
    <a v-if = "ios" v-bind:href ="ios" >
      <img class="badgeimage" src="@/assets/app-store-badge.svg" />
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

.badges {
  margin-top: 25%;
  /*display: flex;*/
  justify-content: space-around;
}

.badgeimage {
  width: 100%;
  padding: 0,5%;
}

</style>
