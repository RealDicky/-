<template>
  <div class="single-message">
    <div :class="['message-container', messageFrom]">
      <!-- 系统消息没有avatar -->
      <div class="message-avatar" v-if="message.from">
        <avatar :message="message"></avatar>
      </div>
      <div class="message-content-box">
        <!-- 根据from字段和message.type消息组件 -->
        <component :is="messageComponent" :message="message"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { upperFirst } from 'lodash'

import Avatar from './Avatar'

import { localUser } from '../../mock'

// 若要新增消息类型, 新建组件 -> 在该文件导入
import importMessageComponentMixin from '../../importMessageComponentMixin'

export default {
  name: 'SingleMessage',
  components: {
    Avatar
  },
  mixins: [importMessageComponentMixin],
  props: {
    message: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    messageFrom () {
      const from = this.message.from
      if (!from) return 'from-system'
      return from.id === localUser.id ? 'from-me' : 'from-other'
    },
    messageComponent () {
      if (this.message.from === 0) return 'SystemMessage'
      return `${upperFirst(this.message.type)}Message`
    }
  }
}
</script>

<style scoped>
.single-message + .single-message {
  margin: 10px 0;
}
.message-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.message-content-box :not(.system-message) {
  background-color: var(--theme-color);
  color: #FFF;
  padding: 5px;
  border-radius: 5px;
}
.from-me .message-content-box, .from-other .message-content-box {
  justify-content: start;
  position: relative;
}
.from-other {
  justify-content: start;
}
.from-me  {
  justify-content: start;
  flex-direction: row-reverse;
}
.from-me .message-content-box::after, .from-other .message-content-box::before {
  content: '';
  position: absolute;
  color: var(--theme-color);
  border: 8px solid;
  top: 50%;
  transform: translateY(-50%);
  border-top-color: transparent;
  border-bottom-color: transparent;
}
.from-me .message-content-box::after {
  border-right-color: transparent;
  right: -16px;
}

.from-other .message-content-box::before {
  border-left-color: transparent;
  left: -16px;;
}
.message-avatar {
  flex: none;
  width: 60px;
}
.from-me .message-avatar {
  margin-left: 10px;
}
.from-other .message-avatar {
  margin-right: 10px;
}
</style>
