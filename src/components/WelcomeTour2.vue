<template>
  <div>
    興味がありましたら是非1度活動を見に来てください！
    <div class="accessbutton">
      <v-btn
      rounded
      color="#FC913A"
      class="white--text"
      href="https://forms.gle/e27FUtpxokwY9uVR7"
      target="_blank"
        >
        <v-icon>mdi-open-in-new</v-icon>お申し込みはこちら
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.texts {
  text-align: left;
  padding-top: 3vh;
}

.text{
  text-align: left;
}

.card-1{
  margin-left: 3vw;
}

.title{
  text-align: left;
}

.accessbutton{
  padding-top: 5%;
  margin: 0 auto;
  text-align: center;
}

.v-card-text{
  margin: 0 auto;
}

.body-1{
  padding-left: 1vw;
}

@media screen and (max-width: 400px) {
  .v-btn {
    max-width:70vw;
  }
}
</style>
