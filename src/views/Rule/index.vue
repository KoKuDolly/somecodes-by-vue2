<template>
  <div>
    <keep-alive :include="cachePage">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'rule_index',
  data () {
    return {
      cachePage: ['Rules_home']
    }
  }
}
</script>
<style lang="less">
/* only comments */
</style>
