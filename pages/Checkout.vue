<template>
    <section class="checkout-holder">
        <Header class="bg-black"/>

        <div v-if="confirmOrder">
            <OrderConfirmation />
        </div>

        <section class="lg:w-9/12 w-11/12 mx-auto mb-10">
            <button @click="goBack" class="hover:text-yellow-800 sm:mt-20 mt-8 text-sm opacity-50 font-bold cursor:pointer mb-6"> Go Back</button>

            <form @submit.prevent="validateForm" class="flex-start md:flex-row flex-col gap-8 checkout-holder">
                <div class="lg:w-8/12 md:w-7/12 w-full py-8 sm:px-6 px-3 rounded-md bg-white">
                    <h1 class="check-group text-2xl">CHECKOUT</h1>
                    <p class="check-text">BILLING DETAILS</p>

                    <form >
                        <div>
                            <div class="grid grid-cols-2 gap-4 py-5">
                                <div class="">
                                    <label class="check-group text-sm">Name</label> <span class="error-group">{{ errorName }}</span>
                                    <input type="text" v-model="userName" placeholder="Aleyx Madom" class="input-group" required/>
                                    <span></span>
                                </div>
                                <div>
                                    <label class="check-group text-sm">Email</label> <span class="error-group">{{ errorMail }}</span>
                                    <input type="text" v-model="email" placeholder="Aleyx@gmail.com" class="input-group"/>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                   <label class="check-group text-sm">Phone Number</label> <span class="error-group">{{ errorPhone }}</span>
                                    <input type="text" v-model="phoneNumber" placeholder="+234 810 8243 267" class="input-group"/>
                                </div>
                            </div>
                            
                            <p class="check-text">SHIPPING DETAILS</p>

                            <div class="">
                                <label class="check-group text-sm">Your Address</label>
                                <input type="text" placeholder="1173 Williams Avenue" class="input-group"/>
                            </div>
                            <div class="grid grid-cols-2 gap-4 py-5">
                                <div class="">
                                    <label class="check-group text-sm">Zip Code</label>
                                    <input type="text" placeholder="101 1E56" class="input-group"/>
                                </div>
                                <div>
                                    <label class="check-group text-sm">City</label>
                                    <input type="text" placeholder="New York" class="input-group"/>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                   <label class="check-group text-sm">Country</label>
                                    <input type="text" placeholder="United States" class="input-group"/>
                                </div>
                            </div>

                            <p class="check-text">PAYMENT DETAILS</p>

                            <div class="grid grid-cols-2 gap-4 py-5">
                                <div class="">
                                    <p class="check-group text-sm">Payment Method</p>
                                </div>

                                <div>
                                   <div class="pb-6 input-group mb-5">
                                        <input @click="e_money" type="radio" id="test1" name="payment-type" checked/>
                                        <label class="check-group" for="test1">e-Money</label>
                                    </div>
                                    <div @click="cash_on_delivery" class="input-group">
                                        <input type="radio" id="test2" name="payment-type"/>
                                        <label class="check-group" for="test2">Cash on Delivery</label>
                                    </div>
                                </div>
                            </div>
                            <!--toggle area-->
                            <div v-if="e_money_group" class="grid grid-cols-2 gap-4 py-5 h-28">
                                <div class="">
                                    <label class="check-group text-sm">E-Money Number</label>
                                    <input type="text" placeholder="400387834" class="input-group"/>
                                </div>
                                <div>
                                    <label class="check-group text-sm">E-Money Pin</label>
                                    <input type="text" placeholder="5684" class="input-group"/>
                                </div>
                            </div>
                            <div v-if="cash_on_delivery_group" class="grid grid-cols-7 gap-4 py-5 items-center h-28">
                                <img :src="shape" alt="icon" class="col-span-1">
                                <p class="col-span-6 text-sm opacity-60">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                            </div>
                        </div>
                    </form>

                </div>


                <div class="lg:w-4/12 md:w-5/12 w-full py-6 px-4 sm:mb-0 mb-10 rounded-md bg-white">
                    <h1 class="font-semibold text-xl">SUMMARY</h1>

                        <div v-if="cart.length">
                            <div v-for="item in cart" :key="item.id" class="grid grid-cols-6 items-start gap-2 my-8">
                                <div class="col-span-1"><img :src="item.image" :alt="item.alt" class="w-16 cart_img"></div>
                                <div class="col-span-2">
                                    <p class="font-semibold">{{ item.cart_name}}</p>
                                    <p class="font-semibold opacity-60">${{ item.unit_price.toLocaleString(undefined, {minimumFractionDigits: 2}) }}</p>
                                </div>
                                <div class="check-group col-span-3 opacity-60 text-right"> x{{ item.quantity }} </div>
                            
                            </div>
                            <div class="flex my-4">
                                <h1 class="text-base font-semibold opacity-50">TOTAL</h1>
                                <div class="font-bold text-lg">${{ itemTotal }}</div>
                            </div>
                            <div class="flex my-4">
                                <h1 class="text-base font-semibold opacity-50">SHIPPING</h1>
                                <div class="font-bold text-lg">${{ shipping }}</div>
                            </div>
                            <div class="flex my-2">
                                <h1 class="text-base font-semibold opacity-50">VAT (INCLUDED)</h1>
                                <div class="font-bold text-lg">${{ vat }}</div>
                            </div>
                            <div class="flex mt-8 mb-4">
                                <h1 class="text-base font-semibold opacity-50">GRAND TOTAL</h1>
                                <div class="font-bold text-lg" style="color:#D97E4A;">${{ grandTotal }}</div>
                            </div>
                            <button class="checkout-btn hovie">CONTINUE & PAY</button>
                        </div>
                        <div v-else>
                            <img src="https://www.nicepng.com/png/full/16-166530_discover-the-coolest-pusheen-gif-no-background.png" alt="" class="mx-auto w-40 mt-10">
                            <h1 class="py-8 font-semibold text-center">OOPS! YOUR ITEMS WENT MISSING <span>&#128580;</span></h1>
                            <NuxtLink to="/"><button class="checkout-btn hovie">CONTINUE TO SHOP</button></NuxtLink>
                        </div>
                </div>
            </form>

        </section>
        
        <Footer />
    </section>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import shape from '../assets/images/Shape.png'
