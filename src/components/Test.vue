<template>
  <div class="test">
  <input type="text" v-model="title">
  <br>
    <span v-html="title"></span>
    <p v-if="showName">{{ user.firstName }}</p>
    <p v-else>Nobody</p>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{item.title}}</li>
    </ul>
    <button v-on:click="greet('Hello World')">Say Greeting</button>
    <br>
    <br>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <br>
    <hr>
    <br>
    <label>First Name</label>
    <input type="text" v-model="user.firstName">
    <br>
    <br>
    <label>Last Name</label>
    <input type="text" v-model="user.lastName">
    <br>
    <h3>{{fullName}}</h3>    
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'Foobar'
      }
    },
    data () {
      return {
        title: '<h1>Hello World</h1>',
        user: {
          firstName: 'John',
          lastName: 'Doe'
        },
        showName: true,
        items: [
          {title: 'Item One'},
          {title: 'Item Two'},
          {title: 'Item Three'}
        ]
      }
    },
    methods: {
      greet: function(greeting) {
        alert(greeting)
      },
      pressKey: function(e) {
        console.log(e.target.value)
      },
      enterHit: function() {
        console.log('You hit enter')
      }
    },
    computed: {
      fullName: function() {
        return this.user.firstName + ' ' + this.user.lastName
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>