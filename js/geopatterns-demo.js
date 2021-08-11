//var app = new Vue({
//  el: '#app',
//  data: {
//    message: 'Hello Vue!'
//  }
//});
const Counter = {
  data() {
    return {
      message: 'first block'
    }
  }
}

Vue.createApp(Counter).mount('#app')

const MyApi = {
  data() {
    return {
      text: null
    }
  },
  mounted() {
    axios
      .get('https://fish-text.ru/get?format=json&number=1')
      .then(response => (this.text = response.data.text));
  }
}
Vue.createApp(MyApi).mount('#app1')
