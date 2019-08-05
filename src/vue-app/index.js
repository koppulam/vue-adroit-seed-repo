import Vue from 'vue';
import ProductPreview from './instances/ProductPreview.vue'
import ProductQuatity from './instances/Quantity.vue'
import AddToCart from './instances/AddToCart.vue'
import Home from './instances/Home.vue'

import componentMap from './instanceMap.js';

Vue.config.productionTip = false

/**
 * @description this function renders the appropriate component at the selected node
 * @param {*} tag HTML tag to be replaced by the react component
 * @param {*} Comp A Vue Component to replace the HTML tag
 * @param {*} node HTMl node
 * @param {*} i index of the tag in array
 * @returns {void}
 */
function renderNode(tag, Comp, node, i) {
  const attrs = Array.prototype.slice.call(node.attributes);

  const props = {
    key: `${tag}-${i}`
  };

  attrs.forEach((attr) => {
    props[attr.name] = attr.value;
    return null;
  });

  props.compTag = tag;
  if (!node.attributes.bootstraped) {


    var ComponentClass = Vue.extend(Comp)
    var instance = new ComponentClass({
      propsData: props
    });
    instance.$mount(tag);
    attrs.forEach((attr) => {
      node.removeAttribute(attr);
    });
    node.setAttribute('bootstraped', true);
  }
}

function render(tag, Comp) {
  document.createElement(tag);
  const nodes = Array.from(document.getElementsByTagName(tag));

  nodes.map((node, i) => renderNode(tag, Comp.comp, node, i));
}

function bootstrap() {
  Object.keys(componentMap).forEach(key => {
    render(key, componentMap[key]);
  });
}

bootstrap();


