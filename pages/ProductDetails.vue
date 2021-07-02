<template>
  <div>
      <ul>
          <li v-for="product in products" :key="product.id">
              <h1>{{ product.name }}</h1>
              <h1>{{ product.text }}</h1>
              <h1>{{ product.features }}</h1>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"ProductDetails",
    data() {
        return {
            products: [
                {name:'yx1', text:"Best in earphones lormem", features: 'ytmkfs'},
                {name:'yx1', text:"Best in earphones lormem", features: 'ytmkfs'},
                {name:'yx1', text:"Best in earphones lormem", features: 'ytmkfs'}
            ]
        }
    }
}
</script>

<style>

</style>