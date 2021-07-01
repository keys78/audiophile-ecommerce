<template>
    <section>
        <Header class="bg-black"/>
        <div class="sub-hero">
            <h1>HEADPHONES</h1>
        </div>
        
       <section class="xl:w-9/12 w-11/12 mx-auto mt-24">
           <div class="flex">
               <div class="w-4/12 ">
                    <h1 class="new-text">NEW PRODUCT</h1>
                    <h1 class="headphones-text text-black">XX99 MARK TWO HEADPHONES</h1>
                    <p class="headphones-desc">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <Button text="SEE PRODUCT" bgcolor="#D97E4A" textColor="hsl(0, 0%, 98%)"/>
                </div>
                <div class="hp-img-1 w-5/12">
                    <img :src="xx99" alt="headphones" class="xx99">
                </div>

           </div>
       </section>

    </section>
</template>

<script>
import Header from '../components/Header.vue'
import xx99 from '../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg'


export default {
    name:"Headphones",
    data() {
        return {
            Header,
            xx99
        }
    }
}
</script>

<style>
.new-text {
  letter-spacing: 10px;
  color: #D97E4A;
  font-size: 13px;
  padding-bottom: 14px;

}

.sub-hero {
    background: black;
     padding:4.5rem 0;
   
}
.sub-hero h1{
    color:white;
    text-align: center;
    font-size:40px;
    font-weight: 700;
    margin-bottom: 15px;
   
}
.xx99 {
    border-radius: 10px;
}

.headphones-text {
  font-weight: 700;
  color: hsl(0, 0%, 0%);
  font-size: 40px;
  line-height: 3rem;

}
.headphones-desc {
    color:black;
    opacity: 0.5;
    padding:30px 0 45px 0;
}
</style>