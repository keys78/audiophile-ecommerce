<template>
    <div class="lg:w-9/12 w-11/12 mx-auto pType">

        <NuxtLink to="/Headphones">
            <div class="phones-holder">
                <img :src="headphones" alt="headphone pic" class="phones-images mx-auto" />
                <h1 class="pb-2 -mt-2 font-bold">HEADPHONES</h1>
                <div class="shop flex-center gap-3">
                    <h1>SHOP</h1>
                    <img :src="arrowRight" alt="" class="mx-auto pb-3 -mb-3">
                </div>
            </div>
        </NuxtLink>

        <NuxtLink to="/Speakers">
        <div class="phones-holder">
            <img :src="speakers" alt="headphone pic" class="phones-images mx-auto" />
            <h1 class="pb-2  font-bold">SPEAKERS</h1>
            <div class="shop flex-center gap-3">
                <h1>SHOP</h1>
                <img :src="arrowRight" alt="" class="mx-auto pb-3 -mb-3">
            </div>
        </div>
        </NuxtLink>

        <NuxtLink to="Earphones">
        <div class="phones-holder">
            <img :src="earphones" alt="headphone pic" class="phones-images mx-auto mb-3" />
            <h1 class="pb-2 font-bold">EARPHONES</h1>
            <div class="shop flex-center gap-3">
                <h1>SHOP</h1>
                <img :src="arrowRight" alt="" class="mx-auto pb-3 -mb-3">
            </div>
        </div>
        </NuxtLink>
        
    </div>
</template>

<script>
import headphones from '../assets/images/shared/desktop/image-headphones.png'
import speakers from '../assets/images/shared/desktop/image-speakers.png'
import earphones from '../assets/images/shared/desktop/image-earphones.png'
import arrowRight from '../assets/images/shared/desktop/icon-arrow-right.svg'

export default {
    name:'ProductType',
    components:{

    },
    data() {
        return {
           headphones,
           speakers,
           earphones,
           arrowRight
        }
    }
}
</script>

<style>
.pType{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:2rem;
}

.phones-holder{
    background: hsl(0, 0%, 95%);
    border-radius: 0.5rem;
    padding: 0.2rem;
    text-align: center;
    position: relative;
    transition: ease-in 0.2s all;
    height: 200px;
}

.phones-holder:hover .shop h1 {
    color:#e97d3e;
    transition: ease-out 0.2s all;
    opacity: 1;
}

.phones-images{
    width: 12vw;
    margin-top:-70px;
}
.shop{
    width: 12%;
    margin: auto;
    color:rgba(50, 50, 51, 0.685);
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
}
    
</style>