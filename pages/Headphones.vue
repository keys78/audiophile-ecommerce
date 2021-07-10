<template>
    <section>
        <Header class="bg-black"/>
        <div class="sub-hero">
            <h1>HEADPHONES</h1>
        </div>

        <section class="xl:w-9/12 w-11/12 mx-auto mt-32 mb-52">
            <div v-for="product in filteredProducts" :key="product.id" class="pb-28">
                <div :class="{'pomd' : product.style}" class="flex">
                    <div class="lg:w-5/12 w-6/12">
                        <h1 :class="{'new-product' : !product.new_product }" class="new-text">NEW PRODUCT</h1>
                        <h1 class="headphones-text text-black">{{ product.name }}</h1>
                        <p class="headphones-desc">{{ product.text_head }}</p>
                        <NuxtLink :to="{name: 'ProductDetails', params: { id:product.id }}">
                            <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
                        </NuxtLink>
                    </div>
                    <div class="hp-img-1 lg:w-5/12 w-7/12">
                        <img :src="product.image" :alt="product.alt" class="xx99">
                    </div>
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
import products from '../data/products.js'
import Header from '../components/Header.vue'
import ProductType from '../components/ProductType.vue'
import Villian from '../components/Villian.vue'
import Footer from '../components/Footer.vue'

export default {
    name:"Headphones",
    components: {
        Header,
        Villian,
        Footer,
        ProductType,
    },

    data() {
        return {
            products:products
        }
    },

      beforeMount() {
        localStorage.setItem('products', JSON.stringify(this.products))
     },

    computed: {
        filteredProducts() {
        return this.products.filter((product) => product.category === "headphones")}
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
.pomd{
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.new-product{
    display: none;
}
</style>