import Axios from "axios";
import { setTimeout } from "timers";

export default {
  fetchPosts({commit}) {
    console.log("getPost");
    return Axios.get('https://jsonplaceholder.typicode.com/posts').then(
      (req) => {
        console.log(req.data);
        commit('setPosts',req.data);
        return req.data;
    });
  },
  asyncFetchPosts ({dispatch,commit},params) {
    return Axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        if (response.status === 200) {
          commit('setPosts', response.data);
          return {'success' : true};
        }
      })
      .catch((e) => {
        throw Error(e.response.status + ":Posts Not Found");
      });
  },
  async asyncFetchPost({dispatch,commit},params) {
      await new Promise(resolve => setTimeout(resolve, 2000));

      return Axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              commit('setPost', response.data);
            }
            return {'success' : true};
          })
        .catch((e) => {
          throw Error(e.response.status + ":Post Not Found");
        });
  },
};
