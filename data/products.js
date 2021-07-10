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

import product_image_zx9 from '../assets/images/product-zx9-speaker/desktop/image-product.jpg'
import zx9_gallery1 from '../assets/images/product-zx9-speaker/desktop/image-gallery-1.jpg'
import zx9_gallery2 from '../assets/images/product-zx9-speaker/desktop/image-gallery-2.jpg'
import zx9_gallery3 from '../assets/images/product-zx9-speaker/desktop/image-gallery-3.jpg'

import product_image_zx7 from '../assets/images/product-zx7-speaker/desktop/image-product.jpg'
import zx7_gallery1 from '../assets/images/product-zx7-speaker/desktop/image-gallery-1.jpg'
import zx7_gallery2 from '../assets/images/product-zx7-speaker/desktop/image-gallery-2.jpg'
import zx7_gallery3 from '../assets/images/product-zx7-speaker/desktop/image-gallery-3.jpg'

import product_image_yx1 from '../assets/images/product-yx1-earphones/desktop/image-product.jpg'
import yx1_gallery1 from '../assets/images/product-yx1-earphones/desktop/image-gallery-1.jpg'
import yx1_gallery2 from '../assets/images/product-yx1-earphones/desktop/image-gallery-2.jpg'
import yx1_gallery3 from '../assets/images/product-yx1-earphones/desktop/image-gallery-3.jpg'




const products = [
    {
        id:1,
        category:"headphones",
        new_product:true,
        style:false,  
        name:"XX99 MARK II HEADPHONES",
        cart_name:"XX99 MARK II",
        image:product_image_mark_two,
        alt:"xx99 mark II heaphones",
        text_head:"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        unit_price:2999.00,
        quantity:1,
        add_to_cart_btn:"ADD TO CART",
        features:{
            feature_A:"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
            feature_B:"The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
        },
        in_the_box:{
            f1:{"size":"1x", "text":"Headphone unit"},
            f2:{"size":"2x", "text":"Replacement earcups"},
            f3:{"size":"1x", "text":"User manual"},
            f4:{"size":"1x", "text":"3.5mm 5m audio cable"},
            f5:{"size":"1x", "text":"Travel bag"}
        },
        display_image: {
          image_1:headphone_gallery1,
          image_2:headphone_gallery2,
          image_3:headphone_gallery3
        }
    },
    {
        id:2,
        category:"headphones",
        new_product:false,
        style:true,  
        name:"XX99 MARK I HEADPHONES",
        cart_name:"XX99 MARK I",
        image:product_image_mark_one,
        alt:"xx99 mark I heaphones",
        text_head:"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        unit_price:1750.00,
        quantity:1,
        add_to_cart_btn:"ADD TO CART",
        features:{
            feature_A:"As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
            feature_B:"From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector."
        },
        in_the_box:{
            f1:{"size":"1x", "text":"Headphone unit"},
            f2:{"size":"2x", "text":"Replacement earcups"},
            f3:{"size":"1x", "text":"User manual"},
            f4:{"size":"1x", "text":"3.5mm 5m audio cable"},
            f5:{"size":"", "text":""}
        },
        display_image: {
          image_1:mark_one_gallery1,
          image_2:mark_one_gallery2,
          image_3:mark_one_gallery3
        }
    },
    {
        id:3,
        category:"headphones",
        new_product:false,
        style:false,  
        name:"XX59 HEADPHONES",
        cart_name:"XX59",
        image:product_image_xx59,
        alt:"xx59heaphones",
        text_head:"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        unit_price:899.00,
        quantity:1,
        add_to_cart_btn:"ADD TO CART",
        features:{
            feature_A:"These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
            feature_B:"More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
        },
        in_the_box:{
            f1:{"size":"1x", "text":"Headphone unit"},
            f2:{"size":"2x", "text":"Replacement earcups"},
            f3:{"size":"1x", "text":"User manual"},
            f4:{"size":"1x", "text":"3.5mm 5m audio cable"},
            f5:{"size":"1x", "text":"Travel bag"}
        },
        display_image: {
          image_1:xx59_gallery1,
          image_2:xx59_gallery2,
          image_3:xx59_gallery3
        }
    },
    {
        id:4,
        category:"speakers",
        new_product:false,
        style:false,  
        name:"ZX9 SPEAKER",
        cart_name:"ZX9",
        image:product_image_zx9,
        alt:"zx7 speaker",
        text_head:"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        unit_price:4500.00,
        quantity:1,
        add_to_cart_btn:"ADD TO CART",
        features:{
            feature_A:"Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
            feature_B:"Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
        },
        in_the_box:{
            f1:{"size":"2x", "text":"Speaker unit"},
            f2:{"size":"2x", "text":"Speaker cloth panel"},
            f3:{"size":"1x", "text":"User manual"},
            f4:{"size":"1x", "text":"3.5mm 5m audio cable"},
            f5:{"size":"1x", "text":"10m optical cable"}
        },
        display_image: {
          image_1:zx9_gallery1,
          image_2:zx9_gallery2,
          image_3:zx9_gallery3
        }
    },
    {
        id:5,
        category:"speakers",
        new_product:false,
        style:true,  
        name:"ZX7 SPEAKER",
        cart_name:"ZX7",
        image:product_image_zx7,
        alt:"zx7 speaker",
        text_head:"Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        unit_price:3500.00,
        quantity:1,
        add_to_cart_btn:"ADD TO CART",
        features:{
            feature_A:"Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
            feature_B:"The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
        },
        in_the_box:{
            f1:{"size":"2x", "text":"Speaker unit"},
            f2:{"size":"2x", "text":"Speaker cloth panel"},
            f3:{"size":"1x", "text":"User manual"},
            f4:{"size":"1x", "text":"3.5mm 7.5m audio cable"},
            f5:{"size":"1x", "text":"7.5m optical cable"}
        },
        display_image: {
          image_1:zx7_gallery1,
          image_2:zx7_gallery2,
          image_3:zx7_gallery3
        }
    },
    {
        id:6,
        category:"earphones",
        new_product:true,
        style:false,  
        name:"YX1 WIRELESS EARPHONES",
        cart_name:"YX1",
        image:product_image_yx1,
        alt:"yx1 earphones",
        text_head:"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        unit_price:599.00,
        quantity:1,
        add_to_cart_btn:"ADD TO CART",
        features:{
            feature_A:"Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
            feature_B:"The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
        },
        in_the_box:{
            f1:{"size":"2x", "text":"Earphone unit"},
            f2:{"size":"6x", "text":"Multi-size earplugs"},
            f3:{"size":"1x", "text":"User manual"},
            f4:{"size":"1x", "text":"USB-C charging cable"},
            f5:{"size":"1x", "text":"Travel Pouch"}
        },
        display_image: {
          image_1:yx1_gallery1,
          image_2:yx1_gallery2,
          image_3:yx1_gallery3
        }
    },
      

]


export default products