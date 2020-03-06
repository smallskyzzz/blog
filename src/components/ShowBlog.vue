<template>
  <div class="show-blog">
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="(blog, index) in filterBlog" :key="index" class="blog">
      <h3 v-add-color>{{blog.title | uppercase}}</h3>
      <p>{{blog.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowBlog',
  data () {
    return {
      blogArr: [],
      search: '',
      filterBlog: []
    }
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(data => {
      this.blogArr = data.data
      this.filterBlog = this.blogArr
    })
  },
  watch: {
    search: function (val, oldVal) {
      this.filterBlog = this.blogArr.filter((value) => {
        return value.title.indexOf(val) > -1
      })
    }
  },
  filters: {
    uppercase: function (value) {
      return value.toUpperCase()
    }
  },
  directives: {
    addColor: {
      bind: function (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8)
      }
    }
  }
  // computed: {
  //   // eslint-disable-next-line vue/return-in-computed-property
  //   filterBlog: function () {
  //     var that = this
  //     this.blogArr.filter(function (value) {
  //       return value.title.indexOf(that.search) !== -1
  //     })
  //   }
  // }
}
</script>

<style scoped>
  .blog{
    max-width: 1000px;
    margin: 0 auto;
    background-color: #999;
  }
</style>
