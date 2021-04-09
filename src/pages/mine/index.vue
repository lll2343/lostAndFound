<template>
  <div>
      <div class="header">
        <div class="left">
          <img :src="headpicpath" alt="">
        </div>

        <div v-if="isShow" class="right">
          <p>{{name}}</p>
          <h1>{{city}}</h1>
        </div>
        <div v-else class="right">
          <!-- <button open-type="getUserInfo" lang="zh_CN" class="login" @getuserinfo="loginIn">点击登录</button> -->
          <button class="login" @click="getUserProfile">点击登录</button>
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
import config from "./../../utils/config"
import qcloud from "wafer2-client-sdk"

export default {
  data () {
    return {
      headpicpath: require("./../../../static/images/user-big.png"),
      name: "吉昱阳",
      city: "",
      isShow: false
    }
  },

  methods: {
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    loginIn(){
      console.log("点击登录");

      qcloud.setLoginUrl(config.loginUrl);
      qcloud.login({
        success: (userInfo) => {
          console.log('登录成功', userInfo);
          this.loginSuccess(userInfo);
          
          // 显示信息 昵称和城市
          this.isShow = !this.isShow;
          this.name = userInfo.nickName;
          this.city = userInfo.city;

        },
        fail: (err) => {
          console.log(12122);
          console.log('登录失败', err);
        }
      });
    },
    getUserProfile(){
      wx.getUserProfile({
        desc:"登录小程序",
        success:(res)=>{
          console.log("成功",res);

          // 显示信息 昵称和城市
          this.isShow = !this.isShow;
          this.name = res.userInfo.nickName;
          this.city = res.userInfo.city;
          this.headpicpath = res.userInfo.avatarUrl;

          // 保存到缓存
          this.loginSuccess(res.userInfo);
        },
        fail: (err)=>{
          console.log("err",err);
        }
      })
    },
    loginSuccess(userInfo){
      // 将用户信息保存到缓存中
      wx.setStorageSync("userinfo",userInfo);  
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

.login{
  display: block;
  width: 250rpx;
  margin-top: 100rpx;
  margin-left: 0;
}

</style>
