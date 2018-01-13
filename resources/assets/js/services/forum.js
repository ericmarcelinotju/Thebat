import Vue from 'vue'
import store from './../store'

const URL = '/api/forum'

const HEADERS = {
  emulateJSON: true
}

export default {
  get () {
    return Vue.http.get(URL, null)
      .then( (response) => { 
        return response.body;
      });
  },
  find (id) {
    return Vue.http.get(URL + '/' + id, null)
      .then( (response) => { 
        return response.body;
      });
  },
  search (tag) {
    return Vue.http.get(URL + '/search/' + tag, null)
      .then( (response) => { 
        return response.body;
      });
  },
  create (data, token) {
    const params = { 
      'title': data.title, 
      'content': data.content, 
      'type' : data.type,
      'categories': data.categories,
      'rules': data.rules,
      '_token': token 
    }

    return Vue.http.post(URL + '/create', params, HEADERS)
      .then( (response) => { 
        return response.body;
      });
  },
}