<template>
  <div>
      <!-- 我发布的失物招领和寻物启事 -->
      <div v-if="!isPost" class="un-post">
          亲，还没有登录
      </div>

      <div v-else>
        <ul>
            <li v-for="item in items" :key=item.id>
              <div class="item_details">
                <div class="pic">
                  <img :src="item.get_pics[0]" alt="">
                </div>
                <div class="content">
                  <h1>
                    {{item.item_name}}
                    <span>{{item.create_time}}</span>
                  </h1>
                  <h3>{{item.more_detail}}</h3>
                </div>
              </div>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
import {get,showModel} from "./../../utils/util"
import {formatTime} from "./../../utils/index"

export default {
  data () {
    return {
      user_name: "",
      items: [],
      isPost: false
    }
  },
  methods: {
    async getItemList(){
      try{
        console.log("正在获取....")
        const res = await get('/weapp/getmypost',{user_name: this.user_name})
        
        this.items = res.itemlist
        this.dataChange()
        console.log(this.items)
      }catch(e){
        showModel("请求失败","请下拉页面重试一下下~")
        console.log("后端返回的数据",e)
      }
    },
    dataChange(){
      for(var key in this.items){
        this.items[key].create_time = formatTime(new Date(this.items[key].create_time))
        this.items[key].get_pics = this.items[key].get_pics.split(',')
      }
    }
  },
  watch: {
    
  },
  mounted(){
    this.user_name = wx.getStorageSync('userinfo').nickName
    if(this.user_name){
      console.log(this.user_name)
      this.isPost = true
      this.getItemList()
    }
  }
}
</script>

<style scoped>
.un-post {
  display: block;
  width: 100%;
  margin-top:300rpx;
  text-align: center;
}

ul li{
  display: block;
  width: 100%;
}

.item_details {
  display: flex;
  width: 100%;
  height: 270rpx;
  border:1px solid #ccc;
  border-radius: 10px;
  margin-top:20rpx;
  box-shadow: 5px 5px 5px #ddd;
}

.item_details .pic {
  display: block;
  width:38%;
  height: 100%;
  border-right: 1px solid #ddd;
}

.item_details .pic img{
  width:100%;
  height: 100%;
}

.item_details .content{
  display: block;
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  padding-left: 40rpx;
  padding-top: 60rpx
}

.item_details .content h1{
  font-size: 20px;
}

.item_details .content h1 span {
  font-size: 14px;
  padding-left: 30rpx;
}

.item_details .content h3 {
  margin-top: 40rpx;
}
</style>
