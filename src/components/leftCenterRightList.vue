<template>
  <div>
    <!-- 左图中文字右状态的list显示组件 -->
    <ul class="win-ul" v-if="leftCenterRightListArr.length">
      <li
        v-for="(item,index) in leftCenterRightListArr"
        :key="index"
        class="flex flex-pack-justify flex-align-center win-item m_b20"
      >
        <div class="flex">
          <img :src="item.thumb" class="pro-img" />
          <div class="p_t10">
            <p class="color_33 font_size24 m_l20 m_b20">{{item.name}}</p>
            <p class="color_33 font_size24 m_l20">{{item.des}}</p>
          </div>
        </div>
        <span
          class="btn-public-style my_text_center color_FF"
          :class="item.status=='1'?'done':item.status == '2'?'yellow-bg':'blue-bg'"
          @click="clickBtnFuc(item.status,item.code,item.id)"
        >{{item.status == '1'?'已领取':item.status == '2'?'立即领取':'复制链接'}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    leftCenterRightListArr: Array
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    clickBtnFuc() {}
  },

  watch: {}
};
</script>
<style lang='less' scoped>
@import url(../assets/css/components/leftCenterRightList.less);
</style>