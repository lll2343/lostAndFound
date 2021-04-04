<template>
  <div class="main">
      <img src = 'https://ftp.bmp.ovh/imgs/2021/04/1673bdee3c15441a.jpg' />
      <p>version: 1.0.1</p>

      <div class="footer">
        <h1>
          联系我们
        </h1>
        <ul>
          <li>{{email}}</li>
          <li>{{git}}</li>
        </ul>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      email: "2281250383@qq.com",
      git: "xxxxxx"
    }
  },
  methods: {
    
  },
  watch: {
    
  }
}
</script>

<style scoped>

.main {
  text-align: center;
}

img {
  display: block;
  width:200rpx;
  height: 200rpx;
  margin:0 auto;
  margin-top:250rpx;
  margin-bottom: 100rpx;
  border-radius: 10rpx;
}

.footer h1 {
  margin-top:200rpx;
  margin-bottom: 100rpx;
}

.footer ul li {
  padding: 10rpx 0;
}


</style>
