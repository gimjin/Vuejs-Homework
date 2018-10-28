<template>
<div id="agents-list" class="container-fluid">

  <div class="row">
    <div style="padding: 10px; margin-bottom: 10px; background: #e8eaec;">
      Agents
      <RadioGroup v-model="selectedType" type="button">
        <Radio label="all"></Radio>
        <Radio label="physical"></Radio>
        <Radio label="virtual"></Radio>
      </RadioGroup>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-8" style="margin-bottom: 20px">
      <Scroll :on-reach-bottom="handleReachBottom" loading-text="Loading" height="410">
        <agent-item v-for="(item, index) in filteredAgent" :key="index" :item="item"></agent-item>
      </Scroll>
    </div>
    <div class="col-sm-4" style="height: 410px; overflow: scroll;">
      <div class="panel panel-default">
        <div class="panel-heading">Summary</div>
        <div class="panel-body">
          <dl class="dl-horizontal" style="margin-bottom: 0">
            <dt>building:</dt>
            <dd>2</dd>
            <dt>idle:</dt>
            <dd>2</dd>
          </dl>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">History</div>
        <ul class="list-group">
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import AgentItem from './AgentItem.vue'
import axios from 'axios'
// import {
//   LoadingBar
// } from 'iView'

export default {
  name: 'AgentsList',
  data: function() {
    return {
      selectedType: 'physical',
      page: 0
    }
  },
  computed: {
    filteredAgent: function() {
      let vm = this
      let type = vm.selectedType
      if (type == 'all') {
        // 返回所有数据
        return vm.$store.state.agentsData
      } else {
        // 过滤数组，根据selectedType只返回physical 或 virtual
        return vm.$store.state.agentsData.filter(item => item.type == type)
      }
    }
  },
  components: {
    AgentItem
  },
  methods: {
    handleReachBottom: function() {
      return new Promise(resolve => {
        // 模拟请求服务器网络延迟2s，动态读取json数据
        setTimeout(() => {
          axios
            .get(`/static/json/request-page=${this.page}.json`)
            .then(response => {
              this.$store.commit('loadAgentsData', response.data.agents)
              this.page++
            })
            .catch(error => {
              console.log(error)
              this.errored = true
            })
          resolve()
        }, 2000)
      })
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      // 挂载组件后DOM被绘制时执行，数据读取操作并且显示顶部Loading
      this.$Loading.start()
      axios
        .get(`/static/json/request-page=${this.page}.json`)
        .then(response => {
          // 已加载数据追加写入store
          this.$store.commit('loadAgentsData', response.data.agents)
          // 更新页面标记位
          this.page++
          // 加载成功结束Loading
          this.$Loading.finish()
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    })
  }
}
</script>

<style>
/* bootstrap label样式影响 iView Radio label为粗体 */
.ivu-radio-group label {
  font-weight: normal;
}
</style>
