<template>
<!-- 修改背景颜色 -->
<div class="panel panel-default" :style="{background: item.state == 'idle' ? '#CCE8B5' : '#FFFBB9'}">
  <div class="panel-body">
    <div class="media">

      <div class="media-left media-middle">
        <!-- 根据状态修改图标 -->
        <Icon :type="item.state == 'idle' ? 'ios-code' : 'ios-code-working'" size="40" />
      </div>

      <div class="media-body">
        <div>{{item.url}} | {{item.state}} | {{item.server}} | {{item.path}}</div>
        <div>
          <Poptip v-model="poptipVisible" placement="bottom">
            <Button type="text" size="small">
              <Icon type="md-add" size="14"></Icon><u>Specify Resources</u>
            </Button>
            <div slot="content">
              <div class="margin-gap">(separate multiple resources name with commas)</div>
              <div class="margin-gap"><Input v-model="newResources" placeholder="e.g. chrome, firefox, safari" clearable /></div>
              <div class="margin-gap">
                <Button @click="addResoures" :loading="addLoading" type="primary">Add resources</Button>
                <Button @click="poptipClose">Close</Button>
              </div>
            </div>
          </Poptip>
          <span>| Resources:</span>
          <span v-for="(resource, index) in item.resources" :key="index">
            <Button size="small" type="text" @click="delConfirm(index, resource)">
              {{resource}}
              <Icon type="ios-close-circle-outline" size="16"></Icon>
            </Button>
          </span>
        </div>
      </div>

      <div class="media-right media-bottom">
        <Button type="text" size="small" v-show="item.state == 'idle'">
          <Icon type="ios-remove-circle-outline" size="16"></Icon><u>Deny</u>
        </Button>
      </div>

    </div>
  </div>
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
  methods: {
    poptipClose: function() {
      this.poptipVisible = false
    },
    addResoures: function() {
      let vm = this
      if (vm.newResources == '') {
        // 不允许输入为空
        vm.$Message.error('Please input resource name!')
      } else {
        // 开始按钮loading状态
        vm.addLoading = true
        // 模拟请求服务器和修改本地store过程2s
        setTimeout(() => {
          // 去掉所有空格
          vm.newResources = vm.newResources.replace(/\s/g, "")
          // 中文逗号转换为英文逗号
          vm.newResources = vm.newResources.replace(/，/g, ",")
          // 创建数组
          let res = vm.newResources.split(',')
          // 过滤数组中的空值和假值等，ES6的方法很方便
          res = res.filter(item => item)
          // 更新数据模型响应，UI自动更新
          vm.$store.commit('addResources', {
            'id': vm.item.id,
            'res': res
          })
          // 清空输入框数据
          vm.newResources = ''
          // 隐藏输入框
          vm.poptipVisible = false
          // 提示添加Resources成功
          vm.$Message.success('Specify resources success!')
          // 隐藏poptip
          vm.poptipVisible = false
          // 停止button loading状态
          vm.addLoading = false
        }, 2000)
      }
    },
    delConfirm: function(index, res) {
      let vm = this
      vm.$Modal.confirm({
        title: 'Confirm',
        content: `<p>Are you sure delete <font color="red">${res}</font> resource?</p>`,
        okText: 'Ok',
        cancelText: 'Cancel',
        loading: true,
        onOk: () => {
          // 模拟请求服务器删除数据后更新本地store数据过程2s
          setTimeout(() => {
            // 删除store指定resource
            vm.$store.commit('removeResource', {
              'id': vm.item.id,
              'index': index
            })
            // 隐藏已弹出的Modal
            vm.$Modal.remove()
            // 界面提醒删除成功
            vm.$Message.info(`Deleted Resource <font color="red">${res}</font>`)
          }, 2000)
        }
      })
    }
  }
}
</script>

<style>
.margin-gap {
  margin-bottom: 6px;
}
</style>
