var app = new Vue({
  el: '#app',
  data: {
    message: ""
  },
  methods: {
    timeStamp: function () {
                   setInterval(() => {
                        var countDown = new Date("Jul 13, 2019 00:00:00").getTime() - new Date().getTime()
    var days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    var hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    var expired = countDown<0
    if(!expired)
    this.message = days+"d "+hours+"h "+minutes+"m "+seconds+"s until NASA SEES!"
    else
    this.message = Math.abs(days+1)+"d "+Math.abs(hours+1)+"h "+Math.abs(minutes+1)+"m "+Math.abs(seconds+1)+"s since NASA SEES!"  
                   }, 1000);
                   }
                   }
})

