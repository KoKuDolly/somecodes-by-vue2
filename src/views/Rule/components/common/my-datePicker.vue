<template>
  <div>
    <DatePicker
      type="datetimerange"
      placement="bottom-start"
      transfer
      style="width: 300px;"
      placeholder="请选择时间"
      :options="quickSetObj"
    ></DatePicker>
  </div>
</template>
<script>
export default {
  name: 'myDatePicker',
  data () {
    return {
      quickSetObj: {
        shortcuts: [
          {
            text: '昨日',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '今日',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '上周',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '本周',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '上月',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '本月',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '去年',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '今年',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '近7天',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '近30天',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '历史-至今',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          }
        ]
      }
    }
  }
}
</script>
<style lang="less">

</style>
