<template>
  <div>
    <LeftCenterRightList :leftCenterRightListArr='leftCenterRightListArr'></LeftCenterRightList>
  </div>
</template>

<script>
import LeftCenterRightList from "@/components/leftCenterRightList";

export default {
  props: [""],
  data() {
    return {
      leftCenterRightListArr:[
        {
          id:1,
          thumb:'/static/images/test.png',
          name:'123',
          des:'这是一段测试描述',
          status:1
        },
        {
          id:2,
          thumb:'/static/images/test.png',
          name:'223',
          des:'这是一段测试描述',
          status:2
        },
      ]
    };
  },

  components: {
    LeftCenterRightList
  },

  computed: {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less' scoped>
</style>