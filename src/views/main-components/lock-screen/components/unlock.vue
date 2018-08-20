<template>
  <transition name="show-unlock">
    <div class="unlock-body-con" v-if="showUnlock" @keydown.enter="handleUnlock">
      <div class="unlock-avator-con" @click="handleClickAvator" :style="{marginLeft: avatorLeft}">
        <img :src="avatorPath" class="unlock-avator-img">
        <div class="unlock-avator-cover">
          <span><Icon :size="30" type="ios-unlock" /></span>
          <p>解锁</p>
        </div>
      </div>
      <div class="unlock-avator-under-back" :style="{marginLeft: avatorLeft}"></div>
      <div class="unlock-input-con">
        <div class="unlock-input-overflow-con">
          <div class="unlock-overflow-body" :style="{right: inputLeft}">
            <input type="password" placeholder="密码同登陆密码" class="unlock-input" v-model="password" ref="inputEle">
            <button class="unlock-btn"
              ref="unlockBtn"
              @click="handleUnlock"
              @mousedown="unlockMousedown"
              @mouseup="unlockMouseup"
            ><Icon type="ios-key" color="white" /></button>
          </div>
        </div>
      </div>
      <div class="unlock-locking-tip-con">已锁定</div>
    </div>
  </transition>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  name: 'unlock',
  props: {
    showUnlock: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    avatorPath () {
      return localStorage.getItem('avatorImgPath')
    }
  },
  data () {
    return {
      avatorLeft: '0px',
      inputLeft: '400px',
      password: ''
    }
  },
  methods: {
    validator (str) { // 这里可以对密码和服务器做校验
      return str === '11'
    },
    handleUnlock () {
      if (this.validator(this.password)) {
        this.avatorLeft = '0px'
        this.inputLeft = '400px'
        this.password = ''
        Cookies.set('locking', '0')
        this.$emit('on-unlock')
      } else {
        this.$Message.error('密码错误')
      }
    },
    handleClickAvator () {
      this.avatorLeft = '-180px'
      this.inputLeft = '0px'
      this.$refs.inputEle.focus()
    },
    unlockMousedown () {
      this.$refs.unlockBtn.className = 'unlock-btn click-unlock-btn'
    },
    unlockMouseup () {
      this.$refs.unlockBtn.className = 'unlock-btn'
    }
  }
}
</script>
<style lang="less">
  @import '../styles/unlock.less';
</style>
