<!--
 * @Descripttion:
 * @version:
 * @Author: jiajun.qin
 * @Date: 2020-05-19 16:32:02
 * @LastEditors: jiajun.qin
 * @LastEditTime: 2020-05-19 16:47:51
 -->
<template>
  <div>
    <button @click="() => $emit('son-emit', 16)">son</button>
  </div>
</template>
<script>
export default {
  name: 'son'
}
</script>
