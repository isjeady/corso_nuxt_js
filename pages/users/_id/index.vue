<template>
  <div>
    <h1>Utente: {{ $route.params.id }}</h1>
  </div>
</template>


<script>

export default {
  validate(data){
    console.log(data.params);
    return /^\d+$/.test(data.params.id);
  },
  layout : 'users'
}

</script>
