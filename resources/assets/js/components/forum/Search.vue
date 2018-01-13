<template>
<div class="ev-view-forum">
 <div v-for="forum in forums" class="card col-md-11">
      <div class="title"><legend>
          <span>{{ forum.type }}</span>
          <hr>  
          {{ forum.title }}
      </legend></div>
      <div class="rules">
        <i class="fa fa-book" aria-hidden="true"></i>
        <div  v-if="forum.rules.length > 0" class="rules-detail">
          <span v-for="rule in forum.rules">
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            {{ rule.name }}
          </span>
        </div>
      </div>
      <div class="content"> 
        <span v-html="forum.content"></span>
      </div>
      <div class="tags">
        <a v-for="category in forum.categories.split('#')">
          #{{ category }}
        </a>
      </div>
      <button class="btn btn-primary join-btn" @click="detail(forum.id)">Join</button>
  </div>
</div>
</template>

<script>
import ForumService from '../../services/forum.js';

export default {
name: 'search-forum',
data () {
  return {
    forums: [],
  }
},
methods:{
  detail(id){
    this.$router.push({ name: 'forumdetail', params: { forum_id: id }})
  },
  submitSearch (category) {
      this.$router.push({ name: 'forumsearch', params: { search: category }});
    }
},
mounted: function (argument) {
  ForumService.search(this.$route.params.search)
  .then((response) => {
    this.forums = response;
    console.log(this.$route.params.search);
    console.log(response);
  });
},
}
</script>

<style scoped>
.card{
  margin-top: 20px;
}

legend span{
  font-size: 0.6em;
}

legend hr{
  margin: 5px 0;
}

.title{
  display: inline-block;
  width: 96%;
}

.content{
  border: 1px solid lightgray;
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.rules{
  display: inline-block;
  width:  3%;
  vertical-align: top;
  font-size: 2em;
  cursor: pointer;
  text-align: right;
}

.rules i:hover{
  color: lightgray;
}

.rules:hover .rules-detail{
  display: block;
}

.rules-detail{
  display: none;
  position: absolute;
  right:  20px;
  font-size: 0.5em;
  background-color: white;
  border-radius: 3px;
  border: 1px solid lightgray;
  padding: 7px;
  line-height: 200%;
  z-index:  100; 
}

.rules-detail span{
  display: block;
}

.tags{
  position: relative;
  bottom: 5px;
}

.join-btn{
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>