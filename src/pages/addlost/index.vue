<template>
  <div>
      <div class="header">填写失物信息</div>
      <form action="#">
          <ul>
              <!-- 失物名称 -->
              <li>
                <label for="lostName" >失物名称</label>
                <input type="text" id="lostName" v-model="itemDetail.Name" placeholder="捡到的物品名称">
              </li>

              <!-- 照片 -->
              <li>
                照片
                <zs-upimg width="160rpx" height="160rpx" :srcs="itemDetail.Pics" @choosed="choosed" @delete="remove"></zs-upimg>
              </li>

              <!-- 拾到的日期 -->
              <li>
                <span>丢失日期</span>
                <div class="index_section">
                  <picker 
                    mode="date" 
                    :value="itemDetail.Date" 
                    @change="getDate"
                    start="2015-09-01" > 
                    <view class="picker">
                    {{itemDetail.Date}}
                    </view>
                  </picker>
                </div>
              </li>

              <!-- 拾到的地点 -->
              <li>
                <label for="lostPosition" >丢失地点</label>
                <input type="text" id="lostPosition" v-model="itemDetail.Position" placeholder="您拾到物品的位置">
              </li>

              <!-- 更多的描述 -->
              <li>
                <label for="more">更多信息</label>
                <input type="text" id="more" v-model="itemDetail.More" placeholder="更多描述">
              </li>

              <!-- 联系方式 -->
              <li>
                <label for="Tel">联系方式</label>
                <input type="text" id="Tel" placeholder="请输入您的联系方式" v-model="itemDetail.Tel">
              </li>
          </ul>
      </form>
      <button @click="submit">发布</button>
  </div>
</template>

<script>

import zsUpimg from "./../../components/upimg"
import selectDate from "./../../components/selectDate"
import {showSuccess,post,showModel} from "./../../utils/util"

export default {
  data () {
    return {
      itemDetail: {
        Name: "",
        Pics: [],
        Date: "",
        Position: "",
        More: "",
        Tel: ""
      },
      max: 3
    }
  },
  mounted(){
    let d = new Date();
      this.itemDetail.Date = d.getFullYear()+"-"+
        (d.getMonth()+1 < 10 ? "0"+(d.getMonth()+1): (d.getMonth()+1))
        +"-"+
        (d.getDate()<10 ? "0"+d.getDate() : d.getDate());
  },
  components: {
    zsUpimg,
    selectDate 
  },
  methods: {
    getDate(e){
      this.itemDetail.Date = e.mp.detail.value;
    },

    // 当照片被选中，添加到this.itemDetail.Pics中
    choosed(val) {
      console.log("choosed")
      console.log(val);
      this.itemDetail.Pics=[].concat(val);
      console.log("pics");
      console.log(this.itemDetail.Pics);
    },
    remove(val) {
      console.log("remove")
      console.log(val);
      this.itemDetail.Pics=[].concat(val);
      console.log("pics");
      console.log(this.itemDetail.Pics);
    },
    submit() {
      // 判断是否为空
      for(const key in this.itemDetail){
        if(key !== "Pics"){
          if(this.itemDetail[key] == null || this.itemDetail[key]== ""){
            console.log("不能为空");
            console.log(key);
            showModel("发布失败","请完整填写失物信息");
            return;
          }
        }
      }

      this.postItem();

    },
    // 发送异步请求
    async postItem(){
      const data = {
        lost_or_found: 0, // 用0 1 标识
        user_name: wx.getStorageSync('userinfo').nickName,
        item_name: this.itemDetail.Name,
        get_pics: this.itemDetail.Pics.join(","),// 转成字符串
        get_date: this.itemDetail.Date,
        get_position: this.itemDetail.Position,
        more_detail: this.itemDetail.More,
        tel: this.itemDetail.Tel
      }
      try{
        const res = await post("/weapp/createitem",data)
        showSuccess("发布成功")
        console.log("后端发来的信息")
        console.log(res)
      }catch(e){
        console.log("从后端发来的失败信息",e)
        showModel("发布失败","服务器出了一点问题，请稍后再试")
      }
    }
  },
  watch: {
    
  }
}
</script>

<style scoped>

.header {
  font-size: 25px;
  text-align: center;
  margin: 15px auto;
}

ul li {
    display: flex;
    height: 40px;
    border: 1px solid #ccc;
    border-left: transparent;
    border-right: transparent;
    margin-bottom: 20px;
    line-height: 40px;
    padding-left: 15px;
}

ul li:nth-child(2){
  height: 202rpx;
}

ul li input{
    height: 40px;
    padding-left: 20px;
    line-height: 40px;
}

span {
  padding-right: 20px;
}

</style>
