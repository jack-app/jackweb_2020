<template>
  <div>
    <v-row>
      <v-col  class="kanyu" cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
        <p>
          こちらの日程で活動しています。<br>
          活動に興味のある方は是非一度見に来てください。
        </p>
        <div class="justify-end tocontact-btn">
          <a href="./Contact.vue">見学お申し込みフォームへ</a>
        </div>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7">
        <iframe
          class="calender"
          src="https://calendar.google.com/calendar/embed?src=jackapp.tmy@gmail.com&ctz=Asia/Tokyo"
          showTitle="0"
          showTabs="0"
          showPrint="0"
        ></iframe>
      </v-col>
    </v-row>
  </div>
</template>

<script></script>

<style scoped>

.tocontact-btn {
  margin-top: 6vh;
}
.tocontact-btn a {
  justify-content: space-between;
  align-items: center;
  margin: 6vh auto auto auto;
  padding: 1em 2em;
  width: 400px;
  color: #FC913A;
  font-size: 18px;
  font-weight: 700;
  border: 3px solid #FCA965;
  border-radius: 2px;
  text-decoration:none;
}

.tocontact-btn a:hover {
  color: #333333;
  text-decoration: none;
  background-color: #FCA965;
}

 .calender {
  width: 40vw;
  height: 40vh;
}

@media screen and (max-width: 500px) {
  .tocontact-btn a {
  justify-content: space-between;
  align-items: center;
  margin: 6vh auto auto auto;
  padding: 1em 2em;
  width: 300px;
  color: #FC913A;
  font-size: 12px;
  font-weight: 600;
  border: 3px solid #FCA965;
  border-radius: 2px;
  text-decoration:none;
}

.tocontact-btn a:hover {
  color: #333333;
  text-decoration: none;
  background-color: #FCA965;
}
}

@media screen and (max-width: 540px) {
  .calender {
  width: 80vw;
  height: 40vh;
}
}

</style>