import Vue from 'vue'
import store from './../store'

const URL = '/api/comment'

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
  create (data, token) {
    const params = { 
      'content': data.content, 
      'forum_id': data.forum_id, 
      'comment_id' : data.comment_id,
      '_token': token 
    }

    return Vue.http.post(URL + '/create', params, HEADERS)
      .then( (response) => { 
        return response.body;
      });
  },
}