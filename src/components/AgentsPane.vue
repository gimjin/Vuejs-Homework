<template>
<div id="agents-pane">
  <Layout>
    <Layout>
      <Content>
        <agents-list></agents-list>
      </Content>
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Card title="Summary" :padding="0" shadow>
          <CellGroup>
            <Cell title="building" :extra="building" />
            <Cell title="idle" :extra="idle" />
          </CellGroup>
        </Card>
        <Card title="History" :padding="0" shadow>
          <CellGroup>
            <Cell title="bjstdmngbgr02.thoughtworks.com" />
            <Cell title="bjstdmngbgr02.thoughtworks.com" />
            <Cell title="bjstdmngbgr02.thoughtworks.com" />
            <Cell title="bjstdmngbgr02.thoughtworks.com" />
            <Cell title="bjstdmngbgr02.thoughtworks.com" />
            <Cell title="bjstdmngbgr02.thoughtworks.com" />
            <Cell title="bjstdmngbgr02.thoughtworks.com" />
            <Cell title="bjstdmngbgr02.thoughtworks.com" />
          </CellGroup>
        </Card>
        <div slot="trigger"></div>
      </Sider>
    </Layout>
  </Layout>
</div>
</template>

<script>
import AgentsList from './AgentsList.vue'

export default {
  name: 'AgentsPane',
  data() {
    return {
      isCollapsed: false,
      agentsType: 'virtual',
      building: '2',
      idle: '2',
    }
  },
  components: {
    AgentsList
  },
  computed: {

  },
  methods: {
    hh: function(){
      alert(this.agentsType)
    }
  },
  mounted: function() {

  },
}
</script>

<style scoped>

</style>
