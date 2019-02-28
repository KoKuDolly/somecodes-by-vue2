<template>
  <div>
    <Input placeholder="列表字段模糊搜索" style="width: 300px;" suffix="ios-search" @on-click="handleListSearch" icon="ios-search"/>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'my-search-input',
  methods: {
    ...mapMutations('rules', ['myTestMutations']),
    handleListSearch () {
      console.log('click', this.$store)
      this.$store._actions['rules/myTestSearchKey'][0]('myTestSearchKey', 'test-actions-object')
      this.$store._mutations['rules/myTestMutations'][0]('my-test-payload')
      // this.$store.commit()
      this.myTestMutations('my-test-payload')
    }
  }
}
</script>
