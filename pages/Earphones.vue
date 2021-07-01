<template>
    <section>
        <Header class="bg-black"/>
        <div class="sub-hero">
            <h1>EARPHONES</h1>
        </div>
        
        <section class="xl:w-9/12 w-11/12 mx-auto mt-32 mb-60">
            <div class="flex">
                <div class="hp-img-1 lg:w-5/12 w-6/12">
                    <img :src="yx1" alt="speakers" class="xx99">
                </div>
                <div class="lg:w-4/12 w-5/12">
                    <h1 class="new-text">NEW PRODUCT</h1>
                    <h1 class="headphones-text text-black">YX1 WIRELESS EARPHONES</h1>
                    <p class="headphones-desc">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
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
import yx1 from '../assets/images/category-earphones/desktop/image-yx1-earphones.jpg'



export default {
    name:"Speakers",
    data() {
        return {
            Header,
            Villian,
            Footer,
            ProductType,
            yx1
        }
    }
}
</script>

<style>
</style>