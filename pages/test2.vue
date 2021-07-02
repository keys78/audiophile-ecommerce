<template>
    <div>
        <h1>{{ id }}</h1>
        <h1>{{ product.name }}</h1>
        <h1>{{ product.text }}</h1>
        <h1>{{ product.features }}</h1>
    </div>
</template>

<script>
export default {
    name:"test2",
    // props:["id"],
    data() {
        return {
            id: this.$route.params.id,
            product:{},
            products: []
        }
    },

      beforeMount() {
        this.products = JSON.parse(localStorage.getItem('products'))
        this.products.forEach(product => {
            if(product.id === this.id) { 
                this.product = product 
                }
        });
       
    },
     mounted() {
         this.products = JSON.parse(localStorage.getItem('products'))
     }
}
</script>

<style>

</style>