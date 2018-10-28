<template>
<div id="agent-item">
  <Row>
    <Col span="2">
    <Icon type="logo-github" size="30" />
    </Col>
    <Col span="22">
    <div>{{item.url}} | {{item.state}} | {{item.server}} | {{item.path}}</div>
    <div>
      <Poptip v-model="poptipVisible" placement="bottom">
        <Button type="text">
          <Icon type="ios-add" size="18"></Icon><u>Specify Resources</u>
        </Button>
        <div slot="content">
          <div>(separate multiple resources name with commas)</div>
          <Input v-model="newResources" placeholder="eg. chrome, mysql" clearable />
          <br />
          <Button @click="addResoures" :loading="addLoading">Add resources</Button>
          <Button @click="poptipClose">Close</Button>
        </div>
      </Poptip>
      <span>| Resources:</span>
      <span v-for="(resource, index) in this.$store.state.agentsData[item.id].resources" :key="index">
        {{resource}}
        <Button size="small" shape="circle" @click="delConfirm(index, resource)">
          <Icon type="ios-close" size="18"></Icon>
        </Button>
      </span>
      <Button type="text">
        <Icon type="ios-remove-circle-outline" size="18"></Icon><u>Deny</u>
      </Button>
    </div>
    </Col>
  </Row>
</div>
</template>

<script>
export default {
  name: 'AgentItem',
  props: ['item'],
  data: function() {
    return {
      poptipVisible: false,
      addLoading: false,
      newResources: '',
    }
  },
  // computed: {
  //   resourcesData: {
  //     set: function(v) {
  //       this.rrrrrr = v
  //     },
  //     get: function() {
  //       return this.rrrrrr
  //     }
  //   }
  // },
  components: {

  },
  methods: {
    poptipClose: function() {
      this.poptipVisible = false
    },
    addResoures: function() {
      if (this.newResources == '') {
        // 不允许输入为空
        this.$Message.error('Please input resource name!')
      } else {
        this.addLoading = true
        setTimeout(() => {
          // 去掉所有空格
          this.newResources = this.newResources.replace(/\s/g, "")
          // 中文逗号转换为英文逗号
          this.newResources = this.newResources.replace(/，/g, ",")
          // 字符串创建数组
          let res = this.newResources.split(',')
          // 过滤JS数组中的空值,假值等
          res = res.filter(item => item)
          // 更新数据模型，更新UI
          this.$store.commit('addResources', {
            'id': this.item.id,
            'res': res
          })
          // 清空输入框数据
          this.newResources = ''
          // 隐藏输入框
          this.poptipVisible = false
          // 提示成功
          this.$Message.success('Specify resources success!')
          // 隐藏poptip & 更新button loading状态
          this.poptipVisible = false
          this.addLoading = false
        }, 2000)
      }
    },
    delConfirm: function(index, res) {
      this.$Modal.confirm({
        title: 'Confirm',
        content: `<p>Are you sure delete <font color="red">${res}</font> resource?</p>`,
        loading: true,
        onOk: () => {
          setTimeout(() => {
            this.$Modal.remove()
            this.$store.commit('removeResource', {
              'id': this.item.id,
              'index': index
            })
            this.$Message.info(`Deleted Resource <font color="red">${res}</font>`)
          }, 2000)
        }
      })
    }
  }
}
</script>

<!-- 通过sass代码编写css -->
<style>

</style>
