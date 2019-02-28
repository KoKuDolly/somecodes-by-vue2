<template>
  <div>
    G6
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {},
  computed: {},
  watch: {},
  mounted () {
    this.init()
  },
  data () {
    return {}
  },
  methods: {
    init () {
      // 1.
      // const p1 = new Promise(function (resolve, reject) {
      //   setTimeout(() => reject(new Error('fail')), 5000)
      // })

      // const p2 = new Promise(function (resolve, reject) {
      //   setTimeout(() => resolve(p1), 20000)
      // })

      // console.log(p1, p2)

      // 2.
      // const promise = new Promise(function(resolve, reject) {
      //   throw new Error('test')
      // })
      // console.log(promise)

      // const promise2 = new Promise(function(resolve, reject) {
      //   reject(new Error('test2'))
      // })
      // console.log(promise2)
      // promise.catch(err => console.log(err))

      // 3.
      const promise = new Promise(function (resolve, reject) {
        resolve('ok')
        throw new Error('test')
      })
      console.log(promise)

      const promise1 = promise.then(() => { throw new Error('error') })
      console.log(promise1)

      const promise2 = promise1.then(null, (err) => console.log(err))
      console.log(promise2)
    }
  }
}
</script>
<style lang="less">

</style>
