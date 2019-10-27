import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBkFogwLn_KA4l2RTBhZnA3SyH7HQ12YNs",
  authDomain: "vue-calendar-f1c8c.firebaseapp.com",
  databaseURL: "https://vue-calendar-f1c8c.firebaseio.com",
  projectId: "vue-calendar-f1c8c",
  storageBucket: "vue-calendar-f1c8c.appspot.com",
  messagingSenderId: "15116492067",
  appId: "1:15116492067:web:46b8956dff075ded540096"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
