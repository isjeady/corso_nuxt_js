import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts :  []
    },
    mutations: {
      setPosts(state,posts){
        state.posts = posts;
      }
    },
    actions: {
      setPosts(context,posts){
        context.commit('setPosts',posts);
      }
    },
    getters : {
      getPosts(state){
        return state.posts;
      }
    }
  })
}


export default createStore;
