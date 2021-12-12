<template>
  <div>
    <v-row>
      <v-col  class="kanyu" cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
        <p>
          こちらの日程で活動しています。<br>
          活動に興味のある方は是非一度見に来てください。
        </p>
        <v-btn to="/contact" color="primary">見学申し込みフォームへ</v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=jackapp.tmy@gmail.com&ctz=Asia/Tokyo"
          showTitle="0"
          showTabs="0"
          showPrint="0"
          width="680vw"
          height="320vh"
        ></iframe>
      </v-col>
    </v-row>
  </div>
</template>

<script></script>

<style scoped>
/* .kanyu {
  padding: 10vh 2vw 2vh 2vw;
} */

</style>