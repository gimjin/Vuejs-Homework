<template>
<div id="app">
  <i-tabs type="card" value="agents">
    <i-tabpane label="DASHBOARD" name="dashboard">DASHBOARD</i-tabpane>
    <i-tabpane label="MY CRUICE" name="my-cruice">MY CRUICE</i-tabpane>
    <i-tabpane label="AGENTS" name="agents">
      <agents-pane></agents-pane>
    </i-tabpane>
    <i-tabpane label="HELP" name="help">HELP</i-tabpane>
  </i-tabs>
</div>
</template>

<script>
import AgentsPane from './components/AgentsPane.vue'

export default {
  name: 'App',
  data() {
    return {
      langList: [{
          value: 'en_US',
          label: 'English'
        },
        {
          value: 'zh_CN',
          label: '中文'
        },
      ],
      lang: '',
      name: 'Sison'
    }
  },
  components: {
    AgentsPane
  },
  methods: {

  },
  // 组件创建时钩子函数/回调函数
  mounted: function() {

  }
}
</script>
<style>

</style>
