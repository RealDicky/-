<template>
  <div class="message-box">
    <single-message v-for="message in messageList" :key="message.id" :message="message"></single-message>
  </div>
</template>

<script>
import SingleMessage from './single-message'
export default {
  name: 'MessageBox',
  props: {
    messageList: {
      type: Array,
      default: () => []
    }
  },
  components: { SingleMessage },
  data () {
    return {}
  }
}
</script>

<style>
.message-box {
  width: 100%;
  height: 100%;
  border: 2px solid #CCC;
  overflow-y: auto;
  padding: 10px;
  overflow-x: hidden;
}

</style>
