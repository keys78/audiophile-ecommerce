<template>
    <section>
        <Header />

        <div v-for="product in filteredProducts" :key="product.id" class="lg:w-9/12 w-11/12 mx-auto sm:mt-20 mt-10">

            <button @click="goBack" class="hover:text-yellow-800 text-sm opacity-50 font-bold cursor:pointer py-4"> Go Back</button>
            <div class="flex md:flex-row flex-col mb-20">
                <div class="hp-img-1 md:w-5/12 w-11/12">
                    <img :src="product.image" :alt="product.alt" class="xx99">
                </div>
                <div class="lg:w-5/12 md:w-6/12 w-11/12 md:mt-0 mt-8">
                    <h1 v-show="product.new_product = true" class="new-text">NEW PRODUCT</h1>
                    <h1 class="headphones-text text-black">{{ product.name }}</h1>
                    <p class="headphones-description">{{ product.text_head }}</p>
                    <h1 class="py-6 font-bold">${{ product.unit_price.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</h1>

                    <div class="flex items-center">
                        <div>
                            <span class="amount-control">
                                <button @click="decrease_quantity" class="pl-3">-</button>
                                <span v-if="product_quantity" id="numb">{{ product_quantity }}</span>
                                <span v-else id="numb">{{ 1 }}</span>
                                <button @click="increase_quantity" class="pr-3">+</button>
                            </span>
                        </div>
                        
                        <div>
                            <button class="checkout-btn hovie" @click="addToCart">{{ product.add_to_cart_btn }}</button>
                        </div>
                    </div>
                        
                </div>
            </div>


            <div class="flex md:flex-row flex-col justify-between items-start">
                <div class="md:w-7/12 w-11/12">
                    <h1 class="sub-headers">FEATURES</h1>
                    <h1 class="phones-desc pb-5">{{ product.features.feature_A }}</h1>
                    <h1 class="phones-desc">{{ product.features.feature_B }}</h1>
                </div>
                <div class="md:w-4/12 w-11/12 size-text md:mt-0 mt-12">
                    <h1 class="sub-headers">IN THE BOX</h1>
                    <p><span class="size-x">{{ product.in_the_box.f1.size }}</span>  <span class="text-x">{{ product.in_the_box.f1.text }}</span></p>
                    <p><span class="size-x">{{ product.in_the_box.f2.size }}</span>  <span class="text-x">{{ product.in_the_box.f2.text }}</span></p>
                    <p><span class="size-x">{{ product.in_the_box.f3.size }}</span>  <span class="text-x">{{ product.in_the_box.f3.text }}</span></p>
                    <p><span class="size-x">{{ product.in_the_box.f4.size }}</span>  <span class="text-x">{{ product.in_the_box.f4.text }}</span></p>
                    <p><span class="size-x">{{ product.in_the_box.f5.size }}</span>  <span class="text-x">{{ product.in_the_box.f5.text }}</span></p>
                </div> 
            </div>

            <div class="display-products pt-20 pb-28">
                <div class="mer">
                    <img class="img-1" :src="product.display_image.image_1" >
                    <img class="img-2" :src="product.display_image.image_2" >
                </div>
                <img class="img-3" :src="product.display_image.image_3" >
            </div>

        </div>

         
        <div class="mt-40"></div>
        <ProductType />
        <Villian class="my-40" />
        <Footer />
    </section>
</template>

<script>
import Header from '../components/Header.vue'
import Villian from '../components/Villian.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'
import ProductType from '../components/ProductType.vue'
// import products from '~/data/products'

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
            //  products:products
        }
    },

    beforeMount() {
        this.products = JSON.parse(localStorage.getItem('products'))
        
         this.products.forEach(product => {
            if(product.id === this.id) { this.product = product }
        });
       
    },
    
    mounted() {
      this.$store.commit('updateCartFromLocalStorage')
    },
 
     methods: {
         goBack() {
            this.$router.back()
         },
         
         decrease_quantity() {
            this.$store.commit('decreaseQuantity', this.product)
         },

         increase_quantity() {
            this.$store.commit('increaseQuantity', this.product)
         },

         addToCart() {
            this.$store.commit('addToCart', this.product)
            this.products.forEach(product => {
                product.add_to_cart_btn = "IN CART"
            })
            
         }
         
     },

     computed: {
            product_quantity() {
            return this.$store.getters.productQuantity(this.product)
        },
            filteredProducts() {
                return this.products.filter((product) => product.id === this.id)
            }
     }
     
}
</script>

<style>

.img-1{
    border-radius: 10px;
}
.img-2{
    border-radius: 10px;
}
.img-3{
    border-radius: 10px;
}

.display-products {
    display: grid;
    grid-template-columns: 1.1fr 1.6fr;
    grid-template-rows: 280px 280px;
    column-gap: 7px;
    
}
.mer {
    display: grid;
    row-gap: 25px;
}


.sub-headers {
    font-weight: 700;
    font-size: 31px;
    padding-bottom: 10px;
}
.amount-control {
    background: hsl(0, 0%, 95%);
    padding: 0.75rem 4px;
}
#numb{
    padding:0 30px 0 30px;
}
.size-x {
    font-weight: 500;
    color:rgb(255, 145, 0);
    padding-right:16px;
}
.size-text {
    line-height:35px ;
}
.text-x {
    color:black;
    opacity: 0.6;
}
.headphones-description {
    color:black;
    opacity: 0.5;
    padding:30px 0 45px 0;
}

.phones-desc {
    color:black;
    opacity: 0.6;
}
</style>