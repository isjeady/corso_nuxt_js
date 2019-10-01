import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts :  [],
      post : {}
    },
    mutations: {
      setPosts(state,posts){
        state.posts = posts;
      },
      setPost(state,post){
        state.post = post;
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
      },
      getPost(state){
        return state.post;
      }
    }
  })
}


export default createStore;
