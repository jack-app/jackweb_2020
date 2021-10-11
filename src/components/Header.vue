<template>
  <header>
    <router-link to="/products">プロダクト</router-link>
    <router-link to="/activity">活動内容</router-link>
    <router-link to="/results">実績</router-link>
    <router-link to="/contact">お問い合わせ</router-link>
    <router-link
      to="/"
      v-if="
        this.$route.path.match('/products') ||
          this.$route.path.match('/activity') ||
          this.$route.path.match('/results') ||
          this.$route.path.match('/contact')
      "
      >入部希望者はこちら</router-link
    >
  </header>
</template>

<script></script>

<style scoped></style>
