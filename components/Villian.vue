<template>
  <div class="lg:w-9/12 w-11/12 mx-auto my-12 flex md:flex-row flex-col-reverse">
    <div class="md:w-4/12 md:mt-0 mt-12 w-11/12 md:text-left text-center">
        <h1 class="villian-header md:text-4xl text-3xl">BRINGING YOU THE <span class="v-span">BEST</span> AUDIO GEAR</h1>
        <h1 class="villian-text">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
            Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </h1>
    </div>
    <div>
        <img :src="villian" alt="villian-banner" >
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
    color:black;
    font-weight:700;
    padding-bottom: 20px;
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