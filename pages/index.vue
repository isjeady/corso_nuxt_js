<template>
<div>
      <h1 class="title">
        Posts
      </h1>
      <template v-if="!loading">
        <template v-if="!error">
          <div class="tile is-ancestor" v-for='post in getPosts' :key="post.id">
            <div class="tile is-vertical is-full">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-primary">
                    <p class="title">Post # <nuxt-link :to="`/post/${post.id}`">
                {{ post.id }}
              </nuxt-link></p>
                    <p class="subtitle">{{ post.title }}</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
            <b>{{ error }}</b>
        </template>
      </template>
      <template v-else>
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <br><br>
      </template>
</div>
</template>

<script>
import { mapGetters,mapActions, } from 'vuex'

export default {
  mounted() {
    console.log('mounted');
    this.asyncPosts();
  },
  computed: mapGetters({
    getPosts: 'posts/getPosts'
  }),
  data() {
    return {
      loading : false,
      error : false
    }
  },
  methods: {
    ...mapActions({
      fetchPosts: 'posts/fetchPosts',
      asyncFetchPosts: 'posts/asyncFetchPosts'
    }),
    async asyncPosts(){
      try{
        var promise = await this.asyncFetchPosts()
        this.loading = !promise.success;
      } catch(err) {
        this.loading = false;
        this.error = err ;
      }
    },
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
