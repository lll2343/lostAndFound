<template>
  <div>
    <div v-if="isShow" class="detail">
      <img :src="userinfo.avatarUrl" alt="">
      <h1>{{userinfo.nickName}}</h1>
      <h2>{{userinfo.gender}}</h2>
      <h3>{{userinfo.country+" "+userinfo.province+" "+userinfo.city}}</h3>
    </div>

    <div v-else class="unlogin">
      亲~需要先登录~
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {},
      isShow: false
    }
  },
  methods: {
  },
  mounted(){
    const value = wx.getStorageSync('userinfo');
    if(value.nickName){
      this.isShow = true
      this.userinfo = value
      if(this.userinfo.gender == 1){
        this.userinfo.gender = "男"
      }
      else{
        this.userinfo.gender = "女"
      }
      console.log("this.userinfo")
      console.log(this.userinfo)
    }
  }

}

</script>

<style scoped>
.detail {
  text-align: center;
}

h1,h2,h3 {
  margin-top: 20px;
}

h1 {
  font-size: 25px;
}

h2 {
  font-size: 18px;
}

img {
  display: block;
  width:200rpx;
  height: 200rpx;
  margin:0 auto;
  margin-top:200rpx;
}

.unlogin {
  display: block;
  width: 100%;
  margin-top:300rpx;
  text-align: center;
} 

</style>
