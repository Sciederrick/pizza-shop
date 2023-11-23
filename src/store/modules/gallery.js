export default {
    state: {
        foodGallery: [ 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg' ]
    },
    mutations: {
        setFoodGallery(state, images) {
            state.foodGallery = images;
        }
    },
    actions: {
        async fetchFoodGallery({ commit }) {
            const url = 'https://foodAPI.com/gallery';
            const images = await(url);
            if (typeof images === 'Array' && images.length > 0) {
                commit('setFoodGallery', images);
            }
        }
    }
}