<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-warning">
            <p class="title">Post ID: {{ this.$route.params.id }}</p>
            <p class="subtitle">
               <template v-if="!loading">
                  <template v-if="!error">
                      <h3>Title: {{ getPost.title }}</h3>
                      <p>{{ getPost.body }}</p>
                  </template>
                  <template v-else>
                      <b>{{ error }}</b>
                  </template>
                </template>
                <template v-else>
                  <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                  <br><br>
                </template>
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions, } from 'vuex'

export default {
  mounted() {
    console.log('mounted');
    this.asyncPost();
  },
  computed: mapGetters({
    getPost: 'posts/getPost'
  }),
  data() {
    return {
      loading : true,
      error : false
    }
  },
  methods: {
    ...mapActions({
      asyncFetchPost: 'posts/asyncFetchPost'
    }),
    async asyncPost(){
      try{
        var promise = await this.asyncFetchPost({'id': this.$route.params.id})
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
