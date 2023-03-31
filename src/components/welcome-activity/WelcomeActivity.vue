<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="12" md="8" order="last" order-md="first">
          <v-card-text>
            隔週水曜日、金曜日の通常活動に加え、様々なイベントを開催しています。<br />
            通常活動では、雑談しながら個人開発をしているメンバーや、チーム開発をしているメンバーがいます。<br />
            イベントとしては、jackHackというハッカソンや名大祭での作品展示、jackFesでの成果発表があります。
          </v-card-text>
          <div class="button__wrapper">
            <FurtherButton to="./activity" />
          </div>
        </v-col>
        <v-col cols="12" md="4" order="first" order-md="last">
          <v-img :src="require('@/assets/activity.png')" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import FurtherButton from "@/components/further-button/FurtherButton.vue";

export default {
  components: {
    FurtherButton,
  },
};
</script>

<style>
.button__wrapper {
  text-align: center;
}
</style>
