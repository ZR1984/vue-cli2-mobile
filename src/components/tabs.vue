<template>
  <div class="tabs-outer-box" :class="!isFlexLayout && 'tabs-outer-box-overflow'">
    <ul class="font_size32 color_33 tabs-ul" :class="isFlexLayout?'flex-layout':'tabs-ul-overflow'">
      <li
        v-for="(item,index) in tabsArr"
        :key="index"
        @click="changeTabsFuc(index)"
        class="li-item"
        :class="{'li-item-border':(!item.icon && index!=tabsArr.length-1),'flex-1':isFlexLayout}"
        ref="tabsItem"
      >
        <div class="flex flex-pack-center tabs-item" :class="{'active':nowIndex==index}">
          <span>{{item.tab_title}}</span>
          <div class="bottom-line"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabsArr: {
      type: Array,
      default: () => []
    },
    isFlexLayout: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      nowIndex: 0
    };
  },
  mounted() {
    let tabsItemWidth = 0;
    this.$refs.tabsItem.forEach((item, index) => {
      tabsItemWidth += item.offsetWidth;
    });
    this.$emit("getTabsItemWidth", tabsItemWidth);
  },
  methods: {
    changeTabsFuc(index) {
      this.nowIndex = index;
      this.$emit("changeTabsFuc", index);
    }
  }
};
</script>
<style lang='less' scoped>
@import url(../assets/css/components/tabs.less);
</style>