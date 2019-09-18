<template>
  <div class="upload-pic-box">
    <el-upload
      class="pic-upload"
      :action="action"
      list-type="picture-card"
      :on-change="beforeAvatarUploadImage"
      :auto-upload="false"
      :on-remove="removeImgFuc"
      :file-list="imgIDArr"
    >
      <i class="el-icon-plus"></i>
      <div class="tips my_text_center color_B0">
        <p class="m_b10">点击上传图片</p>
      </div>
    </el-upload>
  </div>
</template>

<script>
import { isNot, dealImage, base64ToBlob } from "@/common/utils";
export default {
  props: {
    limit: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      action: "",
      imgIDArr: []
    };
  },

  methods: {
    //上传图片
    beforeAvatarUploadImage(file, fileList) {
      if (fileList.length >= this.limit) {
        document.querySelector(".el-upload--picture-card").style.display =
          "none";
      } else {
        document.querySelector(".el-upload--picture-card").style.display =
          "inline-block";
      }
      dealImage(file.url, { width: 750, height: 578, quality: 0.6 }, data => {
        let blob = base64ToBlob(data, { type: "image/jpeg" });
        var fd = new FormData();
        fd.append("file", blob, Date.now() + ".jpg");
        fd.append("fileType", "file");
        this.$https.formdataPost("api/upload/upload_image", fd).then(res => {
          if (res.code == "1") {
            let imgD = res.data;
            imgD.uid = file.uid;
            imgD.url = file.url;
            this.imgIDArr.push(imgD);
          } else {
            this.$message(res.msg);
          }
        });
      });
    },
    //删除图片
    removeImgFuc(file, fileList) {
      this.imgIDArr.forEach((item, index, arr) => {
        if (item.uid == file.uid) {
          arr.splice(index, 1);
        }
      });
      if (fileList.length < this.limit) {
        document.querySelector(".el-upload--picture-card").style.display = "inline-block";
      }
    },
    submitImgIDFuc() {
      this.$emit("getImgIDFuc", { imgIDArr: this.imgIDArr});
    }
  }
};
</script>
<style lang='less' scoped>
@import url(../assets/css/components/uploadPic.less);
</style>