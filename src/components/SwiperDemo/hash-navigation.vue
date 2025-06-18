<template>
  <swiper
      :loop="false"
      :spaceBetween="10"
      :slidesPerView="4"
      :navigation="true"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      :thumbs="{ swiper: thumbsSwiper }"
      class="mySwiper"
      @navigationPrev="navigationPrev"
      @navigationHide="navigationHide"
      @activeIndexChange="activeIndexChange"
      :pagination="{
      clickable: true,
    }"
  >
    <swiper-slide
    ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide
  ><img
      src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
  ><swiper-slide
  ><img
      src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
  ><swiper-slide
  ><img
      src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
  ><swiper-slide
  ><img
      src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
  ><swiper-slide
  ><img
      src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
  ><swiper-slide
  ><img
      src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
  ><swiper-slide
  ><img
      src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
  ><swiper-slide
  ><img
      src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
  ><swiper-slide
  ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
  /></swiper-slide>
  </swiper>
</template>
<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import './style.css';

// import required modules
import { FreeMode, Navigation, Thumbs ,Pagination} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    const navigationPrev=()=>{
      alert(`点击了${thumbsSwiper.value}`)
    }

    const navigationHide=()=>{
      alert(`点击了navigationHide`)
    }

    const activeIndexChange=(item)=>{
      console.log('item',item)
    }
    return {
      thumbsSwiper,
      setThumbsSwiper,
      navigationPrev,
      navigationHide,
      activeIndexChange,
      modules: [FreeMode, Navigation, Thumbs,Pagination],
    };
  },
};
</script>
