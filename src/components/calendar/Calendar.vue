<template>
  <div class="calendar__wrapper">
    <iframe
      class="calender"
      src="https://calendar.google.com/calendar/embed?src=jackapp.tmy@gmail.com&ctz=Asia/Tokyo"
      showTitle="0"
      showTabs="0"
      showPrint="0"
    ></iframe>
  </div>
</template>

<script></script>

<style scoped>
.calendar__wrapper {
  width: 100%;
  height: 360px;
  overflow-y: visible;
}

.calendar__wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
