// 导入各消息类型组件并注册

import TextMessage from './components/single-message/TextMessage'
import ImageMessage from './components/single-message/ImageMessage'
import SystemMessage from './components/single-message/SystemMessage'

export default {
  components: {
    TextMessage,
    ImageMessage,
    SystemMessage
  }
}
