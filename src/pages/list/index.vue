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
              <img src="./../../../static/images/user.png" alt="" class="left">
              <div class="right">
                <h1>失物名称 : {{item.item_name}}</h1>
                <h2>拾到地点 : {{item.get_position}}</h2>
                <h3>拾到时间 : {{item.get_date}}</h3>
              </div>
            </li>
          </ul>
        </div>

        <div v-else class="detailItem">
          <ul>
            <li v-for="item in items" :key=item.id>
              <img src="./../../../static/images/user.png" alt="" class="left">
              <div class="right">
                <h1>失物名称 : {{item.item_name}}</h1>
                <h2>丢失地点 : {{item.get_position}}</h2>
                <h3>丢失时间 : {{item.get_date}}</h3>
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
        console.log(res.itemlist)
      }catch(e){
        showModel("请求失败","请下拉页面重试一下下~")
        console.log("后端返回的数据",e)
      }
    }
  },
  watch: {
    
  },
  mounted(){
    this.getItemList()
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
  height: 170rpx;
  border:1rpx solid #ccc;
  border-radius: 10rpx;
  margin-top:20rpx;
  box-shadow: 5rpx 5rpx 5rpx #ddd;
}

.left {
  float: left;
  width:170rpx;
  height: 170rpx;
  border-right: 1rpx solid #ccc;
}

.right {
  /* 使用ccs3盒子模型 */
  box-sizing: border-box;
  float: right;
  width: 520rpx;
  height: 140rpx;
  /* border-left: 1rpx solid #ccc; */
  margin: 20rpx;
}

.right h2 {
  font-weight: 20;
}

.right h3 {
  font-weight: 20;
  color: #888;
}

</style>
