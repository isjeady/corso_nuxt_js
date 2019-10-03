<template>
    <div>
        <p class="text-black font-extrabold text-3xl md:text-5xl">New Post</p>
            <div class="text-2xl" v-if="loading">Caricamento in corso...</div>
            <div class="text-2xl" v-if="saved">Salvato Correttamente...</div>
            <PostForm v-if="!loading" @save="save" />
            <p class="text-center text-gray-500 text-xs">
                &copy;2019 Acme Corp. All rights reserved.
            </p>
    </div>
</template>


<script>
import axios from 'axios'
import PostForm from '~/components/Admin/PostForm.vue'

export default {
  components: {
    PostForm
  },
  data(){
    return {
      loading : false,
      saved : false
    }
  },
  methods : {
    save(newPost){
      this.loading = true
      this.$store.dispatch('addPost',newPost).then(
        result => {
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
