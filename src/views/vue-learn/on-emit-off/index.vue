<!--
 * @Descripttion:
 * @version:
 * @Author: jiajun.qin
 * @Date: 2020-05-19 16:29:56
 * @LastEditors: jiajun.qin
 * @LastEditTime: 2020-05-19 16:52:34
 -->
<template>
  <div>
    <!-- <button @click="">father</button> -->
    <son @son-emit="handleEmit"/>
  </div>
</template>
<script>
import son from './components/son'

export default {
  name: 'on-emit-off',
  components: {
    son
  },
  data() {
    return {}
  },
  methods: {
    handleEmit(v) {
      // 父子组件不用 $off 移除自定义事件监听器
      // console.log(v)
      this.$emit('my-emit', 16)

      this.$on('my-emit', function (v) {
        console.log(v)
        this.$off('my-emit')
      })
    }
  }
}
</script>
