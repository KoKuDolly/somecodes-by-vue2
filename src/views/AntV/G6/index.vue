<template>
  <div>
    <Form :v-model="formOneData">
      <FormItem>
        <Select filterable v-model="formOneData.selectOneValue" style="width: 300px;" @on-change="handleOneChange">
          <Option v-for="(item, index) in list" :key="index" :value="item.code" :label="item.name"></Option>
        </Select>
      </FormItem>
    </Form>
    <Form :v-model="formTwoData">
      <Select filterable v-model="formTwoData.selectTwoValue" style="width: 300px;" @on-change="handleTwoChange">
        <Option v-for="(item, index) in list" :key="index" :value="item.code" :label="item.name"></Option>
      </Select>
    </Form>
  </div>
</template>
<script>
// filterable 属性 会导致两个关联 select 组件之间 的 值的控制
export default {
  name: '',
  components: {},
  props: {},
  computed: {},
  watch: {},
  mounted () {
    // this.init()
  },
  data () {
    return {
      formOneData: {
        selectOneValue: ''
      },
      formTwoData: {
        selectTwoValue: ''
      },
      list: [
        {
          name: '00',
          code: '00'
        },
        {
          name: '01',
          code: '01'
        },
        {
          name: '02',
          code: '02'
        },
        {
          name: '03',
          code: '03'
        }
      ]
    }
  },
  methods: {
    handleOneChange () {
      console.log(this.formOneData.selectOneValue)
      this.formTwoData.selectTwoValue = this.formOneData.selectOneValue
    },
    handleTwoChange () {
      console.log(this.formTwoData.selectTwoValue)
      this.formOneData.selectOneValue = this.formTwoData.selectTwoValue
    },
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
