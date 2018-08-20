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
        <div class="header-avator-con">
          <full-screen v-model="isFullScreen" @on-change="fullscreenChange"></full-screen>
          <lock-screen></lock-screen>
          <div class="user-dropdown-menu-con">
            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
              <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                <a href="javascript:void(0)">
                  <span class="main-user-name">{{userName}}</span>
                  <Icon type="md-arrow-dropdown"/>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem name="ownSpace">个人中心</DropdownItem>
                  <DropdownItem name="loginout" divided>退出登陆</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Avatar :src="avatorPath" style="margin-left:8px;"></Avatar>
            </Row>
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
import Cookies from 'js-cookie'
import Util from '@/libs/util.js'
import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue'
import breadcrumbNav from './main-components/breadcrumb-nav.vue'
import fullScreen from './main-components/fullscreen.vue'
import lockScreen from './main-components/lock-screen/index.vue'

export default {
  name: 'home',
  components: {
    shrinkableMenu,
    breadcrumbNav,
    fullScreen,
    lockScreen
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
    },
    avatorPath () {
      return localStorage.getItem('avatorImgPath')
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
      shrink: false,
      userName: '',
      isFullScreen: false
    }
  },
  methods: {
    init () {
      let pathArr = Util.setCurrentPath(this, this.$route.name)
      if (pathArr.length >= 2) {
        this.$store.commit('addOpenSubmenu', pathArr[1].name)
      }
      this.$store.commit('updateMenulist')
      this.userName = Cookies.get('user')
    },
    toggleClick () {
      this.shrink = !this.shrink
    },
    beforePush (name) {
      return true
    },
    handleSubmenuChange (val) {
      // console.log(val)
    },
    handleClickUserDropdown (name) {
      if (name === 'ownSpace') {
        this.$router.push({name: 'ownspace_index'})
      } else if (name === 'loginout') {
        this.$store.commit('logout', this)
        this.$router.push({name: 'login'})
      }
    },
    fullscreenChange (isFullScreen) {
      // console.log(isFullScreen)
    }
  }
}
</script>
<style lang="less">
  @import './main.less';
</style>
