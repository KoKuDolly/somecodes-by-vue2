const LineChart = function (id) {
  /* 绘制工具 */
  this.ctx = document.querySelector(`#${id}`).getContext('2d')
  /* 坐标原点 */
  this.space = 20
  this.width = this.ctx.canvas.width
  this.height = this.ctx.canvas.height
  this.x0 = this.space
  this.y0 = this.height - this.space
  /* 箭头大小 */
  this.arrow = 10
  /* 点相关  点大小 */
  this.edge = 10
}
/* 初始化方法 */
LineChart.prototype.init = function (data) {
  this.drawAxis()
  this.drawDotted(data)
}
/* 绘制坐标轴 */
LineChart.prototype.drawAxis = function () {
  /* X轴 */
  this.ctx.moveTo(this.x0, this.y0)
  this.ctx.lineTo(this.width - this.space, this.y0)
  this.ctx.lineTo(this.width - this.space - this.arrow, this.y0 + this.arrow / 2)
  this.ctx.lineTo(this.width - this.space - this.arrow, this.y0 - this.arrow / 2)
  this.ctx.lineTo(this.width - this.space, this.y0)
  this.ctx.stroke()
  this.ctx.fill()
  /* Y轴 */
  this.ctx.moveTo(this.x0, this.y0)
  this.ctx.lineTo(this.space, this.space)
  this.ctx.lineTo(this.space + this.arrow / 2, this.space + this.arrow)
  this.ctx.lineTo(this.space - this.arrow / 2, this.space + this.arrow)
  this.ctx.lineTo(this.space, this.space)
  this.ctx.stroke()
  this.ctx.fill()
}
/* 转换点坐标 */
LineChart.prototype.formatDot = function (data) {
  const that = this
  let canvasData = []
  data.forEach(function (item, i) {
    const cx = item.x + that.x0
    const cy = that.y0 - item.y
    canvasData.push({
      x: cx,
      y: cy
    })
  })
  return canvasData
}
/* 绘制多个点 */
LineChart.prototype.drawDotted = function (data) {
  const that = this
  /* 转换 */
  const canvasData = this.formatDot(data)
  // console.log(canvasData)
  canvasData.forEach(function (item, i) {
    that.ctx.beginPath()
    that.ctx.moveTo(item.x - that.edge / 2, item.y - that.edge / 2)
    that.ctx.lineTo(item.x + that.edge / 2, item.y - that.edge / 2)
    that.ctx.lineTo(item.x + that.edge / 2, item.y + that.edge / 2)
    that.ctx.lineTo(item.x - that.edge / 2, item.y + that.edge / 2)
    that.ctx.closePath()
    that.ctx.fill()

    that.ctx.beginPath()
    if (i + '' === '0') {
      that.ctx.moveTo(that.x0, that.y0)
    } else {
      that.ctx.moveTo(canvasData[i - 1].x, canvasData[i - 1].y)
    }
    that.ctx.lineTo(item.x, item.y)
    that.ctx.stroke()
  })
}

export {
  LineChart
}
