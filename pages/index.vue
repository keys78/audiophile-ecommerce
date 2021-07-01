<template>
  <section>
    <Header style="z-index:9999999999999"/>
    <div class="hero-container relative">
      <img class="hero mx-auto" :src="HERO"  alt="hero" />
      <div class="absolute w-9/12 mx-auto top-44 left-48">
        <div class="w-4/12">
          <h1 class="hero-1-text">NEW PRODUCT</h1>
          <h1 class="hero-2-text">XX99 MARK II HEADPHONE</h1>
          <p class="desc">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
        </div>
      </div>
    </div>

    <div class="my-40">
      <ProductType />
    </div>

    <section class="w-9/12 mx-auto">
      <!---showcase-1-->
      <div class="showcase-1 relative overflow-y-hidden pb-40">
        <img :src="patternCirle" class="cirle-pattern -ml-20">
        <div class="absolute w-full h-full overflow-y-hidden top-0 left-0">

          <div class="w-9/12 mx-auto flex-start gap-20 pt-20 ">
            <div>
              <img :src="zx9Speaker" class="zx9">
            </div>
            <div class="pl-10">
              <h1 class="text-5xl text-white font-bold pt-12">ZX9 <br> SPEAKER</h1>
              <p class="zx9-text py-10">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Button text="SEE PRODUCT" bgcolor="black" textColor="hsl(0, 0%, 98%)" />
            </div>
          </div>

        </div>
      </div>

      <!--showcase-2-->
      <div class="showcase-2 border-2 relative">
        <img :src="zx7Speaker" class="zx7">
        <div class="absolute top-0 left-0">
            <div class="w-full mx-auto pt-12">
              <h1 class="text-2xl text-black"> ZX7 SPEAKER </h1>
              <Button text="SEE PRODUCT" bgcolor="none" textColor="black" class="border-2 border-black" />
            </div>
        </div>
      </div>

      <!-- showcase-2 -->
      <div class="showcase flex">
        <div>
          <img :src="yx1Earphones" >
        </div>
        <div class="">
          <Button text="SEE PRODUCT" bgcolor="white" textColor="black" class="border-2 border-black" />
        </div>

      </div>
    </section>

    <!-- <Villian /> -->
    <!-- <Footer /> -->
  </section>
</template>

<script>
import Header from '../components/Header.vue'
import Villian from '../components/Villian.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'
import ProductType from '../components/ProductType.vue'
import HERO from '../assets/images/home/desktop/image-hero-2.jpg'
import yx1Earphones from '../assets/images/home/desktop/image-earphones-yx1.jpg'
import zx7Speaker from '../assets/images/home/desktop/image-speaker-zx7.jpg'
import zx9Speaker from '../assets/images/home/desktop/image-speaker-zx9.png'
import patternCirle from '../assets/images/home/desktop/pattern-circles.svg'

export default {
  components: {
    Header,
    Villian,
    Footer,
    Button,
    ProductType,
    Villian
    
  },
  data() {
    return {
      HERO,
      yx1Earphones,
      zx7Speaker,
      zx9Speaker,
      patternCirle
    }
  }
}
</script>

<style>
.hero-container {
  background: #191919;
}
.hero-1-text {
  letter-spacing: 10px;
  color: hsla(0, 0%, 98%, 0.562);
  font-size: 13px;
}

.hero-2-text {
  font-weight: 800;
  color: hsl(0, 0%, 98%);
  font-size: 3.5rem;
  padding: 13px 0 30px 0;
  line-height: 3.4rem;
}
.desc{
  color: hsla(0, 0%, 98%, 0.685);
  padding-bottom: 25px;
  font-weight: 500;

}
.showcase-1 {
  background: #D97E4A;;
  height: 75vh;
  border-radius: 10px;
}
.circle-pattern {
  width: 100%;
}
.zx9 {
  width: 815px;
}
.zx9-text {
  color: hsla(0, 0%, 98%, 0.726);
}

/* 
.showcase-2 {
  
} */


.zx7{
  width: 100%;
  border-radius: 10px;
  margin:20px 0 20px 0;
}
</style>