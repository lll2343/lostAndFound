<template>
  <div @click="clickHandle">
      <div class="con_1 post">
        <a href="./../addfound/main">
          <img src="./../../../static/images/post.png" alt="">
          <p>捡到物品，我要发布</p>
        </a>
      </div>
      
      <div class="con_1">
        <a href="./../addlost/main">
          <img src="./../../../static/images/found.png" alt="">
          <p>丢失物品，我要寻找</p>
        </a>
      </div>
      
      <div class="con_1">
        <a href="./../list/main">
          <img src="./../../../static/images/list.png" alt="">
          失物列表
        </a>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },

  methods: {
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  }
}
</script>

<style scoped>
.con_1 {
   width: 100%;
   height: 120px;
   border:1px solid #ccc;
   border-radius: 10px;
   margin-top:5px;
   box-shadow: 5px 5px 5px #ddd;
}

a{
  display: block;
  box-sizing: border-box;
  width:100%;
  height: 100%;
  text-align: center;
}

img {
  display: block;
  box-sizing: border-box;
  width:48px;
  height: 78px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 10px;
}

</style>
