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
import axios from 'axios'

export default {
  /*
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
  */
 data(){
   return {
        editViewPost : {},
        loading : false,
        saved : false
    }
  },
  created(){
    const p = this.$store.getters.getPost(this.$route.params.postId);
    this.editViewPost = p;
  },
  updated(){
    const p = this.$store.getters.getPost(this.$route.params.postId);
    this.editViewPost = p;
  },
  methods : {
    edit(editPost){
      this.loading = true
      this.$store.dispatch('editPost',editPost)
      .then(result => {
        console.log
        this.loading = false;
        this.saved = true;
      })
      .catch( error => {
        this.loading = false;
      });
    },
    cancel(){
      this.$router.push('/admin');
    }
  },
    layout : 'admin',
      middleware: ['auth']
}
</script>
