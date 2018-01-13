import Vue from 'vue';

let sessionMixin = {
  methods: {
    userSession(){
      return Vue.http.get('/api/auth/get-user', null);
    }
  }
}

export default sessionMixin;