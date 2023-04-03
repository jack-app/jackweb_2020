<template>
  <v-btn
    depressed
    rounded
    outlined
    style="background: #fff; margin: 10px 0 0 0;"
    :to="to"
    v-scroll-to="vscto"
  >
    新歓申し込みはこちら
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      to: null,
      vscto: null,
    };
  },
  watch: {
    $route(to) {
      console.log(to.path);
      if (to.path === "/") {
        this.to = null;
        this.vscto = "#applicant";
      } else {
        this.to = "/";
        this.vscto = null;
      }
    },
  },
};
</script>
