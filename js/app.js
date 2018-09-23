new Vue({
  el: '#vue-app',
  data: {
    name: 'Akash Kumar',
    job: 'Web Developer'
  },
  methods: {
    greet: function (time) {
      return `Good ${time} ${this.name}`
    }
  }
});
