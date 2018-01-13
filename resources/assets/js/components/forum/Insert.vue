<template>
  <div class="card col-md-11">
  <legend>{{ auth.user.username }}</legend>
  <button class="toogle-button btn btn-primary" @click="showForm($event)">Start a debate</button>
  <transition name="slide-fade">
   	<form class="form-insert" v-show="isShowForm">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Debate Title" v-model="forum.title" required>
      </div>
      <div class="form-group">
        <froala :tag="'textarea'" :config="config" v-model="forum.content"></froala>
      </div>
      <div class="form-group">
        <div class="grid">
          <div class="rule-item">
            <label>
                <input type="radio" name="type" value="scientific" v-model="forum.type"> 
                Scientific
            </label>
            <label>
                <input type="radio" name="type" value="discussion" v-model="forum.type"> 
                Discussion
            </label>
            <label>
                <input type="radio" name="type" value="open" v-model="forum.type"> 
                Open
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div id="grid" >
          <div v-for="(category, index) in forum.categories" class="category-tag grid-item">
            <span>{{ category }}</span>
            <i class="fa fa-times" aria-hidden="true" v-on:click="forum.categories.splice(index)"></i>
          </div>
          <div class="invisibleInput grid-item"> 
              <input type="text" placeholder="Debate Categories"  v-model="currCategory" @keyup.space="createCategory">
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="grid" >
          <div v-for="(rule, index) in rules" class="rule-item">
            <label> 
              <input type="checkbox" v-bind:value="rule.id" v-model="forum.rules">
                {{ rule.name }}
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="create($event)">Create</button>
      </div>
   	</form>
   </transition>
  </div>
</template>

<script>
import ForumService from '../../services/forum.js';
import RuleService from '../../services/rule.js';

export default {
name: 'insert-forum',
data () {
  return {
    auth: this.$store.state.auth,
    isShowForm: false,
    config: {
      placeholderText: 'Debate Content',
      events: {
        'froalaEditor.initialized': function () {
          console.log('initialized')
        }
      }
    },
    currCategory: '',
    categoryPaddingLeft: '',
    rules: [],
    forum:{
      title: '',
      content: '',
      type: '',
      categories: [],
      rules: [],
    },
  }
},
 methods: {
  create (event) {
    event.preventDefault();
    console.log(this.forum);
    let token = $('meta[name="csrf-token"]').attr('content');
    ForumService.create({
      title: this.forum.title,
      content: this.forum.content,
      type: this.forum.type,
      categories: this.forum.categories.join('#'),
      rules: this.forum.rules
    }, token)
    .then((response) => {
      console.log(response);
    })
    .catch((exception) => {
      console.log(exception);
    });
  },
  showForm(event){
    event.preventDefault();
    if(this.isShowForm)
      this.isShowForm = false;
    else
      this.isShowForm = true;
  },
  createCategory(){
    let category = this.currCategory.trim();

    if (category.length > 0) {
      if( this.forum.categories.indexOf(category) == -1){
        this.forum.categories.push(category);
        this.currCategory = '';
      }else{
        this.currCategory = '';
      }
    }
  },
},
mounted: function () {
  RuleService.get()
  .then((response) => {
    this.rules = response;
  });
},
}
</script>

<style>
#grid {
  display: flex;
  flex-wrap:  wrap;
  border: 1px solid lightgray;
  border-radius: 4px;
  min-height: 36px;
  line-height: 1.6;
  padding: 6px 12px;
}

.grid{
  display: flex;
  flex-wrap: wrap;
}

.rule-item{
  flex: 0 0 auto;
  padding: 0 5px;
  width:  auto;
  margin: 2px 4px 2px 0;
}

.category-tag{
  flex: 0 0 auto;
  border: 0.5px solid grey;
  border-radius: 5px;
  padding: 0 5px;
  width:  auto;
  margin: 2px 4px 2px 0;
}

.invisibleInput{
  flex: 1 1 auto;
}

.invisibleInput input{
  border: none;
  background-color: transparent;
  width:  100%;
}

.invisibleInput input:focus{
  outline: none;
}

.category-tag i{
  cursor: pointer;
}

.card{
  margin: 0 auto;
  float: none;
  background-color: white;
  border-radius: 3px;
  padding: 20px;
}

.form-insert{
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  transition: all 2s ease;
  overflow-y: hidden;
  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);
}

.toogle-button{
  width: 100%;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter{
  max-height: 0;
}
.slide-fade-enter-to{
  max-height: 300px;
}
.slide-fade-leave{
  max-height: 300px;
}
.slide-fade-leave-to{
  max-height: 0;
}
</style>