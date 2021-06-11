<template>
  <div>
    <div class="container">
      <CardArticle :value="value" />
    </div>
    <div id="commentdiv">
      <div class="title is-4 box">
        Comentarios destacados
        <CardComment v-for="comment in comments" :key="comment._id" :value="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import exerciseItem from "../components/partials/exerciseItem";
export default {
  components: {
    exerciseItem
  },
  name: "ArticlePage",
  props: {
    value: Object
  },
  data(){
    return {
      comments: []
    }
  },
  async beforeMount() {
    try {
      const comments = await this.$api.comments.list()
      this.comments = comments.filter((comment) => 
      this.value.comments.forEach(commentId => comment._id === commentId))
      console.log(this.comments)
    } catch (error) {
      console.log(error);
    }
  },
};
</script>