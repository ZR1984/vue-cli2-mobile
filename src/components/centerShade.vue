<template>
  <div class="shade">
    <div class="inner-box bg_colorFF my_text_center">
      <p class="color_31 font_size32 m_b30">{{centerShadeContent.title}}</p>
      <p class="color_9B font_size24">{{centerShadeContent.subTitle}}</p>
      <ul class="opt-ul flex flex-align-center border_t">
        <li
          v-for="(item,index) in centerShadeContent.chooseOpt"
          :key="index"
          class="flex-1 font_size28"
          :class="{'border_r':index!==centerShadeContent.chooseOpt.length-1,'color_81':item.label=='确定'}"
          @click="clickOptFuc(item.optionFuc)"
        >{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    centerShadeContent: {
      type: Object,
      default: ()=>{}
    }
  },

  methods: {
    clickOptFuc(fuc) {
      this.$emit("clickCenterShadeOptFuc", fuc());
    }
  }
};
</script>
<style lang='less' scoped>
@import url(../assets/css/components/centerShade.less);
</style>