import Vue from 'vue'
import ProductPreview from './instances/ProductPreview.vue'
import ProductQuatity from './instances/Quantity.vue'
import AddToCart from './instances/AddToCart.vue'
import Home from './instances/Home.vue'

Vue.config.productionTip = true;
console.log('Is this triggered ?');

window.onload = function () {
  new Vue({
    render: h => h(ProductPreview),
  }).$mount('#productPreview');

  new Vue({
    render: h => h(Home),
  }).$mount('#home');

  console.log('Is this triggered ?');
  new Vue({
    render: h => h(ProductQuatity),
  }).$mount('#quantity');


  new Vue({
    render: h => h(AddToCart),
  }).$mount('#addtocart');

};


