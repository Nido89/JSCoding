<template>
  <div id="app">
<Header title="VueJS" />
<Profile :user="user" />
  </div>
</template>

<script>
import Header from './components/Header';
import Profile from './components/Profile';

export default {
  name: 'App',
  components: {
    Header,
    Profile
  },
  data: function(){
    return {
      user:{
        name: "Nido Jalal",
        image:require("./assets/myfoto.png")
      }
    }
  }
}
</script>

<style>
body{
  margin: 0;
  background: #f3f3f3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  
}
</style>
