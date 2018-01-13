<template>
<div class="container">
<div class="row">
<div class="col-md-6 col-md-offset-3">
<div class="panel panel-default">
  <div class="panel-heading">Login</div>
  <div class="panel-body">
     <form class="form-horizontal" @submit="submit($event)">
        <div class="form-group">
            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

            <div class="col-md-6">
                <input id="email" type="email" class="form-control" v-model="credentials.email" required autofocus>
            </div>
        </div>

        <div class="form-group">
            <label for="password" class="col-md-4 control-label">Password</label>

            <div class="col-md-6">
                <input id="password" type="password" class="form-control" v-model="credentials.password" required>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="credentials.remember"> Remember Me
                    </label>
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-8 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                    Login
                </button>

                <router-link class="btn btn-link" to="register">
                    Register
                </router-link>
            </div>
        </div>
    </form>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
import AuthService from './../../services/auth.js'

export default {
  name: 'login',

  data () {
    return {
      credentials: {
        email: '',
        password: '',
        remember: false,
      },
      error: ''
    }
  },
  methods: {
    submit (event) {
      event.preventDefault();
      let token = $('meta[name="csrf-token"]').attr('content');
      AuthService.login(this.credentials, token)
      .then((response) => {
        this.$router.push('/home')
      })
      .catch((exception) => {
        console.log(exception);
      });
    }
  }
}
</script>

<style scoped>
.container{
  height: 100vh;
  display: flex;
  align-items: center;
}
.row{
  width:100%;
}
</style>
