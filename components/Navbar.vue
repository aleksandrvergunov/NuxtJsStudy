<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">NuxtJs</a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link active-class="active" exact class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Users</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
          </li>
          <li class="nav-item" v-else>
            <nuxt-link active-class="active" class="nav-link" to="/login">Login</nuxt-link>
          </li>

        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "Navbar",
        computed: {
            isAuth() {
                return this.$store.getters.isAuth
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>

<style scoped>

</style>
