<template>
<div id="agent-item">
  <i-row>
    <i-col span="2">
      <i-icon type="logo-github" size="30" />
    </i-col>
    <i-col span="22">
      <div>{{url}} | {{state}} | {{server}} | {{path}}</div>
      <div>
        <i-poptip v-model="popTipVisible" placement="bottom">
          <i-button type="text"><i-icon type="ios-add" size="18" /><u>Specify Resources</u></i-button>
          <div slot="title">(separate multiple resources name with commas)</div>
          <div slot="content">
            <i-input v-model="resourcesValue" placeholder="eg. chrome, mysql" clearable />
            <br />
            <i-button @click="popTipClose">Add resources</i-button>
            <i-button @click="popTipClose">Close</i-button>
          </div>
        </i-poptip>
        <span v-show="resources.length > 0">| Resources:</span>
        <span v-for="resource in resources" :key="resource.id">
          {{resource}} <i-button size="small" shape="circle"><i-icon type="ios-close" size="18" /></i-button>
        </span>
        <i-button type="text"><i-icon type="ios-remove-circle-outline" size="18" /><u>Deny</u></i-button>
      </div>
    </i-col>
  </i-row>
</div>
</template>

<script>
export default {
  name: 'AgentItem',
  data: function() {
    return {
      popTipVisible: false,
      resourcesValue: ''
    }
  },
  props: {
    url: String,
    type: String,
    state: String,
    server: String,
    path: String,
    resources: {
      type: Array,
      default: () => []
    }
  },
  computed: {

  },
  components: {

  },
  methods: {
    popTipClose: function(){

    }
  }
}
</script>

<!-- 通过sass代码编写css -->
<style>

</style>
