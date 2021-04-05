<template>
  <div class="top">
    <v-img
      src="@/assets/jack-web_top.png"
      contain
      >
      <div class="toptext">
        <h1 align="left">jackは</h1>
        <h1 align="left">名古屋の</h1>
        <h1 align="left">アプリ・ゲーム</h1>
        <h1 align="left">開発サークルです！</h1>
      </div>
    </v-img>
  </div>
</template>

<style>
.top {
  margin-top: 0;
  padding-top: 0;
  width: 100%;
}

.toptext{
  padding-top: 56px;
}

h1 {
  color: #fff;
  font-size: 48px;
  line-height: 84px;
  padding-left: 3%;
}

@media screen and (max-width: 800px) {
  h1 {
    font-size: 36px;
    line-height: 60px;
  }
}

@media screen and (max-width: 640px) {
  h1 {
    font-size: 32px;
    line-height: 48px;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 24px;
    line-height: 36px;
  }
}

@media screen and (max-width: 440px) {
  h1 {
    font-size: 20px;
    line-height: 28px;
  }
}
@media screen and (max-width: 360px) {
  h1 {
    font-size: 16px;
    line-height: 24px;
  }
}
@media screen and (max-width: 320px) {
  h1 {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
