<template>
  <div class="ivu-shrinkable-menu" :style="{background: bgColor}">
    <slot name="top"></slot>
    <sidebar-menu
      v-show="!shrink"
      :menu-list="menuList"
      @on-change="handleChange"
    />
    <sidebar-menu-shrink
      v-show="shrink"
      :menu-list="menuList"
      :icon-color="shrinkIconColor"
    />
  </div>
</template>
<script>
import sidebarMenu from './components/sidebarMenu'
import sidebarMenuShrink from './components/sidebarMenuShrink'
export default {
  name: 'shrinkableMenu',
  components: {
    sidebarMenu,
    sidebarMenuShrink
  },
  props: {
    shrink: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'dark'
    },
    menuList: {
      type: Array,
      required: true
    },
    beforePush: Function
  },
  computed: {
    bgColor () {
      return this.theme === 'dark' ? '#495060' : '#fff'
    },
    shrinkIconColor () {
      return this.theme === 'dark' ? '#fff' : '#495060'
    }
  },
  data () {
    return {}
  },
  methods: {
    handleChange (name) {
      let willpush = true
      if (this.beforePush !== undefined) {
        if (!this.beforePush(name)) {
          willpush = false
        }
      }
      if (willpush) {
        this.$router.push({name})
      }
      this.$emit('on-change', name)
    }
  }
}
</script>
<style lang="less">
  @import './styles/menu.less';
</style>
