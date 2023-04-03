<template>
  <div>
    <v-row>
      <v-col class="kanyu" cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
        <p>jackでは現在新歓を行っています。</p>
        <div>
          <v-row>
            <v-col cols="6">
              <p>オフライン</p>
              <p>4/8(Sat)13:45～16:15</p>
              <p>4/16(Sun)13:45～16:15</p>
              場所：<a href="https://goo.gl/maps/2fUAfpFWA9whoPJb6"
                >名古屋学生青年センター</a
              >
            </v-col>
            <v-col>
              <p>オンライン</p>
              <p>4/4(Tue)21:00～22:30</p>
              <p>4/10(Mon)16:30～18:00</p>
              <p>4/15(Sat)20:00～21:30</p>
            </v-col>
          </v-row>
        </div>
        <div class="justify-end tocontact-btn">
          <a :href="link" target="_blank">{{ btn }}</a>
        </div>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-img :src="src"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["btn", "link"],
  data: () => ({
    src: require("@/assets/shinkan2023ver3.0.jpg"),
  }),
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
  color: #fc913a;
  font-size: 18px;
  font-weight: 700;
  border: 3px solid #fca965;
  border-radius: 2px;
  text-decoration: none;
}

.tocontact-btn a:hover {
  color: #333333;
  text-decoration: none;
  background-color: #fca965;
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
    color: #fc913a;
    font-size: 12px;
    font-weight: 600;
    border: 3px solid #fca965;
    border-radius: 2px;
    text-decoration: none;
  }

  .tocontact-btn a:hover {
    color: #333333;
    text-decoration: none;
    background-color: #fca965;
  }
}

@media screen and (max-width: 540px) {
  .calender {
    width: 80vw;
    height: 40vh;
  }
}
</style>
