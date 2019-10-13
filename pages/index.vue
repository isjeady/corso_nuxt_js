<template>
  <div>
    <p class="text-white font-extrabold text-3xl md:text-5xl">Home</p>
    <PostList type="last" />
  </div>
</template>

<script>

export default {
  mounted(){
    console.log(process.env.BASE_URL);
  }
}
</script>


