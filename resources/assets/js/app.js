require('./bootstrap');

require('froala-editor/js/froala_editor.pkgd.min')
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css')

import Vue from 'vue';
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueFroala from 'vue-froala-wysiwyg'

Vue.use(VueResource)
Vue.use(VueFroala)

/* App sass */
import './../sass/app.scss'

/* App component */
import App from './components/App'
import sessionMixin from './mixin/sessionMixin.js'

new Vue({
    el: '#app',
    mixins: [sessionMixin],
    data () {
    	return {
    		app_name: 'Thebat',
    	}
    },
    created () {
    	window.Vue = this;

      this.userSession()
        .then((response) => {
          console.log(response);
          store.state.auth.isLoggedIn = true;
          store.state.auth.user = response.body;
        })                    
        .catch((error) => console.log(error));
  	},
  	router,
  	store,
  	render: h => h(App)
});
