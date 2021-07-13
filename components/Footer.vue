<template>
    <footer class="footer">
        <div class="w-9/12 mx-auto"><p class="footer-top-design h-1 w-28"></p></div>
        <div class="lg:w-9/12 w-11/12 mx-auto py-8 flex lg:text-left text-center lg:flex-row flex-col">
            <NuxtLink class="w-8/12 lg:mb-0 mb-5" to="/"><h1 class="logo ">audiophile</h1></NuxtLink>
            <div class="flex xl:w-4/12 lg:flex-row flex-col lg:gap-0 gap-6 w-6/12 mx-auto text-center">
                <NuxtLink to="/"><h2>Home</h2></NuxtLink>
                <NuxtLink to="/Headphones"><h2>Headphones</h2></NuxtLink>
                <NuxtLink to="/Speakers"><h2>Speakers</h2></NuxtLink>
                <NuxtLink to="/Earphones"><h2>Earphones</h2></NuxtLink>
            </div>
        </div>
        <div class="lg:w-9/12 w-11/12 mx-auto flex lg:flex-row flex-col">
            <div>
                <h1 class="lg:w-6/12 w-11/12 lg:text-left text-center lg:ml-0 ml-3 footer-text sm:text-base text-sm">
                    Audiophile is an all in one stop to fulfill your audio needs. 
                    We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
                    Come and visit our demo facility - we’re open 7 days a week.
                </h1>
                <h2 class="opacity-60 lg:text-left text-center sm:text-base text-sm">Copyright 2021. All rights reserved</h2>
            </div>
            <div class="w-2/12 gap-3 lg:mt-0 mt-8 flex mx-auto">
                <img :src="facebook" class="cursor-pointer">
                <img :src="twitter" class="cursor-pointer">
                <img :src="instagram" class="cursor-pointer">
            </div>
       </div>
       <div>
            <h6 class="text-white sm:text-sm text-xs opacity-90 text-center border-t border-gray-800 mt-3 mt-10 py-3">Figma design by <a class="text-blue-300" href="https://frontendmentor.io">Frontendmentor</a> | Coded by <a class="text-blue-300" href="https://twitter.com/Emmy31087589">Em_codes</a></h6>
       </div>
  </footer>
  
</template>

<script>
import facebook from '../assets/images/shared/desktop/icon-facebook.svg'
import twitter from '../assets/images/shared/desktop/icon-twitter.svg'
import instagram from '../assets/images/shared/desktop/icon-instagram.svg'

export default {
    name: 'Footer',

    data() {
        return {
            facebook,
            twitter,
            instagram
        }
    }
}
</script>

<style>
.footer-top-design {
    background: #D97E4A;;
}
.footer {
    background: #000;
    color:hsl(0, 0%, 96%);
}
.footer-text {
    opacity:0.6;
    padding-bottom: 25px;
}
.footer h2{
   cursor: pointer;
   transition: 0.2s ease-in;
   text-transform: uppercase;
   font-weight: 600;
   font-size: 13px;
}
.footer h2:hover{
   color:#D97E4A;
   transition: 0.2s ease-out;
}
</style>