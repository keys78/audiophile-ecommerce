import Vuex from 'vuex'
import product_image from '../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg'
import headphone_gallery1 from '../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import headphone_gallery2 from '../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import headphone_gallery3 from '../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'


const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [
        {
          "id":1,
          "new_product":true,
          "name":"XX99 MARK II HEADPHONES",
          "image":product_image,
          "alt":"xx99 mark II heaphones",
          "text_head":"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
          "unit_price":"$2,999.00",
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
          "name":"NUMBER 2",
          "image":"../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg",
          "alt":"xx99 mark II heaphones",
          "text_head":"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
          "unit_price":"$2,999.00",
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
          "id":3,
          "new_product":false,
          "name":"NUMBER 3",
          "image":"../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg",
          "alt":"xx99 mark II heaphones",
          "text_head":"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
          "unit_price":"$2,999.00",
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
