var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app1 = new Vue({
  el: '#app1',
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response));
  }
});
