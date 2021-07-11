<template>
    <section>
        <Header class="bg-black"/>

        <section class="w-9/12 mx-auto">
            <button @click="goBack" class="mt-24 text-sm mb-2"> Go Back</button>

            <div class="flex-start gap-8 ">
                <div class="w-8/12 border py-8 px-6 rounded-xl">
                    <h1 class="check-group text-2xl">CHECKOUT</h1>
                    <p class="check-text">BILLING DETAILS</p>

                    <form>
                        <div>
                            <div class="grid grid-cols-2 gap-4 py-5">
                                <div class="">
                                    <label class="check-group text-sm">Name</label>
                                    <input type="text" placeholder="Aleyx Madom" class="input-group"/>
                                </div>
                                <div>
                                    <label class="check-group text-sm">Email</label>
                                    <input type="text" placeholder="Aleyx@gmail.com" class="input-group"/>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                   <label class="check-group text-sm">Phone Number</label>
                                    <input type="text" placeholder="+234 810 8243 267" class="input-group"/>
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
                                    <p>Payment Method</p>
                                </div>

                                <div>
                                   <div class="pb-6 input-group mb-5">
                                        <input type="radio" id="test1" name="payment-type" checked/>
                                        <label class="check-group" for="test1">e-Money</label>
                                    </div>
                                    <div class="input-group">
                                        <input type="radio" id="test2" name="payment-type"/>
                                        <label class="check-group" for="test2">Cash on Delivery</label>
                                    </div>
                                </div>
                            </div>
                            <!--toggle area-->
                            <div class="grid grid-cols-2 gap-4 py-5">
                                <div class="">
                                    <label class="check-group text-sm">E-Money Number</label>
                                    <input type="text" placeholder="400387834" class="input-group"/>
                                </div>
                                <div>
                                    <label class="check-group text-sm">E-Money Pin</label>
                                    <input type="text" placeholder="5684" class="input-group"/>
                                </div>
                            </div>
                            <div class="grid grid-cols-5 gap-4 py-5 items-center">
                                <img :src="shape" alt="icon" class="col-span-1">
                                <p class="col-span-4">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                            </div>
                        </div>
                    </form>

                </div>


                <div class="w-4/12 border">Hi</div>
            </div>

        </section>
        
        <!-- <Footer /> -->
    </section>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import shape from '../assets/images/Shape.png'

export default {
    name:"Headphones",
    components: {
        Header,
        Footer,
    },

    data() {
        return {
            shape
        }
    },

     methods: {
         goBack() {
            this.$router.back()
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
