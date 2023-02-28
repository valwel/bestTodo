<template>
  <div>
    <h1>Просмотр задания {{$route.params.todo}}</h1>
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>