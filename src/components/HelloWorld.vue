<template>
  <div>
    <LeftCenterRightList :leftCenterRightListArr="leftCenterRightListArr"></LeftCenterRightList>
    <CenterShade
      :centerShadeContent="centerShadeContent"
      v-if="isShowCenterShade"
      @clickCenterShadeOptFuc="clickCenterShadeOptFuc"
    ></CenterShade>
    <Tabs :tabsArr="tabsArr" :isFlexLayout="isFlexLayout" @getTabsItemWidth="getTabsItemWidth"></Tabs>
    <Search></Search>
    <UploadPic></UploadPic>
    <PasswordShade v-if="isShowPasswordInputShade"></PasswordShade>

    <!-- 地址选择弹窗 -->
    <div class="m_t30" id="multiPickerInput">点击选择地址</div>
    <div id="targetContainer"></div>

    <!-- 日期选择弹窗 -->
    <div class="m_t30" id="date-selector-input">点击选择时间</div>
    <div id="dateTargetContainer"></div>

    <section class="m_t30">
      <Waterfall></Waterfall>
    </section>
  </div>
</template>

<script>
import LeftCenterRightList from "@/components/leftCenterRightList";
import CenterShade from "@/components/centerShade";
import Tabs from "@/components/tabs";
import Search from "@/components/search";
import UploadPic from "@/components/uploadPic";
import PasswordShade from "@/components/passwordShade";
import Waterfall from "@/components/waterfall";

import MultiPicker from "mob-multi-picker";
import "../assets/css/multiPicker.less";
import AddressData from "../../static/province-city-area.json";

import DateSelector from "mob-date-selector";
import "../assets/css/dateSelector.less";

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
      isFlexLayout: false,
      isShowPasswordInputShade: false,
      provinceCityStr: ""
    };
  },

  components: {
    LeftCenterRightList,
    CenterShade,
    Tabs,
    Search,
    UploadPic,
    PasswordShade,
    Waterfall
  },

  computed: {},

  mounted() {
    this.$message("test");
    let self = this;
    new MultiPicker({
      input: "multiPickerInput",
      container: "targetContainer",
      jsonData: AddressData,
      success(arr) {
        switch (arr.length) {
          case 2:
            self.provinceCityStr = `${arr[0].value}市${arr[1].value}`;
            break;
          case 3:
            self.provinceCityStr = `${arr[0].value}省${arr[1].value}市${arr[2].value}`;
            break;
        }
        console.log(self.provinceCityStr);
      }
    });

    new DateSelector({
      input: "date-selector-input",
      container: "dateTargetContainer",
      type: 0,
      param: [1, 1, 1, 0, 0],
      beginTime: [1950, 1, 1],
      endTime: [],
      recentTime: [1990, 1, 1],
      success: function(arr, arr2) {
        console.log(arr, arr2);
      }
    });
  },

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