<template>
  <div class="create-container">
    <div class="create-header">
      <div class="right">
        <Button @click="() => {this.$router.go(-1)}">返回</Button>
      </div>
    </div>
    <div class="create-content">
      <my-transition>
        <keep-alive :include="cachePage" slot="content">
          <component :is="components"></component>
        </keep-alive>
      </my-transition>
    </div>
    <div class="create-footer">
      <div class="right">
        <Button @click="prev" v-if="components !== 'create1'">上一步</Button>
        <Button @click="next" v-if="components !== 'create3'">下一步</Button>
      </div>
    </div>
  </div>
</template>
<script>
import create1 from './create1.vue'
import create2 from './create2.vue'
import create3 from './create3.vue'
import myTransition from '@/views/Rule/components/common/my-transition.vue'
export default {
  name: 'create_variaries',
  components: {create1, create2, create3, myTransition},
  data () {
    return {
      cachePage: ['variaries_add'],
      components: 'create1'
    }
  },
  methods: {
    next () {
      if (this.components === 'create1') {
        this.components = 'create2'
      } else if (this.components === 'create2') {
        this.components = 'create3'
      }
    },
    prev () {
      if (this.components === 'create2') {
        this.components = 'create1'
      } else if (this.components === 'create3') {
        this.components = 'create2'
      }
    }
  }
}
</script>
<style>
/* only */
</style>
