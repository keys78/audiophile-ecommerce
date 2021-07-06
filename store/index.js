import Vuex from 'vuex'
import product_image_mark_two from '../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg'
import headphone_gallery1 from '../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import headphone_gallery2 from '../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import headphone_gallery3 from '../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'

import product_image_mark_one from '../assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import mark_one_gallery1 from '../assets/images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import mark_one_gallery2 from '../assets/images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import mark_one_gallery3 from '../assets/images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'

import product_image_xx59 from '../assets/images/product-xx59-headphones/desktop/image-product.jpg'
import xx59_gallery1 from '../assets/images/product-xx59-headphones/desktop/image-gallery-1.jpg'
import xx59_gallery2 from '../assets/images/product-xx59-headphones/desktop/image-gallery-2.jpg'
import xx59_gallery3 from '../assets/images/product-xx59-headphones/desktop/image-gallery-3.jpg'




const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [
        {
          "id":1,
          "new_product":true,
          "name":"XX99 MARK II HEADPHONES",
          "cart_name":"XX99 MARK II",
          "image":product_image_mark_two,
          "alt":"xx99 mark II heaphones",
          "text_head":"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
          "unit_price":"299900",
          "add_to_cart_btn":"ADD TO CART",
          "features":{
              "feature_A":"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
              "feature_B":"The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
          },
          "in_the_box":{
              "f1":{"size":"1x", "text":"Headphone unit"},
              "f2":{"size":"2x", "text":"Replacement earcups"},
              "f3":{"size":"1x", "text":"User manual"},
              "f4":{"size":"1x", "text":"3.5mm 5m audio cable"},
              "f5":{"size":"1x", "text":"Travel bag"}
          },
          "display_image": {
            "image_1":headphone_gallery1,
            "image_2":headphone_gallery2,
            "image_3":headphone_gallery3
          }
      },
        {
          "id":2,
          "new_product":false,
          "name":"XX99 MARK I HEADPHONES",
          "cart_name":"XX99 MARK I",
          "image":product_image_mark_one,
          "alt":"xx99 mark I heaphones",
          "text_head":"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
          "unit_price":"1,750.00",
          "add_to_cart_btn":"ADD TO CART",
          "features":{
              "feature_A":"As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
              "feature_B":"From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector."
          },
          "in_the_box":{
              "f1":{"size":"1x", "text":"Headphone unit"},
              "f2":{"size":"2x", "text":"Replacement earcups"},
              "f3":{"size":"1x", "text":"User manual"},
              "f4":{"size":"1x", "text":"3.5mm 5m audio cable"},
              "f5":{"size":"", "text":""},
          },
          "display_image": {
              "image_1":mark_one_gallery1,
              "image_2":mark_one_gallery2,
              "image_3":mark_one_gallery3
          }
      },
        {
          "id":3,
          "new_product":false,
          "name":"XX59 HEADPHONES",
          "cart_name":"XX59 HEADPHONES",
          "image":product_image_xx59,
          "alt":"xx99 mark II heaphones",
          "text_head":"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
          "unit_price":"899.00",
          "add_to_cart_btn":"ADD TO CART",
          "features":{
              "feature_A":"These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
              "feature_B":"More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
          },
          "in_the_box":{
              "f1":{"size":"1x", "text":"Headphone unit"},
              "f2":{"size":"2x", "text":"Replacement earcups"},
              "f3":{"size":"1x", "text":"User manual"},
              "f4":{"size":"1x", "text":"3.5mm 5m audio cable"},
              "f5":{"size":"", "text":""}
          },
          "display_image": {
              "image_1":xx59_gallery1,
              "image_2":xx59_gallery2,
              "image_3":xx59_gallery3
          }
      },
      ]
    },

    mutations: {
   
    },
    
    getters: {

    },

    actions: {
     
  },

 })
}
export default createStore
