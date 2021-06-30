<template>
  <div class="w-9/12 mx-auto my-12 flex">
    <div class="w-4/12 ">
        <h1 class="villian-header">BRINGING YOU THE <span class="v-span">BEST</span> AUDIO GEAR</h1>
        <h1 class="villian-text">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
            Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </h1>
        </div>
        <div>
            <img :src="villian" alt="villian-banner">
        </div>
  </div>
</template>

<script>
import villian from '../assets/images/shared/desktop/image-best-gear.jpg'

export default {
    name:'Villian',

    data() {
        return {
            villian
        }
    }
}
</script>

<style>
.villian-header {
    font-size: 40px;
    color:black;
    font-weight:700;
    padding-bottom: 35px;
    line-height: 2.5rem;
}
.villian-text {
    font-size: 15px;
    font-weight: 500;
    opacity: 0.5;
}
.v-span {
    color:#D97E4A;
}
</style>