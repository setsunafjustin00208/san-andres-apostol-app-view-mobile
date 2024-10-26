<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const config = {
  autoplay: 2000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
</script>

<template>
  <Carousel v-bind="config">
    <Slide v-for="slide in 3" :key="slide">
      <div class="carousel__item image-container">
        <img src="https://picsum.photos/600/300" alt="Random" />
        <div class="news-headline-container">
          <h4 class="title is-4">Sample Article</h4>
          <h6 class="subtitle is-6"> Sample Headline</h6>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>



<style scoped>
.carousel-container {
    width: 100%;
    max-width: 600px;
    margin: auto;
}

img {
    width: 100%;
    height: auto;
}

h3 {
    text-align: center;
}

p {
    text-align: center;
}
.image-container {
  position: relative;
  
}
.news-headline-container {
  position: absolute;
  bottom: 18px;
  left: 16px;
  text-align: left;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.subtitle{
  color: white
  
}
</style>