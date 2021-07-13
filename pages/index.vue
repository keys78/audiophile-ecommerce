<template>
  <section>
    <Header style="z-index:9999999999999"/>
    <div class="hero-container relative">
      <img class="hero mx-auto lg:block hidden" :src="HERO"  alt="hero" />
      <img class="hero-m mx-auto lg:hidden sm:block hidden" :src="HEROT"  alt="hero" />
      <img class="hero-m mx-auto sm:hidden block" :src="HEROM"  alt="hero" />

      <div class="absolute w-full h-full mx-auto sm:top-40 top-36 left-0">
        <div class="lg:w-9/12 w-11/12 mx-auto">
          <div class="xl:w-4/12 md:w-6/12 md:text-left text-center">
            <h1 class="hero-1-text">NEW PRODUCT</h1>
            <h1 class="hero-2-text">XX99 MARK II HEADPHONE</h1>
            <p class="desc">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <NuxtLink :to="{name: 'ProductDetails', params: { id: 1 }}">
                <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>

    <div class="my-40">
      <ProductType />
    </div>

    <section class="lg:w-9/12 w-11/12 mx-auto">
      <!---showcase-1-->
      <div class="showcase-1 relative overflow-y-hidden pb-40">
        <img :src="patternCirle" class="cirle-pattern -ml-20">
        <div class="absolute w-full h-full overflow-y-hidden top-0 left-0">

          <div class="sm:w-9/12 w-11/12 mx-auto flex-start md:flex-row flex-col sm:gap-20 gap-2 sm:pt-20 pt-16 ">
            <div class="w-full">
              <img :src="zx9Speaker" class="zx9 w-96 sm:block hidden">
              <img :src="zx9SpeakerM" class="zx9 w-60 mx-auto sm:hidden block">
            </div>
            <div class="sm:pl-10 ml-0">
              <h1 class="sm:text-5xl text-3xl text-white font-bold sm:pt-12 pt-4 sm:text-left text-center md:block hidden">ZX9 <br> SPEAKER</h1>
              <h1 class="sm:text-5xl text-3xl text-white font-bold sm:pt-12 pt-4 sm:text-left text-center md:hidden block">ZX9 SPEAKER</h1>
              <p class="zx9-text sm:py-10 py-3">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
               <NuxtLink :to="{name: 'ProductDetails', params: { id: 4 }}">
                  <Button text="SEE PRODUCT" bgcolor="black" textColor="hsl(0, 0%, 98%)" />
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>

      <!--showcase-2-->
      <div class="showcase-2 relative sm:my-0 my-10">
        <img :src="zx7Speaker" class="zx7 sm:block hidden">
        <img :src="zx7SpeakerM" class="zx7 sm:hidden block">
        <div class="absolute w-full h-full top-0 left-0">
            <div class="h-full w-10/12 mx-auto mx-auto pt-12">
              <h1 class="text-3xl pt-16 text-black font-semibold"> ZX7 SPEAKER </h1>
              <NuxtLink :to="{name: 'ProductDetails', params: { id: 5 }}">
                  <Button text="SEE PRODUCT" bgcolor="none" textColor="black" class="mt-10 border border-black" />
              </NuxtLink>
            </div>
        </div>
      </div>

      <!-- showcase-3 -->
      <div class="showcase flex sm:flex-row sm:gap-6 gap-2 flex-col">
        <div class="sm:w-6/12 w-full">
          <img :src="yx1Earphones" class="yx1">
        </div>
        <div class="showcase-3b pt-28 pl-6 sm:w-6/12 w-full">
          <h1 class="text-3xl mb-10 text-black font-semibold"> YX1 EARPHONES </h1>
          <NuxtLink :to="{name: 'ProductDetails', params: { id: 6 }}">
            <Button text="SEE PRODUCT" bgcolor="white" textColor="black" class="border border-black" />
          </NuxtLink>
        </div>

      </div>
    </section>

    <div class="pt-28 pb-6">
      <Villian  />
    </div>
    <Footer />
  </section>
</template>

<script>
import Header from '../components/Header.vue'
import Villian from '../components/Villian.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'
import ProductType from '../components/ProductType.vue'
import HERO from '../assets/images/home/desktop/image-hero-2.jpg'
import HEROM from '../assets/images/home/mobile/image-header.jpg'
import HEROT from '../assets/images/home/tablet/image-header.jpg'
import yx1Earphones from '../assets/images/home/desktop/image-earphones-yx1.jpg'
import zx7Speaker from '../assets/images/home/desktop/image-speaker-zx7.jpg'
import zx7SpeakerM from '../assets/images/home/mobile/image-speaker-zx7.jpg'
import zx9Speaker from '../assets/images/home/desktop/image-speaker-zx9.png'
import zx9SpeakerM from '../assets/images/home/mobile/image-speaker-zx9.png'
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
      HEROM,
      HEROT,
      yx1Earphones,
      zx7Speaker,
      zx7SpeakerM,
      zx9Speaker,
      zx9SpeakerM,
      patternCirle
    }
  },
 
}
</script>

<style>
.hero{
  height: 95vh;
}
.hero-m {
  height: 95vh;
}
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

.zx9-text {
  color: hsla(0, 0%, 98%, 0.726);
}

.zx7{
  width: 100%;
  height: 360px;
  border-radius: 10px;
  margin:20px 0 20px 0;
}
.yx1 {
    border-radius: 10px;
    height: 360px;
}

.showcase-3b {
  background: #F2F2F2;
   border-radius: 10px;
   height: 360px;
}

</style>