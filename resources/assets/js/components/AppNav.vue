<template>
<!-- Fixed navbar -->
<nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <router-link class="navbar-brand" to="/home">
                        {{ appname }}
                    </router-link>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                      
                    
                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        <li>
                          <div class="col-md-12">
                            <form class="search-form form-inline">
                              <input class="form-control" type="text" placeholder="Search" v-model="searchText">
                              <button class="btn btn-outline-success" type="submit" @click="submitSearch($event)"><i class="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                          </div>
                        </li>
                        <li>
                          <router-link class="nav-link" to="home">Home <span class="sr-only">(current)</span></router-link>
                        </li>

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
                                {{ auth.user.username }}<span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu">
                                <li>
                                    <a @click="logout($event)">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
import AuthService from './../services/auth.js';

export default {
  data () {
    return {
      appname: this.$store.state.appname,
      auth: this.$store.state.auth,
      searchText: '',
    }
  },
  methods: {
    logout (event) {
      event.preventDefault();
      let token = $('meta[name="csrf-token"]').attr('content');
      AuthService.logout(token)
      .then( () => { 
        this.$router.push('/login')
      });
    },
    submitSearch (event) {
      event.preventDefault();
      this.$router.push({ name: 'forumsearch', params: { search: this.searchText }});
    }
  }
}
</script>

<style scoped>
.search-form{
  margin-top: 7px;
  width: 100%;
}

.search-form input[type="text"]{
  width: 80%;
}

@media only screen and (max-width: 768px)  {
  .search-form input[type="text"]{
    width: 94%;
    display: inline-block;
  }

  .search-form button{
    margin-bottom: 2px;
  }
}
</style>