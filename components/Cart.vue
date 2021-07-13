<template>
    <div class="backdrop" @click.self="$emit('close')">

            <div class="sm:w-9/12 w-11/12 mx-auto">
                <div class="cart-container">
                    <div class="pb-3">
                        <div class="flex">
                            <div class="font-semibold text-lg">CART ({{ cart.length }})</div>
                            <button class="clear-cart-btn" @click="clearCart">Remove All</button>
                        </div>

                        <div v-if="cart.length">
                            <div v-for="item in cart" :key="item.id" class="grid grid-cols-5 items-center my-8">
                                <div><img :src="item.image" :alt="item.alt" class="w-16 col-span-1 cart_img"></div>
                                <div class="col-span-2 ml-3">
                                    <p class="font-semibold">{{ item.cart_name}}</p>
                                    <p class="font-semibold opacity-60">${{ item.unit_price.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</p>
                                </div>
                                <div class="control-panel flex col-span-2 ml-2">
                                    <button @click="decrease_quantity(item)">-</button>
                                    <span>{{ item.quantity }}</span>
                                    <button @click="increase_quantity(item)">+</button>
                                </div>
                            
                            </div>
                            <div class="flex my-4">
                                <h1 class="text-lg font-thin">Total</h1>
                                <div class="font-semibold text-lg">${{ itemTotal }}</div>
                            </div>
                            <NuxtLink to="/Checkout"><button class="checkout-btn hovie">CHECKOUT</button></NuxtLink>
                        </div>
                        <div v-else>
                            <img src="https://viacapo.com/wp-content/themes/GoDoCommerceTheme/img/emptycart.gif" alt="" class="mx-auto w-40">
                            <h1 class="py-8 font-semibold text-center">YOUR CART IS EMPTY</h1>
                            <NuxtLink to="/"><button class="checkout-btn hovie">SHOP NOW</button></NuxtLink>
                        </div>

                    </div>
                </div>
            </div>
            
    </div>
</template>

<script>

export default {
    name: "Cart",
    
    data() {
        return {
          
        }
    },

    methods: {
         decrease_quantity(item) {
            this.$store.commit('decreaseAndRemoveFromCart', item)
         },

         increase_quantity(item) {
           this.$store.commit('increaseFromCart', item)
         },

         clearCart() {
            this.$store.commit('clearCart')
        },
        
    },

    computed: {
        cart() {
            return this.$store.getters.cartItems
        },
        
        itemTotal() {
            return this.$store.getters.cartTotal
        },

    }
        
         
}    

</script>

<style>
.backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    background: rgba(0,0,0,0.4);
    z-index: 1;
    animation: switch 0.6s linear;
    
}

@keyframes switch{
    from {
         background: rgba(0,0,0,0.01);
    }
    to{
         background: rgba(0,0,0,0.4);
    }
}
.cart-container {
    border-radius: 10px;
    float:right;
    margin-top: 5rem;
    z-index: 999;
    background:#fff;
    padding: 2rem 1.75rem;
    width: 100%;
    max-width: 23.5rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);

    color: black;
}
.cart_img {
    border-radius: 10px;
}
.checkout-btn{
    font-weight: 700;
    font-size: 15px;
    padding: 10px 15px;
    width: 100%;
    background: #D97E4A;
    color:hsl(0, 0%, 98%);
}

.checkout-btn:focus{
    outline: none;
}

.clear-cart-btn {
    transition:background 0.2s ease-in all;
    text-decoration: underline;
    color:#000;
}
.clear-cart-btn:hover {
   color:#D97E4A;
   transition:background 0.2s ease-out all;
}
.clear-cart-btn:focus {
    outline: none;
}
.control-panel {
    background: hsl(0, 0%, 95%);
    padding: 0.42rem 4px;
    font-weight: 600;
}
.control-panel button:nth-child(1) {
    padding-left: 10px;
}
.control-panel button:nth-child(3) {
    padding-right: 10px;
}
</style>