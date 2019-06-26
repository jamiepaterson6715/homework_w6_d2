import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Hi")
  new Vue({
		el: "#app",
 // console.log("Hi")
  data:{
    rates:{}
  },
  mounted(){
    this.getRates()
  },
  methods: {
    getRates: function (){
      fetch("https://api.exchangeratesapi.io/latest")
      .then(cats => cats.json())
      .then(rates =>this.rates = rates)
    }
  }

	})
});
