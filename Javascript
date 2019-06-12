var app = new Vue({
  el: '#app',
  data: {
    message: ""
  },
  methods: {
    timeStamp: function () {
    var times = new Date()
      this.message = (times.getMonth()+1)+"/"+times.getDate()+"/"+times.getFullYear()
    }
  }
})
