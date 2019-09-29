<template>
    <div>
        <p class="text-black font-extrabold text-3xl md:text-5xl">New Post</p>
            <PostForm :post="newPost" />
            <p class="text-center text-gray-500 text-xs">
                &copy;2019 Acme Corp. All rights reserved.
            </p>
    </div>
</template>


<script>
import PostForm from '~/components/Admin/PostForm.vue'

export default {
  components: {
    PostForm
  },
  data(){
    return {
        newPost : {
            id : '',
            title : '',
            description : '',
            thumbnail : '',
            userImg : '',
            timeToRead : '1 MIN READ',
            tail : '1/3',
        }
    }
  },
  methods : {
    save(){
      console.log(this.newPost)
    },
    cancel(){
      this.$router.push('/admin');
    }
  },
    layout : 'admin'
}
</script>
