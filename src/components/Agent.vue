<template>
<div id="agent">
  <li @click="haha">{{ urlData }}</li>
</div>
</template>

<script>
export default {
  name: 'Agent',
  data: function() {
    return {
      urlData: this.url
    }
  },
  props: {
    url: String
  },
  computed: {

  },
  components: {

  },
  methods: {
    haha: function(){
      alert(this.urlData + '{urlData---url}' + this.url)
    }
  }
}
</script>

<!-- 通过sass代码编写css -->
<style>

</style>
