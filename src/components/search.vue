<template>
  <div class="search">
    <input
      class="search_input"
      :placeholder="placeholder"
      type="text"
      v-model="inputContent"
      @focus="focus"
    />
    <img class="search_icon" src="../assets/img/icon/search-gray.png" @click="handlerClick" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    isIndexPage: {
      type: String,
      default: ""
    },
    isEmptyInputContent: {
      type: Boolean,
      default: false
    },
    zhanquID: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      inputContent: ""
    };
  },

  methods: {
    handlerClick() {
      this.$emit("searchFuc", this.inputContent);
    },
    //input获取焦点
    focus() {
      switch (this.isIndexPage) {
        case "index":
          this.$router.push("/search");
          break;
        case "mall":
          this.$router.push({
            path: "/mallSearch",
            query: { zhanquID: this.zhanquID }
          });
          break;

        default:
          break;
      }
    }
  },
  watch: {
  }
};
</script>
<style lang='less' scoped>
@import url("../assets/css/components/search.less");
</style>