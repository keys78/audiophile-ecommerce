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
      cart: [],
      userName:'',
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
      
      cartLength:state => {
        updateCartFromLocalStorage(state) 
        return state.cart.length
      },

      userName:state => {
        return state.userName
      },

      cartTotal: state => {
        let total = state.cart.reduce((sum,item) => sum + item.unit_price * item.quantity, 0);
          let myTotal = total.toLocaleString(undefined, {minimumFractionDigits: 2})
            return myTotal
     },

      grandTotal: state => {
        let total = state.cart.reduce((sum,item) => sum + item.unit_price * item.quantity, 50);
          let myTotal = total.toLocaleString(undefined, {minimumFractionDigits: 2})
            return myTotal
     },

     vat: state => {
        let total = state.cart.reduce((sum,item) => sum + item.unit_price * item.quantity, 0);
        let multipliedTotal = total * 20/100
        let myTotal = multipliedTotal.toLocaleString(undefined, {minimumFractionDigits: 2})
        return myTotal
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

      decreaseQuantity (state, product) {
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

      increaseFromCart (state, item) {
        item.quantity++
        updateLocalStorage(state.cart)
      },


      decreaseAndRemoveFromCart (state, item) {
        let itemx = state.cart.find( i => i.id === item.id)

        if(itemx) {
          if(itemx.quantity > 1) {
            itemx.quantity--
          }else {
            state.cart = state.cart.filter( i => i.id !== item.id)
          }
        }
        updateLocalStorage(state.cart)
      },

      
      clearCart: state => {
         state.cart = []
         updateLocalStorage(state.cart)
      },

      updateCartFromLocalStorage(state) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      }
      
    },

    actions: {
     
  },

 })
}
export default createStore
