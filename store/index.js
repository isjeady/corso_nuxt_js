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
      nuxtServerInit(vueContext,context){
        console.log("nuxtServerInit");
        if(!process.client){
          console.log(context.req);
        }
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            vueContext.commit('setPost', {
                  pst : {
                    tail : '1/2',
                    id : 3,
                    title : 'Lorem ipsum dolor sit amet.',
                    description : 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.' ,
                    thumbnail : 'https://source.unsplash.com/collection/764827/800x600',
                    userImg : 'http://i.pravatar.cc/300',
                    timeToRead : '1 MIN READ'
                  }
                });
                resolve();
              },2000);
          });
      },
      setPosts(context,posts){
        vueContext.commit('setPosts',posts);
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
