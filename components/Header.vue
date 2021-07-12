<template>
    <header>
        <div class="nav w-9/12 mx-auto flex">
            <NuxtLink to="/"><h1 class="logo w-2/12">audiophile</h1></NuxtLink>
            <!-- <img :src="LOGO" alt="logo"> -->
            <div class="nav-elements flex w-5/12 mx-auto text-center">
                <NuxtLink to="/"><h2>Home</h2></NuxtLink>
                <NuxtLink to="/Headphones"><h2>Headphones</h2></NuxtLink>
                <NuxtLink to="/Speakers"><h2>Speakers</h2></NuxtLink>
                <NuxtLink to="/Earphones"><h2>Earphones</h2></NuxtLink>
            </div>
            <div class="relative">
                <img @click="close" :src="cart_logo"/>
                <span class="counter">{{ myCartLength }}</span>
            </div>
        </div>
        <div v-if="openCart">
        <Cart @close="close"/>
        </div>
  </header>
</template>

<script>
import cart_logo from '../assets/images/shared/desktop/icon-cart.svg'
import LOGO from '../assets/images/shared/desktop/logo.svg'
import Cart from '../components/Cart'

export default {
    name: 'Header',
    components: {
        Cart
    },
    data() {
        return {
            cart_logo,
            LOGO,
            openCart:false,
        }
    },
    
    methods: {
        close() {
            this.openCart = !this.openCart
        }
    },
   
    beforeMount() {

        this.cart = JSON.parse(localStorage.getItem('cart'))

        if (!this.cart) {
            let newCart = []
           localStorage.setItem('cart', JSON.stringify(newCart))
        } else {
            this.cart = JSON.parse(localStorage.getItem('cart'))
        }
        
    },

    computed: {
        myCartLength() {
            return this.$store.getters.cartItems.length
            
        },
    },
 
}
</script>

<style>
header{
    background: #191919;
    color: hsl(0, 0%, 98%);
    font-size: 14px;
}

header h2{
   cursor: pointer;
   transition: 0.2s ease-in;
   text-transform: uppercase;
   font-weight: 600;
}

header img{
   cursor: pointer;
}

header h2:hover{
   color:#D97E4A;
   transition: 0.2s ease-out;
   
}

.nav{
    border-bottom: 1px solid rgba(221, 221, 221, 0.281);
    padding: 22px 0px;
}
.logo {
    font-weight:700;
    font-size: 30px;
}
.counter {
    text-align: center;
    width: 1.2rem;
    line-height: 1.2rem;
    position: absolute;
    top: -0.5rem;
    left: 1rem;
    background-color:rgb(255, 145, 0);
    border-radius: 50%;
    font-size: 0.75rem;
}
</style>