<template>
  <div>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto">
    <div v-if="isAuth">
      <button @click="admin" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-3 mb-3 px-4 rounded">
          Admin
      </button>
      <button @click="newPostPage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Nuovo Post
      </button>
      <button @click="logout" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Logout
      </button>
      <hr>
    </div>
    <nuxt />
    </div>
  </div>
</template>


<script>
import Sidenav  from '~/components/Navigator/Sidenav.vue'
import Header  from '~/components/Navigator/Header.vue'

export default {
  components: {
    Sidenav,
    Header
  },
  data(){
    return {
      sidenav : false
    }
  },
  computed : {
    isAuth(){
      return this.$store.getters.isAuth
    }
  },
  methods : {
    admin(){
      this.$router.push('/admin');
    },
    newPostPage(){
      this.$router.push('/admin/post/new');
    },
    logout(){
      this.$router.push('/admin/auth/logout');
    }
  },
}
</script>


<style>
html {
  /*font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',Roboto, 'Helvetica Neue', Arial, sans-serif;*/
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.header-site{
  background-image:url('~assets/bg/rear.jpeg');
  height: 60vh;
  max-height:360px;
}

</style>
