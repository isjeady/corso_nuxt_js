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
      newPost(state,newPost){
        state.posts.push(newPost);
      },
      editPost(state,editPost){
        const index = state.posts.findIndex(post => post.id == editPost.id);
        state.posts[index] = editPost;
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
        return axios.post('https://nuxt-corso-isjeady.firebaseio.com/posts.json',newPost)
          .then(result => {
            console.log(result.data.name);
            context.commit('newPost',{ ...newPost, id : result.data.name });
          })
          .catch( error => {
            console.log(error);
          });
      },
      editPost(context,editPost){
        return axios.put(`https://nuxt-corso-isjeady.firebaseio.com/posts/${editPost.id}.json`,editPost)
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
      }
    },
    getters : {
      getPosts(state){
        return state.posts;
      },
      getPost : (state) => (postId) =>{
        const p = state.posts.find(post => post.id == postId);
        return p ? p : null;
      }
    }
  })
}


export default createStore;
