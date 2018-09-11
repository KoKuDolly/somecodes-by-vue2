<template>
  <div>
    <Tree :data="pageAuth" show-checkbox @on-check-change="treeCheckChange"/>
  </div>
</template>
<script>
export default {
  name: 'RoleTree',
  props: {
    data: Array
  },
  watch: {
    data () {
      this.init()
    }
  },
  computed: {

  },
  mounted () {
    this.init()
  },
  data () {
    return {
      pageAuth: []
    }
  },
  methods: {
    init () {
      this.pageAuth = [...this.data]
    },
    treeCheckChange (selectArr) {
      const tempArr = [...selectArr]
      let params = []
      tempArr.forEach(item => {
        params.push(item.id)
      })
      this.$emit('treeSelect', JSON.parse(JSON.stringify(params)))
    }
  }
}
</script>
<style lang="less" scoped>

</style>
