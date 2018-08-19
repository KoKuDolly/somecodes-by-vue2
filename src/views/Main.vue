<template>
  <div class="main">
    <div class="sidebar-menu-con" :style="{width: shrink ? '60px' : '200px',overflow: shrink?'visible':'auto'}">
      <shrinkable-menu
        :shrink="shrink"
        :menu-list="menuList"
        :before-push="beforePush"
        @on-change="handleSubmenuChange"
        :open-names="openedSubmenuArr"
      >
        <div slot="top" class="logo-con">
          <img v-show="!shrink" src="../images/logo.jpg" alt="">
          <img v-show="shrink" src="../images/logo-min.jpg" alt="">
        </div>
      </shrinkable-menu>
    </div>
    <div class="main-header-con" :style="{paddingLeft: shrink ? '60px' : '200px'}">
      <div class="main-header">
        <div class="navicon-con">
          <Button :style="{transform: `rotateZ(${this.shrink ? '-90' : '0'}deg)`}" type="text" @click="toggleClick">
            <Icon type="ios-menu" size="32"/>
          </Button>
        </div>
        <div class="header-middle-con">
          <div class="main-breadcrumb">
            <breadcrumb-nav
              :currentPath="currentPath"
            ></breadcrumb-nav>
          </div>
        </div>
      </div>
      <div class="tags-con"></div>
    </div>
    <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
      <div class="single-page">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import Util from '@/libs/util.js'
import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue'
import breadcrumbNav from './main-components/breadcrumb-nav.vue'
export default {
  name: 'home',
  components: {
    shrinkableMenu,
    breadcrumbNav
  },
  mounted () {
    this.init()
  },
  computed: {
    menuList () {
      return this.$store.state.app.menuList
    },
    currentPath () {
      return this.$store.state.app.currentPath
    },
    openedSubmenuArr () {
      return this.$store.state.app.openedSubmenuArr
    }
  },
  watch: {
    '$route' (to) {
      let pathArr = Util.setCurrentPath(this, to.name) // 面包屑改变
      if (pathArr.length >= 2) {
        this.$store.commit('addOpenSubmenu', pathArr[1].name)
      }
    }
  },
  data () {
    return {
      shrink: false
    }
  },
  methods: {
    init () {
      let pathArr = Util.setCurrentPath(this, this.$route.name)
      if (pathArr.length >= 2) {
        this.$store.commit('addOpenSubmenu', pathArr[1].name)
      }
      this.$store.commit('updateMenulist')
    },
    toggleClick () {
      this.shrink = !this.shrink
    },
    beforePush (name) {
      return true
    },
    handleSubmenuChange (val) {
      // console.log(val)
    }
  }
}
</script>
<style lang="less">
  @import './main.less';
</style>
