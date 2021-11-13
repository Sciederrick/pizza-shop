import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import foodModule from './modules/food';
import cartModule from './modules/cart';
import galleryModule from './modules/gallery';
import orderModule from './modules/order';
import appModule from './modules/app';

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        food: foodModule,
        cart: cartModule,
        gallery: galleryModule,
        order: orderModule,
        app: appModule
    }
});
  