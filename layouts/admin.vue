<template>
  <div>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto">
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
  }
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