import OrderConfirmation from '../components/OrderConfirmation.vue'

export default {
    name:"Headphones",
    components: {
        Header,
        Footer,
        OrderConfirmation
    },

    data() {
        return {
            shape,
            e_money_group:true,
            cash_on_delivery_group:false,
            confirmOrder:false,
            errorName:"",
            errorMail:"",
            errorPhone:"",
            userName:'',
            userName:null,
            email:null,
            phoneNumber:null,
            errors:[]
        }
    },

     methods: {
         goBack() {
            this.$router.back()
         },

         e_money() {
            this.e_money_group = true;
            this.cash_on_delivery_group = false;
         },

         cash_on_delivery() {
            this.cash_on_delivery_group = true;
            this.e_money_group = false;
         },

        validateForm() {
           if(this.userName && this.email && this.phoneNumber) {
                this.confirmOrder = true
                this.$store.state.userName = this.userName

                this.errorName = ''
                this.errorMail = ''
                this.errorPhone = ''

               return true
           } else {
                if(!this.userName) {
                    this.errorName = "Name Required"
                }
                if(!this.email) {
                    this.errorMail = "Email Required"
                }
                if(!this.phoneNumber) {
                    this.errorPhone = "Phone Number Required"
                }
           }
        }
    },

     computed: {
        cart() {
            return this.$store.getters.cartItems
        },
        
        itemTotal() {
            return this.$store.getters.cartTotal
        },

        shipping() {
            let shippingFee = 50
            return shippingFee.toLocaleString(undefined, {minimumFractionDigits: 2})
        },

        vat() {
             return this.$store.getters.vat
        },

        grandTotal() {
            return this.$store.getters.grandTotal
        },
        

    }
}
</script>

<style>
    .check-group {
        font-weight: 700;
    }
    .check-text {
        color: #D97E4A;
        font-size: 14px;
        font-weight: 700;
        padding-bottom: 14px;
        padding-top: 6px;
        margin-top: 30px;
    }
    .input-group{
        padding:12px 16px;
        border:1px solid rgba(0, 0, 0, 0.219);
        font-size: 16px;
        width: 100%;
        background: transparent;
        font-family: 'Source Serif Pro', serif;
        border-radius: 7px;
        color:black;
    }
    .input-group:focus{
        outline:none;
        border: 1px solid #D97E4A;
    }
    ::placeholder{
        color:#929596;
    }

    .checkout-holder{
        background: hsl(0, 0%, 96%);
    }

    .error-group{
        font-size: 11px;
        font-weight: 600;
        color:red;
        /* margin-left: 140px; */
    }

        /* input + span {
    position: relative;
    }

    input + span::before {
    position: absolute;
    right: -20px;
    top: 5px;
    }

    input:invalid {
    border: 2px solid red;
    }

    input:invalid + span::before {
    content: '✖';
    color: red;
    }

    input:valid + span::before {
    content: '✓';
    color: green;
    } */



















    [type="radio"]:checked,
    [type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }
    [type="radio"]:checked + label,
    [type="radio"]:not(:checked) + label
    {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
        color: #666;
    }
    [type="radio"]:checked + label:before,
    [type="radio"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: #fff;
    }
    [type="radio"]:checked + label:after,
    [type="radio"]:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        background: #D97E4A;
        position: absolute;
        top: 2.9px;
        left:2.9px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
    [type="radio"]:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    [type="radio"]:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
</style>
