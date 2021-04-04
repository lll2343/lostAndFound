<template>
    <div class="index_section">
        <picker 
            mode="date" 
            :value="date" 
            start="2015-09-01" 
            @change="dateChange"> 
            <view class="picker">
                {{date}}
            </view>
        </picker>
    </div>
</template>

<script>

export default {
    name: "selectdate",
    data () {
        return {
            date: ""
        }
    },
    mounted(){
        let d = new Date();
        this.date = d.getFullYear()+"-"+
                    (d.getMonth()+1 < 10 ? "0"+(d.getMonth()+1): (d.getMonth()+1))
                    +"-"+
                    (d.getDate()<10 ? "0"+d.getDate() : d.getDate());
    },
    methods: {
        dateChange: function (e) {
            this.date = e.mp.detail.value;
            console.log('picker发送选择改变，携带值为',  e.mp.detail.value)
            //注意：不是官网的e.detail.value,而是 e.mp.detail.value
            this.$emit("getDate",e.mp.detail.value)
        },
    }
}

</script>
