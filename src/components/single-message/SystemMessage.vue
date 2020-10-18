<template>
  <span class="system-message">
    {{ getMessage() }}
  </span>
</template>

<script>
import { localUser } from '../../mock'
export default {
  name: 'SystemMessage',
  props: {
    message: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {}
  },
  // detail.type 1. 进入 2. 退出 3.撤回 4. 拍了拍
  methods: {
    getMessage () {
      if (!this.message.detail) return
      const { from, type, to } = this.message.detail
      const isMe = localUser.id === from?.id
      const name = isMe ? '你' : from.name
      if (type === 1) return `${name}进来了`
      if (type === 2) return `${name}退出了`
      if (type === 3) return `${name}撤回了一条消息`
      if (type === 4) return `${name}拍了拍${to.name}`
    }
  }
}
</script>

<style scoped>
.system-message {
  background-color: #CCC;
  color: gray;
  font-size: 12px;
}
</style>
