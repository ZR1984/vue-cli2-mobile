<template>
  <div class="shade">
    <div class="password-input bg_colorFF">
      <div class="color_33 my_text_center title p_t30 p_b30">请输入支付密码</div>
      <div class="flex flex-pack-center flex-align-center p_l30 p_r30 m_b58">
        <input
          type="password"
          maxlength="1"
          v-for="(item,index) in inputArr"
          :key="index"
          v-model="item.modelVal"
          class="input my_text_center"
          ref="pwdInputArr"
          @keydown="deleteFuc(index,$event)"
        />
      </div>
      <div class="font_size26 color_33 flex flex-pack-justify psd-button">
        <span @click="cancelPasswordShadeFuc">取消</span>
        <span class="color_005" @click="submitPasswordShadeFuc">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
import { isNot } from "@/common/utils";
export default {
  data() {
    return {
      inputArr: [
        {
          modelVal: ""
        },
        {
          modelVal: ""
        },
        {
          modelVal: ""
        },
        {
          modelVal: ""
        },
        {
          modelVal: ""
        },
        {
          modelVal: ""
        }
      ]
    };
  },

  mounted() {
    this.$refs.pwdInputArr[0].focus();
  },

  updated() {
    this.inputArr.forEach((item, index) => {
      if (item.modelVal) {
        let i = index + 1 >= this.inputArr.length ? index : index + 1;
        this.$refs.pwdInputArr[i].focus();
      }
    });
  },

  methods: {
    cancelPasswordShadeFuc() {
      this.$emit("cancelPasswordShadeFuc");
    },
    submitPasswordShadeFuc() {
      let result = this.inputArr.every(item => item.modelVal !== "");
      if (result) {
        this.$emit("submitPasswordShadeFuc", this.inputArr);
        this.cancelPasswordShadeFuc();
      } else {
        this.$message("密码设置错误");
      }
    },
    deleteFuc(index, e) {
      if (e.keyCode == 46 || e.keyCode == 8) {
        let i = index - 1 >= 0 ? index - 1 : 0;
        this.inputArr[i].modelVal = "";
        if (index == 1) {
          this.$refs.pwdInputArr[0].focus();
        }
      }
    }
  }
};
</script>
<style lang='less' scoped>
@import url("../assets/css/components/inputPasswordShade.less");
</style>