<template>
  <div>
    <v-row>
      <v-col  class="kanyu" cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
        <p>
          {{ text }}
        </p>
        <div class="justify-end tocontact-btn">
          <a :href="link" target="_blank">{{ btn }}</a>
        </div>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7">
        <Calendar />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Calendar from "@/components/calendar/Calendar.vue"

export default {
  props: ["text", "btn", "link"],
  components:{
    Calendar
  }
};
</script>

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