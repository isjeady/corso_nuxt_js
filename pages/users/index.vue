<template>
  <div>
    <h1>Tutti gli Utenti</h1>
    <template v-for="n in 10" >
       <a :href="`/users/${n}`" :key="`__${n}`">Utente {{ n }}</a><br>
    </template>
  </div>
</template>


<script>
export default {
  layout : 'users'
}
</script>
