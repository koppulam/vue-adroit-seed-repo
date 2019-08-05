import ProductPreview from './instances/ProductPreview.vue'
import ProductQuatity from './instances/Quantity.vue'
import AddToCart from './instances/AddToCart.vue'
import Home from './instances/Home.vue'

const instanceMap = {
  'addtocart': { comp: AddToCart },
  'quantity': { comp: ProductQuatity },
  'home': { comp: Home },
  'productPreview': { comp: ProductPreview }
};

export default instanceMap;