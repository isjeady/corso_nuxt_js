import Vuex from 'vuex';
import axios from 'axios'

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
      nuxtServerInit(vueContext,context){
        console.log("nuxtServerInit");
        
        return axios.get('https://nuxt-corso-isjeady.firebaseio.com/posts.json')
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      },
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
