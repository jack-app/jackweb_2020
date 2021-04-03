import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vuescrollto from './plugins/vue-scrollto'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbIpQNFYWNO_VDwZSZPh_ys-ECnM_pweM",
  authDomain: "jack-web.firebaseapp.com",
  databaseURL: "https://jack-web.firebaseio.com",
  projectId: "jack-web",
  storageBucket: "jack-web.appspot.com",
  messagingSenderId: "396195689059",
  appId: "1:396195689059:web:8ea8bcee2e94d5c49ffe56",
  measurementId: "G-3RTX6FMDQC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  vuescrollto,
  render: h => h(App)
}).$mount('#app')
