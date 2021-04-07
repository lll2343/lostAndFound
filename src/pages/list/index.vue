<template>
  <div>
      <!-- 导航栏 -->
      <div class="testNav">
        <div
          :class="{'selected':tab === 1,'testTitle':true}"
          @click="changTab(1)"
        >失物招领</div>

        <div
          :class="{'selected':tab === 2,'testTitle':true}"
          @click="changTab(2)"
        >寻物启事</div>
      </div>

      <!-- 占位 -->
      <div class="listItem">
        <div v-if="tab===1" class="detailItem">
          <ul>
            <li v-for="i in 5" :key=i>
              <img src="./../../../static/images/user.png" alt="" class="left">
              <div class="right">
                <h1>失物名称 : xxx</h1>
                <h2>拾到地点 : xxx</h2>
                <h3>拾到时间 : xxxx-xx-xx</h3>
              </div>
            </li>
          </ul>
          <button @click="getData">获取</button>
          <button @click="postData">post</button>
        </div>

        <div v-else class="detailItem">
          <ul>
            <li v-for="i in 3" :key=i>
              <img src="./../../../static/images/user.png" alt="" class="left">
              <div class="right">
                <h1>失物名称 : xxx</h1>
                <h2>丢失地点 : xxx</h2>
                <h3>丢失时间 : xxxx-xx-xx</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      tab: 1,
      items: []
    }
  },
  methods: {
    changTab(index) {
      this.tab = index;
    },
    
    // 获取传输端口
    getData(){
      this.$req.HttpCall("https://autumnfish.cn/api/joke/list")
                .then((res)=>{
                  console.log(res.data);
                },
                (err)=>{
                  console.log("failed");
                  console.log(err);
                })
    },
    postData(){
      this.$req.HttpPost('1212',{
        id:1,
        name:"zc"
      }).then((res)=>{
        console.log(res);
      },
      (err)=>{
        console.log("failed post");
        console.log(err);
      })
    }
  },
  watch: {
    
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
