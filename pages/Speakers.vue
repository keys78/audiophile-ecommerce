<template>
    <section>
        <Header class="bg-black"/>
        <div class="sub-hero">
            <h1>SPEAKERS</h1>
        </div>
        
        <section class="xl:w-9/12 w-11/12 mx-auto mt-32 mb-60">
            <div class="flex">
                <div class="lg:w-4/12 w-5/12">
                    <h1 class="new-text">NEW PRODUCT</h1>
                    <h1 class="headphones-text text-black">ZX9 SPEAKER</h1>
                    <p class="headphones-desc">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                    <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
                </div>
                <div class="hp-img-1 lg:w-5/12 w-6/12">
                    <img :src="zx9" alt="speakers" class="xx99">
                </div>
            </div>

            
            <div class="flex my-40">
                <div class="hp-img-1 lg:w-5/12 w-6/12">
                    <img :src="zx7" alt="speakers" class="xx99">
                </div>
                <div class="lg:w-4/12 w-5/12">
                    <h1 class="headphones-text text-black">ZX7 SPEAKER</h1>
                    <p class="headphones-desc">Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                    <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
                </div>
            </div>

        </section>

        
        <ProductType />
        <div class="py-32">
            <Villian />
        </div>
        <Footer />

    </section>
</template>

<script>
import Header from '../components/Header.vue'
import ProductType from '../components/ProductType.vue'
import Villian from '../components/Villian.vue'
import Footer from '../components/Footer.vue'
import zx7 from '../assets/images/category-speakers/desktop/image-zx7.jpg'
import zx9 from '../assets/images/category-speakers/desktop/image-zx9.jpg'


export default {
    name:"Speakers",
    data() {
        return {
            Header,
            Villian,
            Footer,
            ProductType,
            zx7,
            zx9
        }
    }
}
</script>

<style>
</style>