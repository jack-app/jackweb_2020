<template>
  <v-btn
    depressed
    rounded
    outlined
    style="background: #fff; margin: 10px 0 0 0;"
    :to="to"
    v-scroll-to="vscto"
  >
    入部希望者はこちら
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
  mounted() {
    const path = this.$route.path;
    if (path === "/") {
      this.to = null;
      this.vscto = "#applicant";
    } else {
      this.to = "/";
      this.vscto = null;
    }
  },
  watch: {
    $route(to) {
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
