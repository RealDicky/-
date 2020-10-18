<template>
  <div id="app">
    <message-box :message-list="messageList"></message-box>
  </div>
</template>

<script>
import MessageBox from './components/MessageBox'
import { messageList } from './mock'

export default {
  name: 'App',
  components: { MessageBox },
  data () {
    return {
      messageList: messageList
    }
  }
}
</script>

<style>
#app {
  --theme-color: cornflowerblue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 400px;
  width: 30%;
  margin: 200px auto;
  height: 600px;
}
</style>
