<template>
    <div class="backdrop">

            <div class="sm:w-9/12 w-11/12 mx-auto mt-24">
                <div class="confirmModal">
                    <div class="circle-mark pt-5">
                        <img :src="checkmarks" alt="checkmark" class="mx-auto">
                    </div>
                    <h1 class="check-group text-2xl py-6">THANK YOU <span class="uppercase">{{ userName }}</span> FOR YOUR ORDER</h1>
                    <p class="text-base opacity-50 mb-10">You will receive an email confirmation shortly.</p>

                    <div class="flex h-32">
                        <div class="w-7/12 wato h-full pt-3">
                            <div v-for="item in cart.slice(0, 1)" :key="item.id" class="grid grid-cols-5 items-start gap-2">
                                <div class="col-span-1"><img :src="item.image" :alt="item.alt" class="w-16 cart_img"></div>
                                <div class="col-span-3">
                                    <p class="font-semibold">{{ item.cart_name}}</p>
                                    <p class="font-semibold opacity-60">${{ item.unit_price.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</p>
                                </div>
                                <div class="check-group col-span-1 opacity-60 text-center"> x{{ item.quantity }} </div>
                            </div>
                            <div>
                                <p class="border-b border-black py-1 w-11/12 mx-auto"></p>
                                <p class="pt-2 text-center">and {{ myCartLength - 1 }} other item(s)</p>
                            </div>
                        </div>
                        <div class="bg-black w-5/12 h-full pt-7">
                            <div class="px-5">
                                <h1 class="text-base text-white font-semibold opacity-50">GRAND TOTAL</h1>
                                <div class="font-bold text-white text-lg">${{ grandTotal }}</div>
                            </div>
                        </div>
                    </div>












                    <NuxtLink to="/"><button @click="clearCart" class="checkout-btn hovie mt-20">BACK TO HOME</button></NuxtLink>
                </div>
            </div>
            
    </div>
</template>

<script>
import checkmarks from '../assets/images/check-mark.svg'

export default {
    name: "OrderConfirmation",
    
    data() {
        return {
          checkmarks
        }
    },

    methods: {
        clearCart() {
            this.$store.commit('clearCart')
        },
    },

     computed: {
        cart() {
            return this.$store.getters.cartItems
        },
        
        grandTotal() {
            return this.$store.getters.grandTotal
        },

        myCartLength() {
            return this.$store.getters.cartItems.length
        },

        userName() {
            return this.$store.getters.userName
        }

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
.confirmModal {
    border-radius: 10px;
    /* margin-top: 5rem; */
    z-index: 999;
    background:#fff;
    padding: 1.5rem 1.2rem;
    width: 100%;
    margin: auto;
    max-width: 40rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);

    color: black;
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

.circle-mark{
    background:  #D97E4A;
    height:4rem;
    width:4rem;
    border-radius: 9999px;
}
.wato{
    background: hsl(0, 0%, 96%);
}
</style>