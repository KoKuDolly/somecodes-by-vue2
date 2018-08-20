<template>
  <div class="full-screen-btn-con" @click="handleChange" v-if="showFullScreenBtn">
    <Tooltip :content="value?'退出全屏':'全屏'">
      <Icon :type="value?'ios-contract':'ios-expand'" :size="23" />
    </Tooltip>
  </div>
</template>
<script>
export default {
  name: 'fullScreen',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showFullScreenBtn () {
      return window.navigator.userAgent.indexOf('MSIE') < 0
    }
  },
  created () {
    let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
    isFullscreen = !!isFullscreen
    document.addEventListener('fullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    document.addEventListener('mozfullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    document.addEventListener('webkitfullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    document.addEventListener('msfullscreenchange', () => {
      this.$emit('input', !this.value)
      this.$emit('on-change', !this.value)
    })
    this.$emit('input', isFullscreen)
  },
  methods: {
    handleFullScreen () {
      let main = document.body
      if (this.value) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancleFullScreen) {
          document.mozCancleFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }
    },
    handleChange () {
      this.handleFullScreen()
    }
  }
}
</script>
<style>

</style>
