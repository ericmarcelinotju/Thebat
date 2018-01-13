<template>
    <div id="app">
     <template>
        <app-nav v-if="auth.isLoggedIn"></app-nav>

        <router-view></router-view>

        <app-footer v-if="auth.isLoggedIn"></app-footer>
      </template>
    </div>
</template>

<script>
  import AppNav from './AppNav.vue'
  import AppFooter from './AppFooter.vue'
  
  export default {
    name: 'app',
    components: { AppNav, AppFooter },
    data () {
      return {
        auth: this.$store.state.auth,
      }
    }
  }
</script>

<style scoped>
.app{
  position: relative;
}
</style>
