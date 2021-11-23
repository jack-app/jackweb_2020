module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "アプリ開発団体jack"
    }
  },
  transpileDependencies: ["vuetify"],
  devServer: {
    // localhostでvueからexpressにAPIリクエストを送信する為の設定
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
        secure: false
      }
    }
  }
};
