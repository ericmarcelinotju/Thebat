<template>
<div class="ev-view-forum">
 <insert-forum></insert-forum>
 <view-forum></view-forum>
</div>
</template>

<script>
 import InsertForum from './Insert.vue';
 import ViewForum from './View.vue';
export default {
  name: 'index-forum',
  components: {InsertForum, ViewForum},
  data () {
    return {
      
    }
  },
}
</script>