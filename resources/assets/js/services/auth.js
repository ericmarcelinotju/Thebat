import Vue from 'vue'
import store from './../store'

const URL = '/api/auth'

const HEADERS = {
  emulateJSON: true
}

export default {
  login (data, token) {
    const params = { 
      'email': data.email, 
      'password': data.password, 
      'remember': data.remember,
      '_token': token 
    }

    return Vue.http.post(URL + '/login', params, HEADERS)
      .then( (response) => {
        console.log(response);

        store.state.auth.isLoggedIn = true;
        store.state.auth.user = response.body;

        store.commit('UPDATE_AUTH', store.state.auth);
      });
  },
  register (data, token) {
    const params = {
      'username' : data.username, 
      'email': data.email, 
      'password': data.password,
      '_token': token 
    }

    return Vue.http.post(URL + '/register', params, HEADERS);
  },
  logout (token){
    const params = {
      '_token': token, 
    }

    return Vue.http.post(URL + '/logout', params, HEADERS)
      .then( (response) => {

        store.state.auth.isLoggedIn = false;
        store.state.auth.user = {};

        store.commit('UPDATE_AUTH', store.state.auth);
      });
  },
}