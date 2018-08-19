<template>
  <Menu ref="sideMenu" :theme="theme2" :active-name="$route.name" :open-names="openNames" accordion @on-select="changeMenu" width="auto">
    <template v-for="item in menuList">
      <MenuItem v-if="item.children.length<=1" :name="item.children[0].name" :key="'menuitem'+ item.name">
        <Icon :type="item.children[0].icon||item.icon" :key="'menuicon'+item.name" />
        <span class="layout-text" :key="'title'+item.name">{{itemTitle(item.children[0])}}</span>
      </MenuItem>
      <Submenu v-if="item.children.length>1" :key="item.name" :name="item.name">
        <template slot="title">
          <Icon :type="item.icon"></Icon>
          <span class="layout-text">{{itemTitle(item)}}</span>
        </template>
        <template v-for="child in item.children">
          <MenuItem :key="'menuitem'+child.name" :name="child.name">
            <Icon :key="'icon'+child.name" :type="child.icon"/>
            <span class="layout-text" :key="'title'+child.name">{{itemTitle(child)}}</span>
          </MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>
<script>
export default {
  name: 'siderbarMenu',
  props: {
    menuList: {
      type: Array,
      required: true
    },
    iconSize: Number,
    openNames: Array
  },
  updated () {
    this.$nextTick(() => {
      if (this.$refs.sideMenu) {
        this.$refs.sideMenu.updateOpened()
        this.$refs.sideMenu.updateActiveName()
      }
    })
  },
  data () {
    return {
      theme2: 'dark'
    }
  },
  methods: {
    changeMenu (selectMenu) {
      // console.log(selectMenu)
      this.$emit('on-change', selectMenu)
    },
    itemTitle (item) {
      if (typeof item.title === 'object') {
        return this.$t(item.title.i18n)
      } else {
        return item.title
      }
    }
  }
}
</script>
<style lang="less">
  // @import '../styles/menu.less';
</style>
