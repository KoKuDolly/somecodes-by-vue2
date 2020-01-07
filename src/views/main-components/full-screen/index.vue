<template>
  <div>
    <Carousel
      :height="windowHeight"
    >
      <CarouselItem>1</CarouselItem>
      <CarouselItem>2</CarouselItem>
      <CarouselItem>3</CarouselItem>
      <CarouselItem>4</CarouselItem>
    </Carousel>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui'
export default {
  name: 'fullscreenCarousel',
  components: {
    Carousel,
    CarouselItem
  },
  data () {
    return {
      windowHeight: document.body.clientHeight + 'px'
    }
  },
  created () {
    console.log(document.body.clientHeight)
    window.addEventListener('resize', this.handleWindowResize)
  },
  methods: {
    handleWindowResize(e) {
      console.log(e, document.body.clientHeight)
      this.windowHeight = document.body.clientHeight
    }
  }
}
</script>
<style>
.el-carousel__item {
  background: rgb(0, 0, 0)
}
</style>
