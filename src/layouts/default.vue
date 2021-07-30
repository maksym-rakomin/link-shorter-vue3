<template>
  <div id="nav">
    <router-link to="/">Ссылки</router-link> |
    <router-link to="/create-link">Создать ссылку</router-link> |
    <router-link to="/auth">Выйти</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'defaultLayout'
}

</script>

<style lang="scss">


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
