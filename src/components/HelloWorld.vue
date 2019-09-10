<template>
  <div>
    <LeftCenterRightList :leftCenterRightListArr="leftCenterRightListArr"></LeftCenterRightList>
    <CenterShade
      :centerShadeContent="centerShadeContent"
      v-if="isShowCenterShade"
      @clickCenterShadeOptFuc="clickCenterShadeOptFuc"
    ></CenterShade>
  </div>
</template>

<script>
import LeftCenterRightList from "@/components/leftCenterRightList";
import CenterShade from "@/components/centerShade";

export default {
  props: [""],
  data() {
    return {
      leftCenterRightListArr: [
        {
          id: 1,
          thumb: "/static/images/test.png",
          name: "123",
          des: "这是一段测试描述",
          status: 1
        },
        {
          id: 2,
          thumb: "/static/images/test.png",
          name: "223",
          des: "这是一段测试描述",
          status: 2
        }
      ],
      centerShadeContent: {
        title: "同意该笔退款",
        subTitle: "同意后金额将会退回对方账户",
        chooseOpt: [
          { label: "确定", optionFuc: () => true },
          { label: "取消", optionFuc: () => false }
        ]
      },
      isShowCenterShade: false,
    };
  },

  components: {
    LeftCenterRightList,
    CenterShade
  },

  computed: {},

  mounted() {},

  methods: {
    clickCenterShadeOptFuc(data) {
      this.isShowCenterShade = false;
      console.log(data);
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
</style>