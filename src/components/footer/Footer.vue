<template>
  <footer>
    <v-container>
      <v-row align="center">
        <v-col cols="4">
          <v-btn
            class="contact__icon"
            href="mailto:jack.app.tmy@gmail.com"
            icon
          >
            <v-icon large>mdi-email</v-icon>
          </v-btn>
          <v-btn
            class="contact__icon"
            href="https://twitter.com/jackapp_tmy/"
            icon
          >
            <v-icon large>mdi-twitter</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="4">©jack 2022 </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </footer>
</template>

<script></script>

<style scoped>
footer {
  background-color: #fc913a;
}

.contact__icon {
  margin: auto 2px;
}
</style>
