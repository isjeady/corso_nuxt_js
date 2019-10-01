import Vuex from 'vuex';
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts :  []
    },
    mutations: {
      setPosts(state,posts){
        state.posts = posts;
      },
    },
    actions: {
      nuxtServerInit(vueContext,context){
        console.log("nuxtServerInit");
        
        return axios.get('https://nuxt-corso-isjeady.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = [];
            for (const key in res.data){
              postsArray.push({...res.data[key], id: key})
            }
            vueContext.commit('setPosts',postsArray);
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
    }
  })
}


export default createStore;
