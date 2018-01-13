<template>
  <footer class="ev-appfooter">
    <div class="container">
      <span class="text-muted">Place sticky footer content here.</span>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      auth: 'test'
    }
  }
}
</script>

<style lang="scss" scoped>
.ev-appfooter {
  margin-top: 40px;
  width: 100%;
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
.ev-appfooter > .container {
  padding-right: 15px;
  padding-left: 15px;
}
</style>
