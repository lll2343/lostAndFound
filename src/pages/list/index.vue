<template>
  <div>
      <!-- 导航栏 -->
      <div class="testNav">
        <div
          :class="{'selected':tab === 1,'testTitle':true}"
          @click="changTab(1)"
        >失物招领</div>

        <div
          :class="{'selected':tab === 0,'testTitle':true}"
          @click="changTab(0)"
        >寻物启事</div>
      </div>

      <!-- 占位 -->
      <div class="listItem">
        <div v-if="tab===1" class="detailItem">
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

        <div v-else class="detailItem">
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

      <!-- <button @click="getItemList">点击</button> -->

  </div>
</template>

<script>
import {get,showModel} from "./../../utils/util"
import {formatTime} from "./../../utils/index"

export default {
  data () {
    return {
      tab: 1,
      items: [],
      lost_or_found: 1
    }
  },
  methods: {
    changTab(index) {
      this.tab = index
      this.lost_or_found = index

      this.getItemList()
    },
  
    async getItemList(){
      try{
        const res = await get('/weapp/getitemlist',{lost_or_found:this.lost_or_found})
        
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
  mounted(){
    this.getItemList()
  },
  onPullDownRefresh(){
    console.log("下拉刷新")
    this.getItemList()
    wx.stopPullDownRefresh()  
  }
}
</script>

<style scoped>
.testNav {
    padding: 0 20rpx;
    height: 80rpx;
    line-height: 80rpx;
    display: flex;
}

.testTitle {
    flex: 1;    
    text-align: center;
}

.selected {
  color: #52a7ff;
  border-bottom: 1px solid #52a7ff;
}

.listItem {
  margin-top: 10rpx;
}

.detailItem ul li{
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
