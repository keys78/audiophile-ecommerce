<template>
    <section>
        <Header />

        <div class="w-9/12 mx-auto mt-20">

            <button @click="goBack" class="py-4"> Go Back</button>
            <div class="flex mb-20">
                <div class="hp-img-1 lg:w-5/12 w-6/12">
                    <img :src="product.image" :alt="product.alt" class="xx99">
                </div>
                <div class="lg:w-5/12 w-6/12">
                    <h1 v-show="product.new_product = true" class="new-text">NEW PRODUCT</h1>
                    <h1 class="headphones-text text-black">{{ product.name }}</h1>
                    <p class="headphones-desc">{{ product.text_head }}</p>
                    <h1 class="py-6 font-bold">$ {{ product.unit_price.toFixed(2) }}</h1>

                    <div class="flex items-center">
                        <div>
                            <span class="amount-control">
                                <button @click="decrease_quantity" class="pl-3">-</button>
                                <span id="numb">{{ product.quantity }}</span>
                                <button @click="increase_quantity" class="pr-3">+</button>
                            </span>
                        </div>

                        <div>
                            <!-- <Button @click="addToCart" text="ADD TO CART" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/> -->
                            <button @click="addToCart">{{ product.add_to_cart_btn }}</button>
                        </div>
                    </div>
                        
                </div>
            </div>


            <div class="flex justify-between items-start">
                <div class="w-7/12">
                    <h1 class="sub-headers">FEATURES</h1>
                    <h1 class="phones-desc pb-5">{{ product.features.feature_A }}</h1>
                    <h1 class="phones-desc">{{ product.features.feature_B }}</h1>
                </div>
                <div class="w-4/12 size-text">
                    <h1 class="sub-headers">IN THE BOX</h1>
                    <p><span class="size-x">{{ product.in_the_box.f1.size }}</span>  <span class="text-x">{{ product.in_the_box.f1.text }}</span></p>
                    <p><span class="size-x">{{ product.in_the_box.f2.size }}</span>  <span class="text-x">{{ product.in_the_box.f2.text }}</span></p>
                    <p><span class="size-x">{{ product.in_the_box.f3.size }}</span>  <span class="text-x">{{ product.in_the_box.f3.text }}</span></p>
                    <p><span class="size-x">{{ product.in_the_box.f4.size }}</span>  <span class="text-x">{{ product.in_the_box.f4.text }}</span></p>
                    <p><span class="size-x">{{ product.in_the_box.f5.size }}</span>  <span class="text-x">{{ product.in_the_box.f5.text }}</span></p>
                </div> 
            </div>

            <div class="display-products my-20">
                <div class="flex flex-col justify-between">
                    <img class="img-1" :src="product.display_image.image_1" >
                    <img class="img-2 mt-8" :src="product.display_image.image_2" >
                </div>
                <img class="img-3" :src="product.display_image.image_3" >
            </div>

            <div>
                <div class="sub-headers text-center">YOU MAY ALSO LIKE </div>
                <NuxtLink :to="{name: 'ProductDetails', params: { id:2 }}">
                    <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
                </NuxtLink>
                <NuxtLink :to="{name: 'ProductDetails', params: { id:3 }}">
                    <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
                </NuxtLink>
                <NuxtLink :to="{name: 'ProductDetails', params: { id:3 }}">
                    <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
                </NuxtLink>
            </div>


        </div>

         

        <div class="mt-80"></div>
        <ProductType />
        <Villian />
        <Footer />
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
            carts:[{
                item:{}
            }],
        }
    },

    beforeMount() {
       this.products = JSON.parse(localStorage.getItem('products'))
        this.products.forEach(product => {
            if(product.id === this.id) { 
                this.product = product                
            }
        });

        this.carts = JSON.parse(localStorage.getItem('carts'))
         
    },
     methods: {
         goBack() {
            this.$router.back()
         },
         
         decrease_quantity() {
            this.product.quantity--
            localStorage.setItem('products', JSON.stringify(this.products))
         },

         increase_quantity() {
            this.product.quantity++
            localStorage.setItem('products', JSON.stringify(this.products))
         },

         addToCart() {
                this.cart = ({
                id:this.id,
                image:this.product.image,
                cart_name:this.product.cart_name,
                unit_price:this.product.unit_price,
                quantity:this.product.quantity
                
            })
            this.product.add_to_cart_btn = "ADDED TO CART"
            
          
             if(this.carts.find(cart => cart.id === this.id)) {
                alert('Item already In Cart')
            }else {
                this.carts.push(this.cart);
                localStorage.setItem('carts', JSON.stringify(this.carts))
            }
         
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
    grid-template-columns: 445px 635px;
    grid-template-rows: 280px 280px;
    column-gap: 27px;
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

.phones-desc {
    color:black;
    opacity: 0.6;
}
</style>