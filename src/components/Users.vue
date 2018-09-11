<template>
  <div class="users">
    <h1>Users</h1>
    <br>
    <form v-on:submit="addUser">
      <h3>Add New User</h3>
      <input type="text" v-model="newUser.name" placeholder="Enter full name">
      <br>
      <input type="email" v-model="newUser.email" placeholder="Enter email">
      <br>
      <input type="submit" value="Add User">
    </form>
    <br>
    <br>
    <ul style="text-align:left">
      <li v-for="(user, index) in users" :key="index"> <!-- use v-for as (value, key) and require bind:key=key to avoid linting errors -->
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
        {{ user.name }}: {{ user.email }}
        <button v-on:click="deleteUser(user)">Delete User</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data () {
      return {
        newUser: {},
        users: []
      }
    },
    methods: {
      addUser: function(e) {
        e.preventDefault()
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        })
      },
      deleteUser: function(user) {
        this.users.splice(this.users.indexOf(user), 1)
      }
    },
    created: function() { //lifecycle hooks
      this.$http.get('https://jsonplaceholder.typicode.com/users/')
        .then(function(response){
            console.log(response.data)
            this.users = response.data
        })
    }
  }
</script>

<style scopped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .contacted {
      text-decoration: line-through;
  }
</style>