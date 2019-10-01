<template>
    <div>
        <p class="text-black font-extrabold text-3xl md:text-5xl">Edit Post : {{ $route.params.postId }}</p>
            <div class="text-2xl" v-if="loading">Caricamento in corso...</div>
            <div class="text-2xl" v-if="saved">Salvato Correttamente...</div>
            <PostForm v-if="!loading" :post="editViewPost" @save="edit"/>
            <p class="text-center text-gray-500 text-xs">
                &copy;2019 Acme Corp. All rights reserved.
            </p>
    </div>
</template>


<script>
import PostForm from '~/components/Admin/PostForm.vue'
import axios from 'axios'

export default {
  components: {
    PostForm
  },
  asyncData(context){
  console.log('asyncData');
	  return axios.get(`https://nuxt-corso-isjeady.firebaseio.com/posts/${context.params.postId}.json`)
        .then(res => {
          return {
            editViewPost : res.data
          }
        })
        .catch(error => {
          console.log(error);
        });
  },
  data(){
    return {
        loading : false,
        saved : false
    }
  },
  methods : {
    edit(editPost){
      this.loading = true
      console.log(editPost);
       axios.put(`https://nuxt-corso-isjeady.firebaseio.com/posts/${this.$route.params.postId}.json`,editPost)
      .then(result => {
        this.loading = false;
        this.saved = true;
        console.log(result)
      })
      .catch( error => {
        this.loading = false;
        console.log(error);
      });
    },
    cancel(){
      this.$router.push('/admin');
    }
  },
    layout : 'admin'
}
</script>
