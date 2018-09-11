<template>
  <div>
    <Select transfer style="width: 300px;">
      <Option :value="value.value" :key="index" v-for="(value, index) in data">{{value.label}}</Option>
    </Select>
  </div>
</template>
<script>
export default {
  name: 'mySelect',
  props: ['data']
}
</script>
<style>

</style>
