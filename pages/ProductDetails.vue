<template>
    <section>
        <Header />
        <div v-if="product"> 
            <h1>{{ id }}</h1>
            <h1>{{ product.new_product }}</h1>
            <h1>{{ product.name }}</h1>
            <img :src="product.image" :alt="product.alt">
            <h1>{{ product.text_head }}</h1>
            <div>
                <h1>FEATURES</h1>
                <h1>{{ product.features.feature_A }}</h1>
                <h1>{{ product.features.feature_B }}</h1>
            </div>
            <!-- <div>
                <h1>IN THE BOX</h1>
                <p>{{ product.in_the_box.f1 }}</p>
                <p>{{ product.in_the_box.f2 }}</p>
                <p>{{ product.in_the_box.f3 }}</p>
                <p>{{ product.in_the_box.f4 }}</p>
                <p>{{ product.in_the_box.f5 }}</p>
            </div> -->
            <div>
                <img :src="product.display_image.image_1" >
                <img :src="product.display_image.image_2" >
                <img :src="product.display_image.image_3" >
            </div>
        </div>
        <div v-else>
            Loading...
        </div>
         

        <!-- <div class="mt-96"></div>
        <ProductType />
        <Villian />
        <Footer /> -->
    </section>
</template>

<script>
import Header from '../components/Header.vue'
import Villian from '../components/Villian.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'
import ProductType from '../components/ProductType.vue'

export default {
    name:"ProductDetails",
    components: {
        Header,
        Villian,
        Footer,
        Button,
        ProductType,
    },

    data() {
        return {
            id: this.$route.params.id,
           
            // products: [{}],
            product:{
                     name:'',
                     image:'',
                     text:'',
                     features:'',
                 },
        }
    },

    beforeMount() {
       this.products = JSON.parse(localStorage.getItem('products'))
        this.products.forEach(product => {
            if(product.id === this.id) { 
                this.product = product                
            }
        });
         
    },
     
     
}
</script>

<style>

</style>