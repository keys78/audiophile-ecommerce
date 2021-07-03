<template>
    <section>
        <Header />
        <div>
            <h1>{{ id }}</h1>
            <h1>{{ product.name }}</h1>
            <h1>{{ product.text }}</h1>
            <h1>{{ product.features }}</h1>
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
            product:{},
            products: [],
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