<template>
  <div>
      <ul>
          <li v-for="product in products" :key="product.id">
              <NuxtLink :to="{name: 'test2', params: { id:2 }}">
               {{ product.name }}
              </NuxtLink>
          </li>
      </ul>
      
  </div>
</template>

<script>
export default {
    name:"test1",
    data() {
        return {
            products: [
                {id:1, name:'yx1 phone', text:"Best in earphones lormem", features: 'ytmkfs'},
                {id:2, name:'Qp7 speaker', text:"Best speakers", features: 'dacdscwfdsascd'},
                {id:3, name:'AAA head', text:"Best in headphones", features: 'adfrwsdtrytuyi'}
            ]

        }
    },

    beforeMount() {
        localStorage.setItem('products', JSON.stringify(this.products))
    }


      
}
</script>

<style>

</style>