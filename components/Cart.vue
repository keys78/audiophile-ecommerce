<template>
    <div class="backdrop" @click.self="$emit('close')">

            <div class="w-9/12 mx-auto">
                <div class="cart-container">
                    <div class="flex justify-between pb-6">
                        <div>CART ({{ carts.length }})</div>
                        <div><button @click="deleteCart">Remove all</button></div>
                    </div>
                    

                    <div v-for="(item, index) in carts" :key="index" class="grid grid-cols-3 gap-3 my-4">
                        <div class="w-16">
                            <img :src="item.image" :alt="item.alt" class="cart_img">
                        </div>
                        <div>
                            <h1>{{ item.cart_name }}</h1>
                            <h1 class="font-bold">{{ item.unit_price }}</h1>
                        </div>
                        <!-- <div>
                            <span class="amount-control">
                                <button @click="decrease_NOI" class="pl-3">-</button>
                                <span id="numb">{{ number_of_item }}</span>
                                <button @click="increase_NOI" class="pr-3">+</button>
                            </span>
                        </div> -->
                        
                    </div>
                    
                    <button>{{ cart_button_text }}</button>
                </div>
            </div>
            
    </div>
</template>

<script>

export default {
    name: "Cart",
    components: {
      
    },
    data() {
        return {
            no_of_items:0,
            cart_button_text:"",
            item:{},
        }
    },
    beforeMount() {
        this.carts = JSON.parse(localStorage.getItem('carts'))
        console.log(this.carts)
        
    },

    // mounted() {
    //     this.cart.length > 0 ? this.cart_button_text = "SHOP NOW" : this.cart_button_text = "CHECKOUT"
    // },

    methods: {
        deleteCart() {
            this.carts = []
            localStorage.setItem('carts', JSON.stringify(this.carts))
            window.location.reload();
            
          
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