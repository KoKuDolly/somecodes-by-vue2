/* 申明一个构造函数 */
var PieChart = function (id) {
  /* 画笔 */
  this.ctx = document.querySelector(`#${id}`).getContext('2d')
  /* 画布尺寸 */
  this.canvasWidth = this.ctx.canvas.width
  this.canvasHeight = this.ctx.canvas.height
  /* 获取中心点 */
  this.x0 = this.canvasWidth / 2 + 50
  this.y0 = this.canvasHeight / 2
  /* 半径 */
  this.radius = 150
  /* 延伸的长度 */
  this.lineOut = 20
}
PieChart.prototype.init = function (data) {
  this.drawPie(data)
}
/* 数据转换弧度 */
PieChart.prototype.transform = function (data) {
  var canvasData = []
  var total = 0
  data.forEach(function (item) {
    total += item.num
  })
  /* 计算弧度 */
  data.forEach(function (item) {
    var angle = item.num / total * 2 * Math.PI
    canvasData.push({
      title: item.title,
      num: item.num,
      angle: angle
    })
  })
  return canvasData
}
/* 获取随机颜色 */
PieChart.prototype.getRandomColor = function () {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}
/* 饼图绘制 */
PieChart.prototype.drawPie = function (data) {
  var that = this
  var canvasData = that.transform(data)
  console.log(canvasData)
  var startAngle = 0
  canvasData.forEach(function (item, i) {
    that.ctx.beginPath()
    that.ctx.moveTo(that.x0, that.y0)
    that.ctx.arc(that.x0, that.y0, that.radius, startAngle, startAngle + item.angle)
    // that.ctx.strokeStyle = that.ctx.fillStyle = that.getRandomColor();
    var color = that.ctx.fillStyle = that.getRandomColor()
    that.ctx.fill()
    /* 进行标题的绘制 */
    that.drawTitle(startAngle, item.angle, color, item.title)
    /* 进行说明的绘制 */
    that.drawDesc(color, item.title, i)
    /* 记录起始弧度 */
    startAngle = startAngle + item.angle
  })
}
/* 绘制标题 */
PieChart.prototype.drawTitle = function (startAngle, angle, color, title) {
  var edge = this.radius + this.lineOut
  var xEdge = Math.cos(startAngle + angle / 2) * edge
  var yEdge = Math.sin(startAngle + angle / 2) * edge
  /* 计算延伸点坐标 */
  this.ctx.beginPath()
  this.ctx.moveTo(this.x0, this.y0)
  this.ctx.lineTo(this.x0 + xEdge, this.y0 + yEdge)
  /* 绘制横向线 */
  /* 绘制文字 */
  var textWidth = this.ctx.measureText(title).width
  if (xEdge > 0) {
    this.ctx.lineTo(this.x0 + xEdge + textWidth, this.y0 + yEdge)
    this.ctx.textAlign = 'left'
  } else {
    this.ctx.lineTo(this.x0 + xEdge - textWidth, this.y0 + yEdge)
    this.ctx.textAlign = 'right'
  }
  this.ctx.textBaseline = 'bottom'
  this.ctx.fillText(title, this.x0 + xEdge, this.y0 + yEdge)
  this.ctx.strokeStyle = color
  this.ctx.stroke()
}
/* 绘制说明 */
PieChart.prototype.drawDesc = function (color, title, index) {
  /* 矩形的大小 */
  /* 矩形起始位置 */
  var x = 20
  var y = 20
  this.ctx.beginPath()
  this.ctx.fillRect(x, y + index * (16 + 10), 30, 16)
  this.ctx.textAlign = 'left'
  this.ctx.fillText(title, x + 30 + 10, y + index * (16 + 10) + 16)
}

export {PieChart}
