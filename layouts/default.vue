<template>
  <div>
    <Header @sidenavToggle="sidenav = !sidenav" />
    <Sidenav :show="sidenav" @close="sidenav = false" />
    <div class="w-full m-0 p-0 bg-cover bg-bottom header-site" >
			<div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
			</div>
		</div>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <nuxt />
    </div>
  </div>
</template>


<script>
import Sidenav  from '~/components/Navigator/Sidenav.vue'
import Header  from '~/components/Navigator/Header.vue'

export default {
  //middleware : 'firstMiddleware',
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
