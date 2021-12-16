<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="product in products"
          :key="product.name"
        >
          <img
            width="160vw"
            height="160wh"
            v-if="product.icon"
            :src="product.icon"
          />
        </v-col>
      </v-row>
    </v-container>
    <div class="toproducts-btn">
      <router-link to="/products">詳しく見る</router-link>
    </div>
    <!-- <v-btn class="justify-end" to="/products">more</v-btn> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    products: []
  }),
  mounted() {
    axios
      .get(`${process.env.VUE_APP_VERCEL_URL}/api/products`)
      .then(response => {
        let array = response.data.message.slice();
        array = array.filter(item => item.icon);
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        this.products = array.slice(0, 5);
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
  }
};
</script>

<style scoped>
.toproducts-btn a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2vh auto auto auto;
  padding: 1em 2em;
  width: 300px;
  color: #fc913a;
  font-size: 18px;
  font-weight: 700;
  border: 3px solid #fca965;
  border-radius: 10px;
  text-decoration: none;
}

.toproducts-btn a::after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid #fc913a;
  border-right: 3px solid #fc913a;
  transform: rotate(45deg);
}

.toproducts-btn a:hover {
  color: #333333;
  text-decoration: none;
  background-color: #fca965;
}

.toproducts-btn a:hover::after {
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
}

@media screen and (max-width: 500px) {
  .toproducts-btn a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4vh auto auto auto;
    padding: 0.9em 1.8em;
    width: 260px;
    color: #fc913a;
    font-size: 12px;
    font-weight: 600;
    border: 2px solid #fca965;
    border-radius: 10px;
    text-decoration: none;
  }

  .toproducts-btn a::after {
    content: "";
    width: 5px;
    height: 5px;
    border-top: 3px solid #fc913a;
    border-right: 3px solid #fc913a;
    transform: rotate(45deg);
  }

  .toproducts-btn a:hover {
    color: #333333;
    text-decoration: none;
    background-color: #fca965;
  }

  .toproducts-btn a:hover::after {
    border-top: 3px solid #333333;
    border-right: 3px solid #333333;
  }
}
</style>
