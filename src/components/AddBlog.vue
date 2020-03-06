<template>
  <div class="add-blog">
    <h2>新增博客</h2>
    <form action="">
      <div class="form-group">
        <label>请输入博客标题</label>
        <input type="text" placeholder="标题">
      </div>
      <div class="form-group">
        <label>请输入博客内容</label>
        <textArea></textArea>
      </div>
      <div class="form-group">
        <label>请选择博客分类</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">Vue.js
        <input type="checkbox" value="Node.js" v-model="blog.categories">Node.js
        <input type="checkbox" value="xx.js" v-model="blog.categories">xx.js
        <input type="checkbox" value="xxx.js" v-model="blog.categories">xxx.js
      </div>
      <ul>
        <li v-for="(item, index) in blog.categories" :key="index">{{item}}</li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      blog: {
        categories: []
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
