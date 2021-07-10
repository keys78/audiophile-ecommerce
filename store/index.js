import Vuex from 'vuex'

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
} 

function updateCartFromLocalStorage(state) {
  state.cart = JSON.parse(localStorage.getItem('cart'))
}


const createStore = () => {
  return new Vuex.Store({
    state: {
      cart: []
    },

    getters: {
      productQuantity: state => product => {
        const item = state.cart.find(i => i.id === product.id)

        if(item) return item.quantity 
        else return null
        
      },

      cartItems: state => {
        updateCartFromLocalStorage(state) 
        return state.cart
      },
      // clearCart: state => {
      //    state.cart = []
      //    updateLocalStorage(state.cart)
      // }

      cartTotal: state => {
        return state.cart.reduce((sum,item) => sum + item.unit_price * item.quantity, 0);
     },
    },

    
    
    mutations: {
      addToCart (state, product){
        let item = state.cart.find(i => i.id === product.id)

        if(item) {
          alert('Item already in cart')
         } else {
           state.cart.push({...product, quantity: 1})
         }

         updateLocalStorage(state.cart)
      },

      increaseQuantity (state, product) {
         let item = state.cart.find(i => i.id === product.id)

         if(item) {
          item.quantity++
         } 
        else {
          alert('Add Item To Cart  First')
         }

         updateLocalStorage(state.cart)
      },

      removeFromCart (state, product) {
        let item = state.cart.find( i => i.id === product.id)

        if(item) {
          if(item.quantity > 1) {
            item.quantity--
          }else {
            state.cart = state.cart.filter( i => i.id !== product.id)
          }
        }
        updateLocalStorage(state.cart)
      },

      
    },

    actions: {
     
  },

 })
}
export default createStore
