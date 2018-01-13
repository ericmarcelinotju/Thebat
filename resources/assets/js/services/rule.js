import Vue from 'vue'
import store from './../store'

const URL = '/api/rule'

const HEADERS = {
  emulateJSON: true
}

export default {
  get () {
    return Vue.http.get(URL, null)
    .then((response) => {return response.body});
  },
}