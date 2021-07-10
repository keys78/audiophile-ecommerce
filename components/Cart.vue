<template>
    <div class="backdrop" @click.self="$emit('close')">

            <div class="w-9/12 mx-auto">
                <div class="cart-container">
                    <div class="pb-6">
                        <!-- <div>CART ({{ cart.length }})</div> -->
                        <div>myTotal: ${{ itemTotal }}</div>
                        <p id="topo">My Cart({{ cart.length }})</p>
                        <button @click="clearCart">Remove All</button>

                        <div v-if="cart.length">
                            <div id="lobo" v-for="item in cart" :key="item.id">
                                <img :src="item.image" alt="" class="w-20">
                                <p>{{ item.cart_name}}</p>
                                <p>${{ item.unit_price.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</p>
                            
                                <span>
                                    <button @click="decrease_quantity(item)">-</button>
                                    <span>{{ item.quantity }}</span>
                                    <button @click="increase_quantity(item)">+</button>
                                </span>
                            
                            </div>
                        </div>
                        <div v-else>
                            Your Cart Is Empty
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
            item.quantity--
            localStorage.setItem('cart', JSON.stringify(this.cart))
           
         },

         increase_quantity(item) {
            item.quantity++
            localStorage.setItem('cart', JSON.stringify(this.cart))

         },
    


         clearCart() {
            if(this.cart.length > 0) {
                this.cart.length = 0
                localStorage.setItem('cart', JSON.stringify(this.cart))
                window.location.reload();

            } else {
                 alert('cart is empty')
             }
        },
        
    },

    computed: {
        cart() {
            return this.$store.getters.cartItems
        },
        
      
        itemTotal() {
            // let total = this.cart.reduce((sum,item) => sum + item.unit_price * item.quantity, 0);
            // let myTotal = total.toLocaleString(undefined, {minimumFractionDigits: 2})
            // return myTotal
            return this.$store.getters.cartTotal
        }
            
        },
         
    
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
    margin-top: 6rem;
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
</style>