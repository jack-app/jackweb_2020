import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vuescrollto from './plugins/vue-scrollto'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAjA5hRQeFS4P20cXIgzS2goxS9c1Ha--w",
  authDomain: "jack-web2020.firebaseapp.com",
  databaseURL: "https://jack-web2020.firebaseio.com",
  projectId: "jack-web2020",
  storageBucket: "jack-web2020.appspot.com",
  messagingSenderId: "339661154580",
  appId: "1:339661154580:web:15dfdfa98884bd0032fa01",
  measurementId: "G-ET9VVLVN19",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  vuescrollto,
  render: h => h(App)
}).$mount('#app')
