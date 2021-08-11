//var app = new Vue({
//  el: '#app',
//  data: {
//    message: 'Hello Vue!'
//  }
//});
const Counter = {
  data() {
    return {
      message: 0
    }
  }
}

Vue.createApp(Counter).mount('#app')

const MyApi = {
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response));
  }
}
Vue.createApp(MyApi).mount('#app1')
