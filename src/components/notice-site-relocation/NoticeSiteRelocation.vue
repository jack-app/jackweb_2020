<template>
  <div>
    <div class="notification-container">
      <div class="notification-image-wrapper">
        <img
          :src="require('@/assets/chikachika.svg')"
          alt=""
          class="notification-image"
        />
      </div>
      <div class="notification-title">サイト移転のお知らせ</div>
      <hr class="notification-line" />
      <div class="notification-description">
        jack-webは下記のアドレスに移動しました
      </div>
      <div class="notification-link">
        <div class="notification-arrow"></div>
        <div class="notification-arrow"></div>
        <div class="notification-arrow"></div>
        <a
          href="https://www.jackapp.jp/"
          rel="noopener noreferrer"
          target="_blank"
          class="notification-link-text"
          >https://www.jackapp.jp/</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.notification-container {
  width: 90%;
  height: 330px;
  background-color: #fff9c5;
  border: 9px solid #ffa61f;
  border-radius: 30px;
  padding: 20px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.notification-image-wrapper {
  display: flex;
  justify-content: center;
}

.notification-image {
  max-width: 100%;
  max-height: 100%;
}

.notification-title {
  color: #ffa61f;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 768px) {
  .notification-title {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .notification-title {
    font-size: 22px;
  }
}

.notification-line {
  border: none;
  border-top: 5px solid #ffe500;
  width: 80%;
}

.notification-description {
  color: #ffa61f;
  font-size: 32px;
  text-align: center;
}

@media (max-width: 768px) {
  .notification-description {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .notification-description {
    font-size: 18px;
  }
}

.notification-link {
  display: flex;
  align-items: center;
  height: 1.5em;
  min-width: 200px;
  font-size: 32px;
  background-color: #ffa61f;
  border-radius: 20px;
  transition: transform 0.3s;
}

.notification-link:hover {
  transform: scale(1.1);
}

.notification-arrow {
  margin-left: 20px;
  width: 15px;
  height: 20px;
  background-color: #ffffff;
  clip-path: polygon(0% 0%, 0% 100%, 100% 50%);
}

.notification-arrow:nth-child(2) {
  margin-left: 5px;
}

.notification-arrow:nth-child(3) {
  margin-left: 5px;
}

@media (max-width: 480px) {
  .notification-arrow {
    display: none;
  }
}

.notification-link-text {
  margin-left: 20px;
  margin-right: 20px;
  color: #ffffff;
  text-decoration: none;
}

@media (max-width: 768px) {
  .notification-link-text {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .notification-link-text {
    font-size: 16px;
  }
}
</style>
