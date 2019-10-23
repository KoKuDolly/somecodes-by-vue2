<template>
  <div class="con">
    <Input type="textarea"/>
    <div class="con1">
      <span>我们</span>
      <span>你们</span>
      <span>你们</span>
      <span>你们</span>
      <span>你们</span>
      <span>你们</span>
    </div>
    <div class="con2">
      <input type="search">
      <!-- <Input type="search" hidden/> -->
      <input type="color">
      E-mail: <input type="date" name="user_email" @change="dateChange"/>
      input <input type="text" @blur="textBlur" :value="text1">
      标签<abbr title="People's Republic of China">PRC</abbr>
      <article>
        <a href="http://www.apple.com">Safari 5 released</a><br />
        7 Jun 2010. Just after the announcement of the new iPhone 4 at WWDC,
        Apple announced the release of Safari 5 for Windows and Mac......
      </article>
    </div>
    <div class="con3">
      <Form :rules="forRule" :model="formData" inline :label-width="100">
        <FormItem label="必填时间" prop="time">
          <DatePicker type="daterange" v-model="formData.time" @on-change="timeChange"></DatePicker>
        </FormItem>
        <FormItem label="必填字符串" prop="str">
          <Input v-model="formData.str"/>
        </FormItem>
      </Form>
      <button @click="handleClick">dianji</button>
    </div>
  </div>
</template>
<script>
// import moment from 'moment'
import axios from 'axios'
export default {
  name: '',
  components: {},
  props: {},
  computed: {},
  watch: {},
  mounted () {
    // console.log(moment().format('YYYY-MM-DD'))
  },
  data () {
    return {
      text1: '11',
      formData: {
        time: [],
        str: ''
      },
      forRule: {
        time: [
          // {required: true, message: '必填', trigger: 'blur', pattern: /.+/}
          // {type: 'date', required: true, message: '必填', trigger: 'blur'}
          {
            required: true,
            validator (rule, value, callback) {
              // console.log(rule, value, callback)
              // console.log(moment(value[0]).format(), moment(value[1]).format())
              console.log(value.length)
              if (value) {
                callback()
              } else {
                callback(new Error('必填'))
              }
            },
            trigger: 'change'
          }
        ],
        str: [
          {required: true, message: '必填', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleClick () {
      // console.log('click')
      const quitFn = function quitRTC() {
        return axios.post('/api/company/list')
      }
      this.isWindowReload.addWindowReload({quit: quitFn})
    },
    dateChange (v) {
      console.log(v)
      console.log(v.target.value)
    },
    textBlur (v) {
      console.log(v)
    },
    timeChange (v) {
      console.log(v)
    }
  }
}
</script>
<style lang="less">
textarea {
  overflow: auto;
  resize: both;
}
.con1 {
  padding: 20px 0;
  line-height: 64px;
  // vertical-align: top;
  span {
    display: inline-block;
    vertical-align: middle;
  }
  span:first-child {
    font-size: 18px;
  }

  span:last-child {
    font-size: 20px;
  }
}
</style>
