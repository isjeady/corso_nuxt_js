import Vuex from 'vuex';
import axios from 'axios'// Vue router instance

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts :  [],
      token : null
    },
    mutations: {
      setPosts(state,posts){
        state.posts = posts;
      },
      newPost(state,newPost){
        state.posts.push(newPost);
      },
      editPost(state,editPost){
        const index = state.posts.findIndex(post => post.id == editPost.id);
        state.posts[index] = editPost;
      },
      setToken(state,token){
        state.token = token;
      },
      clearToken(state){
        state.token = null;
      }
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
            //console.log(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      },
      addPost(context,newPost){
        return axios.post('https://nuxt-corso-isjeady.firebaseio.com/posts.json?auth=' + context.state.token,newPost)
          .then(result => {
            console.log(result.data.name);
            context.commit('newPost',{ ...newPost, id : result.data.name });
          })
          .catch( error => {
            console.log(error);
          });
      },
      editPost(context,editPost){
        return axios.put(`https://nuxt-corso-isjeady.firebaseio.com/posts/${editPost.id}.json?auth=${context.state.token}`,editPost)
          .then(result => {
            console.log(result.data.name);
            context.commit('editPost',editPost);
          })
          .catch( error => {
            console.log(error);
          });
      },
      setPosts(context,posts){
        context.commit('setPosts',posts);
      },
      verifyAuth(vueContext){
        
        const token = localStorage.getItem("token");
        const tokenExpiresIn = localStorage.getItem("tokenExpiresIn");

        if(new Date().getTime() > +tokenExpiresIn || !token){
          //TODO: Logout
          return;
        }

        vueContext.commit("setToken",token);
      }
    },
    getters : {
      getPosts(state){
        return state.posts;
      },
      getPost : (state) => (postId) =>{
        const p = state.posts.find(post => post.id == postId);
        return p ? p : null;
      },
      isAuth(state){
        return state.token != null
      }
    }
  })
}


export default createStore;
