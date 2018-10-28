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
            <Cell title="building" extra="2" />
            <Cell title="idle" extra="2" />
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
    }
  },
  components: {
    AgentsList
  }
}
</script>

<style scoped>

</style>
