<template>
<div id="app">
  <header>Cruise Signed in as <u>Member</u>
    <Icon type="ios-arrow-round-forward" size="18"></Icon>
    <u>Sign Out</u>
  </header>
  <main>
    <Tabs type="card" value="agents" :animated="false">
      <TabPane label="DASHBOARD" name="dashboard">DASHBOARD</TabPane>
      <TabPane label="MY CRUICE" name="my-cruice">MY CRUICE</TabPane>
      <TabPane label="AGENTS" name="agents">
        <agents-pane></agents-pane>
      </TabPane>
      <TabPane label="HELP" name="help">HELP</TabPane>
    </Tabs>
  </main>
  <footer>Copyright: Thoughtworks.inc</footer>
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
