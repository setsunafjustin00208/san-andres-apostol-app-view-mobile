<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const config = {
  autoplay: 2000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};

const slides = [
  {
    id: 1,
    image: 'https://picsum.photos/600/600?random=1',
    title: 'Sample Article 1',
    subtitle: 'Sample Headline 1',
    link: '#'
  },
  {
    id: 2,
    image: 'https://picsum.photos/600/600?random=2',
    title: 'Sample Article 2',
    subtitle: 'Sample Headline 2',
    link: '#'
  },
  {
    id: 3,
    image: 'https://picsum.photos/600/600?random=3',
    title: 'Sample Article 3',
    subtitle: 'Sample Headline 3',
    link: '#'
  }
];
</script>

<template>
  <div class="container">
    <h4 class="title is-3">Just In</h4>
    <h6 class="subtitle is-size-6">Latest content from our Beloved Parish</h6>
    <Carousel class="carousel-container" v-bind="config">
      <Slide v-for="slide in slides" :key="slide.id">
        <a :href="slide.link">
          <div class="carousel__item image-container">
            <img :src="slide.image" :alt="slide.title" />
            <div class="news-headline-container">
              <h4 class="title is-4">
                {{ slide.title }}
              </h4>
              <h6 class="subtitle is-6">{{ slide.subtitle }}</h6>
            </div>
          </div>
        </a>
      </Slide>
    </Carousel>
  </div>
 
</template>

<style scoped>
.carousel-container {
    width: 100%;
    max-width: 500px;
    min-width: 300px;
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