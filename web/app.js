import Vue from 'vue';
import Vuex from 'vuex';
import Input from './app/components/basic/input.vue';

Vue.use(Vuex);

Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

const store = new Vuex.Store({
  state: {
    count: 0,
    value: 1
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--
  }
});

var app = new Vue({
    el: '#app',
    computed: {
      count () {
        return store.state.count
      }
    },
    methods: {
      increment () {
        store.commit('increment')
      },
      decrement () {
        store.commit('decrement')
      }
    }
});