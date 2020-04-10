<!--
 * @Descripttion:
 * @version:
 * @Author: jiajun.qin
 * @Date: 2019-06-14 10:12:39
 * @LastEditors: jiajun.qin
 * @LastEditTime: 2020-04-10 20:28:11
 -->
<template>
  <div>
    mock
  </div>
</template>
<script>
export default {
  name: 'mock',
  mounted() {
    this.compare2Arr()
  },
  methods: {
    compare2Arr() {
      const arr1 = [
        { enName: 'en1', attr2: 'attr1', attr3: 'attr1', attr4: 'attr1', options: '1', funcs: 'funcs' },
        { enName: 'en1', attr2: 'attr2', attr3: 'attr2', attr4: 'attr2', options: '1', funcs: 'funcs' },
        { enName: 'en1', attr2: 'attr3', attr3: 'attr3', attr4: 'attr3', options: '1', funcs: 'funcs' }
      ]

      const arr2 = [
        { enName: 'en1', attr2: 'attr1', attr3: 'attr1', attr4: 'attr1', options: '', funcs: '' },
        { enName: 'en1', attr2: 'attr2', attr3: 'attr2', attr4: 'attr2', options: '', funcs: '' },
        { enName: 'en1', attr2: 'attr3', attr3: 'attr3', attr4: 'attr3', options: '', funcs: '' },
        { enName: 'en2', attr2: 'attr3', attr3: 'attr3', attr4: 'attr3', options: '', funcs: '' }
      ]

      let result = []
      result = arr2.map((v, i) => {
        arr1.forEach((iv, ii) => {
          if (v.enName === iv.enName && v.attr2 === iv.attr2 && v.attr3 === iv.attr3 && v.attr4 === iv.attr4) {
            v = iv
          }
        })
        return v
      })
      console.log(arr1, arr2, result)
    }
  }
}
</script>
