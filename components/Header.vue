<template>
    <header>
        <div v-if="openNav" class="w-full chroma text-black fixed bottom-0 px-5 bg-gray-800 md:hidden block py-6">
            <div @click="open_nav_control" class="md:hidden block w-1/12">
                <h1 v-if="openNav" class="close-icon">X</h1>
            </div>
            <div class="sm:px-20 vit px-10">
                <ProductType />
            </div>
        </div>

        <div class="nav lg:w-9/12 w-11/12 mx-auto flex">
            <div @click="open_nav_control" class="md:hidden block w-1/12">
                <svg v-if="!openNav" class="close-icon" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"></path></g></svg>
            </div>
            <NuxtLink to="/"><h1 class="logo md:w-2/12 w-8/12">audiophile</h1></NuxtLink>

            <div class="nav-elements flex lg:w-5/12 w-6/12 mx-auto text-center md:flex hidden">
                <NuxtLink to="/"><h2>Home</h2></NuxtLink>
                <NuxtLink to="/Headphones"><h2>Headphones</h2></NuxtLink>
                <NuxtLink to="/Speakers"><h2>Speakers</h2></NuxtLink>
                <NuxtLink to="/Earphones"><h2>Earphones</h2></NuxtLink>
            </div>
            <div @click="close" class="cursor-pointer relative">
                <img :src="cart_logo"/>
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
import ProductType from '../components/ProductType.vue'

export default {
    name: 'Header',
    components: {
        Cart,
        ProductType
    },
    data() {
        return {
            cart_logo,
            LOGO,
            openCart:false,
            openNav:false,
        }
    },
    
    methods: {
        close() {
            this.openCart = !this.openCart
        },

        open_nav_control() {
            this.openNav = !this.openNav
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
.chroma {
    height: 100vh;
    z-index: 9999999999999999999999999999999999999999999999999999999999999999;
}

.vit {
    z-index: 9999999999999999999999999999999999999999999999999999999999999999;
}

.close-icon{
    color:rgb(248, 248, 248);
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
}
</style>