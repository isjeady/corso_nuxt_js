<template>
  <div>
    <h1>Utente: {{ $route.params.id }}</h1>
  </div>
</template>


<script>

export default {
  validate(data){
    console.log(data);
    return true;
  }
}

</script>
