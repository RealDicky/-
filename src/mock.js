// content.type  1. 加入 2
const avatars = [
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2186181500,1239164176&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3521154136,1457728201&fm=26&gp=0.jpg'
]

const users = [
  { avatar: avatars[0], name: '派大星', id: '1' },
  { avatar: avatars[1], name: '海绵宝宝', id: '2' }
]

export const localUser = users[1]

// detail.type 1. 进入 2. 退出 3.撤回 4. 拍了拍

export const messageList = [
  { id: '1', from: 0, type: 'text', content: null, detail: { from: users[0], to: null, type: 1 } },
  { id: '2', from: 0, type: 'text', content: null, detail: { from: users[1], to: null, type: 1 } },
  { id: '3', from: 0, type: 'text', content: null, detail: { from: users[0], to: users[1], type: 4 } },
  { id: '4', from: users[0], type: 'image', content: { text: '', imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3961584571,2575591872&fm=26&gp=0.jpg' }, detail: null },
  { id: '5', from: users[0], type: 'text', content: { text: '一起出去玩啊, 海绵宝宝', imgUrl: '' }, detail: null },
  { id: '6', from: users[1], type: 'text', content: { text: '好的派大星', imgUrl: '' }, detail: null },
  { id: '7', from: users[1], type: 'text', content: { text: '等我一会儿', imgUrl: '' }, detail: null },
  { id: '8', from: 0, type: 'text', content: { text: '叫上章鱼哥', imgUrl: '' }, detail: { from: users[1], to: null, type: 3 } },
  { id: '9', from: 0, type: 'text', content: { text: '还是算了吧', imgUrl: '' }, detail: { from: users[0], to: null, type: 3 } }
]
