<template>
  <div>
    <Select transfer style="width: 300px;" @on-query-change="handleFilter">
      <Option :value="value.value" :key="index" v-for="(value, index) in data">{{value.label}}</Option>
    </Select>
  </div>
</template>
<script>
export default {
  name: 'mySelect',
  props: ['data'],
  methods: {
    handleFilter (query) {
      console.log(query)
    }
  }
}
</script>
<style>

</style>
