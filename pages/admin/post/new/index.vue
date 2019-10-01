<template>
    <div>
        <p class="text-black font-extrabold text-3xl md:text-5xl">New Post</p>
            <PostForm :post="newPost" @save="save" />
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
        newPost : {
            tail : '1/3', 
            title : 'Lorem ipsum dolor sit amet.',
            description : 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.' ,
            thumbnail : 'https://source.unsplash.com/collection/225/800x600', 
            userImg : 'http://i.pravatar.cc/300', 
            timeToRead : '1 MIN READ'
        }
    }
  },
  methods : {
    save(newPost){
      //console.log(this.newPost)
      axios.post('https://nuxt-corso-isjeady.firebaseio.com/posts.json',newPost)
      .then(result => console.log(result))
      .catch( error => console.log(error));
    },
    cancel(){
      this.$router.push('/admin');
    }
  },
    layout : 'admin'
}
</script>
