<template>
<div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
<div class="panel panel-default">
  <div class="panel-heading">Register</div>
  <div class="panel-body">
     <form class="form-horizontal" @submit="submit($event)">
        <div class="form-group">
            <label for="name" class="col-md-4 control-label">Name</label>

            <div class="col-md-6">
                <input id="name" type="text" class="form-control" v-model="credentials.username" required autofocus>
            </div>
        </div>

        <div class="form-group">
            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

            <div class="col-md-6">
                <input id="email" type="email" class="form-control" v-model="credentials.email" required>
            </div>
        </div>

        <div class="form-group">
            <label for="password" class="col-md-4 control-label">Password</label>

            <div class="col-md-6">
                <input id="password" type="password" class="form-control" v-model="credentials.password" required>
            </div>
        </div>

        <div class="form-group">
            <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

            <div class="col-md-6">
                <input id="password-confirm" type="password" class="form-control" v-model="credentials.password_confirmation" required>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                    Register
                </button>
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
  name: 'register',

  data () {
    return {
      credentials: {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      error: ''
    }
  },
  methods: {
    submit (event) {
      event.preventDefault();
      let token = $('meta[name="csrf-token"]').attr('content');
      AuthService.register(this.credentials, token)
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
