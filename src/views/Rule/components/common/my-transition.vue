<template>
  <transition
    name="component-fade"
    mode="out-in"
  >
    <slot name="content"></slot>
  </transition>
</template>
<script>
export default {
  name: 'myTransition',
  methods: {
    beforeEnter (el) {
      // el.style.opacity = 0
      // el.style.position = 'absolute'

      // el.style.transformOrigin = 'left'
    },
    enter (el, done) {
      // el.style.opacity = 1
      // el.style.transition = 'all 0.5s ease'
      // el.style.transform = 'translate(-100px)'
      done()
    },
    leave (el, done) {
      // el.style.opacity = 0
      // el.style.transform = 'translate(100px)'
      // done()
    }
  }
}
</script>
<style>
/* only */
.component-fade-enter-active, .component-fade-leave-active {
  transition: all 0.3s ease;
}

.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  /* opacity: 0; */
  /* transform: translate(-100%); */
  animation: moveToLeft 0.5s ease;
}

@keyframes moveToLeft {
  from {
    transform: translate(0%)
  }
  to {
    transform: translate(-100%)
  }
}
</style>
