<template>
  <div style="height:500px">
    <vueWaterfallEasy :imgsArr="imgsArr" @scrollReachBottom="getData" ref="waterfall">
      <div class="img-info" slot-scope="props">
        <p class="some-info">第{{props.index+1}}张图片</p>
        <p class="some-info">{{props.value.info}}</p>
      </div>
    </vueWaterfallEasy>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import axios from "axios";
import { getWaterfallFuc } from "@/model/getData";
export default {
  props: [""],
  data() {
    return {
      imgsArr: [],
      group: 0
    };
  },

  components: {
    vueWaterfallEasy
  },

  computed: {},

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      getWaterfallFuc(this.group).then(res => {
        console.log(res);
        this.imgsArr = this.imgsArr.concat(res);
        // this.$refs.waterfall.waterfallOver()
      });
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
</style>