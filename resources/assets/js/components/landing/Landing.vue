<template>
  <div id="app">
    <div class="flex-center position-ref full-height">

            <div class="content">
                <div class="title m-b-md">
                    Thebat
                </div>

                <div class="desc">
                  a forum dedicated to debate
                </div>
                <div class="link">
                  <router-link class="nav-link" to="app">Login</router-link> or <a href="">continue anonymously</a>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'landing',
    data () {
      return {
        app_name: 'Thebat',
      }
    },

  }
</script>

<style scoped>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Raleway', sans-serif;
        font-weight: 100;
        height: 100vh;
        margin: 0;
    }

    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .content {
        text-align: center;
    }

    .title {
        font-size: 84px;
    }

    .desc {
        color: #636b6f;
        padding: 0 20px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: .2rem;
        text-decoration: none;
        text-transform: uppercase;  
    }

    .link {
        color: #636b6f;
        margin-top: 20px;
        padding: 0 20px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;  
    }

    .m-b-md {
        margin-bottom: 30px;
    }
</style>
