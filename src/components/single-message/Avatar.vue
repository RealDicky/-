<template functional>
  <div class="avatar">
    <div class="name" style="font-size: 10px; color: gray">
      {{ props.message.from.name }}
    </div>
    <img :src="props.message.from.avatar" alt="" width="50" height="50">
  </div>
</template>
