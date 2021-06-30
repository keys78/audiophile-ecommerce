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
  </section>
</template>

<script>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import ProductType from '../components/ProductType.vue'
import HERO from '../assets/images/home/desktop/image-hero-2.jpg'

export default {
  components: {
    Header,
    Button,
    ProductType
    
  },
  data() {
    return {
      HERO
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
</style>