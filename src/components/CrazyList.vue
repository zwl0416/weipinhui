<template>
  <div>
    <li @click="toVariety()">
        <img :src="items.ct" alt=""> 
        <img :src="items.lg" alt="">
        <span>
            <b class="new" v-if="items.ck">{{items.ft}}</b>
            <b class="new" v-if="!items.ck">{{items.ft}}</b>
        </span>
    </li>
  </div>
</template>
<script>
export default {
    props:['items'],
    methods: {
        toVariety(){
            this.$router.push({path:"/varietyList"})
        }
    },
}
</script>

<style lang="scss" scoped>
li{
    float: left;
    width: 95px;
    height: 152px;
    color: #333;
    font-size: 12px;
    background: #fff;
    box-sizing: border-box;
    padding-bottom: 7px;
    margin: 8px 0 0 8px;
    img:nth-child(1){
        width: 100%;
        height: 88px;
    }
    img:nth-child(2){
        display: block;
        width: 52px;
        margin: 6px auto;
    }
    .new{
        display: block;
        width: 83px;
        line-height: 15px;
        text-align: center;
        color: #17AF2B;
        background: rgba(95,200,109, 0.2);
        border-radius: 10px;
        font-size: 10px;
        margin: auto;
    }
}
</style>