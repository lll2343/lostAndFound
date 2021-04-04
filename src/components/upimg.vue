<template>
  <div class="z_upimg_vessel">
    <div class="z_upimg_screen">
      <div
        class="z_div_vessel"
        v-for="(item,index) in srcs"
        :key="index"
        hover-class="hover_class"
        :style="{'min-width':width,'height':height}"
        @click="preimg(item,urls,index)"
      >
        <img class="z_img" :src="item" />
      </div>

      <div class="z_upimg_btn" @click="upimg" :style="{'min-width':width,'height':height}">
        <span class="z_upimg_add">+</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name:'upimg',
  data() {
    return {
      urls: []
    };
  },
  props: {
    //图片宽度
    width: {
      type: String,
      default: "120rpx"
    },
    //图片高度
    height: {
      type: String,
      default: "120rpx"
    },
    //最大上传数量
    max: {
      type: Number,
      default: 3
    },
    srcs: {
      type: Array,
      default: []
    }
  },
  components: {},
  computed: {},
  methods: {
    upimg() {
      const that = this;
      if (this.urls.length < this.max) {
        var number = this.max - this.urls.length;
        wx.chooseImage({
          count: number, // 最多可以选择的图片张数，默认3
          sizeType: ["original", "compressed"], // original 原图，compressed 压缩图，默认二者都有
          sourceType: ["album", "camera"], // album 从相册选图，camera 使用相机，默认二者都有
          success: function(res) {
            res.tempFilePaths.forEach(list => {
              that.urls.push(list);
            });
            that.$emit("choosed",that.urls);
          }
        });
      } else {
        wx.showToast({
          title: `最多上传${that.max}张图片哦~`,
          icon: "none",
          duration: 1500,
          mask: true
        });
      }
    },
    preimg(item, urls, index) {
      const that = this;
      wx.showActionSheet({
        itemList: ["预览", "删除"],
        itemColor: "#000000",
        success: res => {
          if (res.tapIndex === 0) {
            wx.previewImage({
              current: item, // 当前显示图片的链接，不填则默认为 urls 的第一张
              urls: urls
            });
          } else {
            that.urls.splice(index, 1);
            that.$emit("delete",that.urls);
          }
        }
      });
    }
  },
  mounted() {
    this.urls = [].concat(this.srcs);
  }
};
</script>

<style scoped>
.z_upimg_vessel {
  width: 100%;
  box-sizing: border-box;
  padding: 0 30rpx;
}
.z_upimg_screen {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20rpx 0;
}
.z_upimg_screen::-webkit-scrollbar {
  display: none;
}
.z_upimg_btn {
  border: 2rpx dashed #ddd;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-right: 30rpx;
}
.z_div_vessel {
  margin-right: 30rpx;
  overflow: hidden;
  /* box-shadow: 0px 6px 18px 0px rgba(195, 195, 195, 0.51); */
}
.z_upimg_add {
  font-size: 80rpx;
  font-weight: 500;
  color: #c9c9c9;
}
.z_img {
  width: 100%;
  height: 100%;
}
.hover_class {
  background-color: rgba(51, 51, 51, 1);
  opacity: 0.7;
}
</style>

