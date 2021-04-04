<template>
  <div>
      <div class="header">
        <div class="left">
          <img :src="headpicpath" alt="">
        </div>

        <div v-if="isShow" class="right">
          <p>{{name}}</p>
          <h1>{{birth}}</h1>
        </div>
        <div v-else class="right">
          <a href="#" @click="loginIn">登录</a>
        </div>

      </div>

      <div class="nav">
        <ul>
          <li>
            <a href="./../mydetails/main">详细资料</a>
          </li>
          <li>
            <a href="./../mypost/main">我的招领</a>
          </li>
          <li>
            <a href="./../about/main">关于</a>
          </li>
        </ul>
      </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      headpicpath: require("./../../../static/images/user-big.png"),
      name: "吉昱阳",
      birth: "2000-11-14",
      isShow: false
    }
  },

  methods: {
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    loginIn(){
      console.log("点击登录")
      // wx.login({
      //   success: function(res) {
      //     if(res.code) {
      //       wx.getUserInfo({
      //         success:function(res){
      //           console.log(res);

      //         }
      //       })
      //     }
      //     else{
      //       console.log("获取用户登录状态失败");
      //     }
      //   }
      // })
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 150px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #ddd;
}

.header .left{
  width: 40%;
  height: 100%;
}

.header .right {
  width: 60%;
  height: 100%;
}

.header img {
  display: block;
  width: 80px;
  height: 80px;
  margin-top: 35px;
  margin-left: 35px;
  border-radius: 40px;
}

.header .right p {
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 20px;
}

.header .right a {
  margin-top: 56px;
  text-decoration: underline;
  color: rgb(79, 166, 255);
  font-size: 20px;
}

.nav ul li:nth-child(1){
  margin-top: 40px;
}

.nav ul li{
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  line-height: 40px;
}

.nav ul li a {
  padding-left: 20px;
}

</style>
