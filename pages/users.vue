<template>
  <div>
    <h1>Utenti Page</h1>
    <div>
      <ul>
        <li><nuxt-link to="/users/2">Nuxt Link - Utenti</nuxt-link></li>
        <li><a href="/users/46">Utenti</a></li>
      </ul>
      <hr>
    </div>
    <div class="container">
      <nuxt-child />
    </div>
  </div>
</template>


<script>
export default {
  layout : 'users'
}
</script>
