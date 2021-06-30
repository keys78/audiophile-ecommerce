<template>
    <header>
        <div class="nav w-9/12 mx-auto flex">
            <h1 class="logo w-2/12">audiophile</h1>
            <!-- <img :src="LOGO" alt="logo"> -->
            <div class="nav-elements flex w-5/12 mx-auto text-center">
                <h2>Home</h2>
                <h2>Headphones</h2>
                <h2>Speakers</h2>
                <h2>Earphones</h2>
            </div>
            <img :src="CART"/>
        </div>
  </header>
</template>

<script>
import CART from '../assets/images/shared/desktop/icon-cart.svg'
import LOGO from '../assets/images/shared/desktop/logo.svg'

export default {
    name: 'Header',
    components: {

    },
    data() {
        return {
            CART,
            LOGO
        }
    }
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
   transition: 0.5s ease-in;
   text-transform: uppercase;
   font-weight: 600;
}
header h2:hover{
   color:#D97E4A;
   transition: 0.5s ease-out;
   
}

.nav{
    border-bottom: 1px solid rgba(221, 221, 221, 0.281);
    padding: 22px 0px;
}
.logo {
    font-weight:700;
    font-size: 30px;
}
</style>