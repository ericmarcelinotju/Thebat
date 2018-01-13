<template>
  <div>
  <div class="card col-md-11">
      <div class="title"><legend>
          <span>{{ forum.type }}</span>
          <hr>  
          {{ forum.title }}
      </legend></div>
      <div class="rules">
        <div class="rules-detail">
          <span v-for="rule in forum.rules">
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
            {{ rule.name }}
          </span>
        </div>
        <span>by {{ forum.user.username }}</span>
      </div>
      <div class="content"> 
        <span v-html="forum.content"></span>
      </div>

      <div class="comments">
        <div v-for="comment in forum.comments" class="comment-item">
          <b>
          {{comment.username}}
          </b>
          {{comment.content}}
          <br>
          <a @click="showReply(comment)">reply</a>
          <div class="comments-comment">
            <div v-for="comment2 in comment.comments" class="comment-item">
              <b>
              {{comment2.username}}
              </b>
              {{comment2.content}}
            </div>
          </div>
          <div v-if="comment.isReply" class="comment grid">
            <input type="text" placeholder="Express your thoughts" v-model="comment.commentContent">
            <button class="btn"><i class="fa fa-paper-plane-o" aria-hidden="true" @click="doCommentComment(comment)"></i></button>
          </div>
        </div>
      </div>

      <div class="comment grid">
        <input type="text" placeholder="Express your thoughts" v-model="comment">
        <button class="btn"><i class="fa fa-paper-plane-o" aria-hidden="true" @click="doComment(forum.id)"></i></button>
      </div>
      
  </div>
  </div>
</template>

<script>
import ForumService from '../../services/forum.js';
import CommentService from '../../services/comment.js';

export default {
name: 'detail-forum',
data () {
  return {
    forum: {},
    comment: '',
  }
},
methods:{
  doComment(id){
    let token = $('meta[name="csrf-token"]').attr('content');

    CommentService.create({
      content: this.comment,
      forum_id: id,
      comment_id: null,
    }, token)
    .then((response) => { 
      this.forum.comments.push(response);
    });
  },
  showReply(comment){
    comment.isReply = true;
  },
  doCommentComment(comment){
    let token = $('meta[name="csrf-token"]').attr('content');
    console.log(comment);
    CommentService.create({
      content: comment.commentContent,
      forum_id: null,
      comment_id: comment.id,
    }, token)
    .then((response) => { 
      this.forum.comments.push(response);
    });
  },
  showReply(comment){
    comment.isReply = true;
  },
},
mounted: function () {
  ForumService.find(this.$route.params.forum_id)
  .then((response) => {
    console.log(response);
    this.forum = response;
    for(let i = 0 ; i < this.forum.comments.length ; i++){
      this.$set(this.forum.comments[i], 'isReply', false);
      this.$set(this.forum.comments[i], 'commentContent', '');
    }
  });
},
}
</script>

<style scoped>
.card{
  margin-top: 20px;
  min-height: 200px;
  padding-bottom: 20px;
}

.content{
  border: 1px solid lightgray;
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 20px;
  margin-top: 10px;
}

legend span{
  font-size: 0.6em;
}

legend hr{
  margin: 5px 0;
}

.title{
  display: inline-block;
  width: 80%;
}

.rules{
  display: inline-block;
  width:  auto;
  vertical-align: top;
  font-size: 1.4em;
  cursor: pointer;
  text-align: left;
  float: right;
}

.rules-detail{
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

.join-btn{
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.grid{
  display: flex;
}

.comment input{
  flex: 1 1 auto;
  border-radius: 18px;
  height: 40px;
  margin-right: 12px;
  padding-left: 16px;
  border: 1px solid lightgray;
}

.comment input:focus{
  outline: none;
}

.comment button{
  flex: 0 0 auto;
  border-radius: 100%;
  height: 40px;
}

.comment-item{
  border-radius: 18px;
  background-color: #fafafa;
  padding: 5px 16px;
  margin-bottom: 10px;
}

.comment-item a{
  margin-left: 10px;
}

.comments-comment{
  padding-left: 20px;
}

.comments-comment .comment-item{
  background-color: #fdfdfd;
}
</style>