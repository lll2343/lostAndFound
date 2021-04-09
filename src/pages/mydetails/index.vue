<template>
  <div>
    详细资料列表
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {}
    }
  },
  methods: {
  },
  mounted(){
    const value = wx.getStorageSync('userinfo');
    if(value.nickName){
      this.userinfo = value;
      console.log("this.userinfo");
      console.log(this.userinfo);
    }
  }

}

</script>

<style scoped>


</style>
