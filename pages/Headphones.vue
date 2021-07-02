<template>
    <section>
        <Header class="bg-black"/>
        <div class="sub-hero">
            <h1>HEADPHONES</h1>
        </div>
        
        <section class="xl:w-9/12 w-11/12 mx-auto mt-32 mb-60">
            <div class="flex">
                <div class="lg:w-4/12 w-5/12">
                    <h1 class="new-text">NEW PRODUCT</h1>
                    <h1 class="headphones-text text-black">XX99 MARK TWO HEADPHONES</h1>
                    <p class="headphones-desc">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <NuxtLink :to="{name: 'ProductDetails', params: { id:1 }}">
                        <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
                    </NuxtLink>
                </div>
                <div class="hp-img-1 lg:w-5/12 w-6/12">
                    <img :src="xx99" alt="headphones" class="xx99">
                </div>
            </div>

            
            <div class="flex my-40">
                <div class="hp-img-1 lg:w-5/12 w-6/12">
                    <img :src="xx991" alt="headphones" class="xx99">
                </div>
                <div class="lg:w-4/12 w-5/12">
                    <h1 class="headphones-text text-black">XX99 MARK ONE HEADPHONES</h1>
                    <p class="headphones-desc">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                    <NuxtLink :to="{name: 'ProductDetails', params: { id:2 }}">
                        <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
                    </NuxtLink>
                </div>
            </div>


            <div class="flex">
                <div class="lg:w-4/12 w-5/12">
                    <h1 class="headphones-text text-black">XX59 HEADPHONES</h1>
                    <p class="headphones-desc">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                    <NuxtLink :to="{name: 'ProductDetails', params: { id:3 }}">
                        <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
                    </NuxtLink>
                </div>
                <div class="hp-img-1 lg:w-5/12 w-6/12">
                    <img :src="xx59" alt="headphones" class="xx99">
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
import xx99 from '../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg'
import xx991 from '../assets/images/category-headphones/desktop/image-xx99-mark-one.jpg'
import xx59 from '../assets/images/category-headphones/desktop/image-xx59.jpg'


export default {
    name:"Headphones",
    data() {
        return {
            Header,
            Villian,
            Footer,
            ProductType,
            xx99,
            xx991,
            xx59
        }
    }
}
</script>

<style>
.new-text {
  letter-spacing: 10px;
  color: #D97E4A;
  font-size: 13px;
  padding-bottom: 14px;

}

.sub-hero {
    background: black;
     padding:4.5rem 0;
   
}
.sub-hero h1{
    color:white;
    text-align: center;
    font-size:40px;
    font-weight: 700;
    margin-bottom: 15px;
   
}
.xx99 {
    border-radius: 10px;
}

.headphones-text {
  font-weight: 700;
  color: hsl(0, 0%, 0%);
  font-size: 40px;
  line-height: 3rem;

}
.headphones-desc {
    color:black;
    opacity: 0.5;
    padding:30px 0 45px 0;
}
</style>