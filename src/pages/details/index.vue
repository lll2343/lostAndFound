<template>
    <div>
        <div class="pic">
            <swiper indicator-dots="true">
                <div v-for="(pic,index) in item.get_pics" :key="index">
                    <swiper-item>
                        <img :src="pic" alt="">
                    </swiper-item>
                </div>
            </swiper>
        </div>

        <div class="content">
            <p class="user_name">
                {{item.user_name}}
                <i class="create_time">
                    {{item.create_time}}
                </i>
            </p>
            <div class="item_name"> 
                <h1>名称:</h1>
                {{item.item_name}}
            </div>
            <div>
                <h1>时间:</h1>
                {{item.get_date}}
            </div>
            <div>
                <h1>地点:</h1>
                {{item.get_position}}
            </div>
            <div>
                <h1>描述:</h1>
                {{item.more_detail}}
            </div>
            <div>
                <h1>联系方式:</h1>
                {{item.tel}}
            </div>
        </div>
    </div>
</template>

<script>
import {get,showModel} from "./../../utils/util"
import {formatTime} from "./../../utils/index"

export default{
    data(){
        return {
            id: 0,
            item: {
                create_time: "",
                user_name: "",
                item_name: "",
                get_pics: [],
                get_date: "",
                get_position: "",
                more_detail: "",
                tel: "",
            }
        }
    },
    methods: {
        // 获取传输端口
        async getDetailById(){
            console.log("getDetailById")
            try{
                console.log(this.id)

                const res = await get('/weapp/getdetailbyid',{id:this.id})
                console.log(res)
                const tmp =res.item
                this.getData(tmp)
                console.log(this.item)
            }catch(e){
                showModel("请求失败","请下拉页面重试一下下~")
                console.log("后端返回的数据",e)
            }
        },
        getData(tmp){
            this.item.create_time = formatTime(new Date(tmp[0].create_time))
            this.item.user_name = tmp[0].user_name
            this.item.item_name = tmp[0].item_name
            this.item.get_pics = tmp[0].get_pics.split(',')
            this.item.get_date = tmp[0].get_date
            this.item.get_position = tmp[0].get_position
            this.item.more_detail = tmp[0].more_detail
            this.item.tel = tmp[0].tel
        },
    },
    mounted() {
        this.id = this.$mp.query.id
        this.getDetailById()
    }
}

</script>

<style scoped>
.pic {
    width: 100%;
    height: 400rpx;
    margin: 50rpx 0;
}

.pic swiper {
    width: 100%;
    height: 100%;
}

img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.content {
    border: 1px solid #ccc;
    box-shadow: 5px 5px 5px #ddd;
    border-radius: 10px;
    padding:20rpx 50rpx;
}

.user_name{
    font-size: 32px;
    font-weight: 900;
    padding-bottom: 10rpx;
    border-bottom: 1px solid #eee;
}

.create_time {
    display: inline;
    font-size: 14px;
    color: #888;
    font-weight: 400;
    padding-left: 100rpx;
}

h1 {
    display: inline;
    font-size: 20px;
    font-weight: 500;
    padding-right: 40rpx;
    height: 80rpx;
    line-height: 80rpx;
}

</style>