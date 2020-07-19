/*
 * @Descripttion:
 * @version:
 * @Author: jiajun.qin
 * @Date: 2019-11-15 18:33:05
 * @LastEditors: jiajun.qin
 * @LastEditTime: 2020-07-19 19:11:07
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import App from './App'
import {router} from './router'
import store from './store/'
import '@/styles/index.less'
import { isWindowReload } from '@/utils/windows.js'
// import pdfjsLib from 'pdfjs-dist'

Vue.prototype.isWindowReload = isWindowReload

Vue.config.productionTip = false
Vue.use(iView)

// var pdfjsLib = require('pdfjs-dist')

// var pdfPath = './pdf/helloworld.pdf'

// // Setting worker path to worker bundle.
// pdfjsLib.GlobalWorkerOptions.workerSrc =
//   '../../build/webpack/pdf.worker.bundle.js'

// // Loading a document.
// var loadingTask = pdfjsLib.getDocument(pdfPath)
// loadingTask.promise
//   .then(function (pdfDocument) {
//     // Request a first page
//     return pdfDocument.getPage(1).then(function (pdfPage) {
//       // Display page on the existing canvas with 100% scale.
//       var viewport = pdfPage.getViewport({ scale: 1.0 })
//       var canvas = document.getElementById('theCanvas')
//       canvas.width = viewport.width
//       canvas.height = viewport.height
//       var ctx = canvas.getContext('2d')
//       var renderTask = pdfPage.render({
//         canvasContext: ctx,
//         viewport: viewport
//       })
//       return renderTask.promise
//     })
//   })
//   .catch(function (reason) {
//     console.error('Error: ' + reason)
//   })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
