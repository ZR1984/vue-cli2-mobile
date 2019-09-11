<template>
  <div>
    <LeftCenterRightList :leftCenterRightListArr="leftCenterRightListArr"></LeftCenterRightList>
    <CenterShade
      :centerShadeContent="centerShadeContent"
      v-if="isShowCenterShade"
      @clickCenterShadeOptFuc="clickCenterShadeOptFuc"
    ></CenterShade>
    <Tabs :tabsArr="tabsArr" :isFlexLayout="isFlexLayout" @getTabsItemWidth='getTabsItemWidth'></Tabs>
    <Search></Search>
  </div>
</template>

<script>
import LeftCenterRightList from "@/components/leftCenterRightList";
import CenterShade from "@/components/centerShade";
import Tabs from "@/components/tabs";
import Search from "@/components/search";

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
      tabsArr: [
        {
          tab_title: "这是测试tab1"
        },
        {
          tab_title: "这是测试tab2"
        },
        {
          tab_title: "这是测试tab1"
        },
        {
          tab_title: "这是测试tab2"
        }
      ],
      isFlexLayout:false
    };
  },

  components: {
    LeftCenterRightList,
    CenterShade,
    Tabs,
    Search
  },

  computed: {},

  mounted() {},

  methods: {
    clickCenterShadeOptFuc(data) {
      this.isShowCenterShade = false;
      console.log(data);
    },
    //获取tabs里所有li的总长度
    getTabsItemWidth(data) {
      this.tabsLiWidth = data;
      this.$nextTick(() => {
        if (this.tabsLiWidth > document.body.clientWidth) {
          this.isFlexLayout = false;
        } else {
          this.isFlexLayout = true;
        }
      });
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
</style>