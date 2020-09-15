<template>
  <div class="content1">
        <img :src="shops.show" alt="" class="show">
        <img :src="shops.icon" alt="" class="icon">
        <p><span>{{shops.nowPrice}}</span><span>{{shops.discount}}折</span></p>
        <p>{{shops.name}}</p>
  </div>
</template>

<script>
export default {
    props:['shops']
}
</script>

<style lang="scss" scoped>
    .content1{
        margin-top: 10px;
        background-color: white;
        margin-left: 5px;
        text-align: center;
        width: 180px;
        height: 240px;
        position: relative;
        .show{
            width: 178px;
            height: 178px;
        }
        .icon{
            position: absolute;
            right: 5px;
            top: 5px;
            width: 32px;
            height: 32px;
        }
        p:nth-of-type(1){
            text-align: left;
            font-size: 16px;
            span:nth-of-type(2){
                margin-left: 20px;
                color: #888888;
                font-size: 14px;
            }
        }
        p:nth-of-type(2){
            font-size: 14px;
            text-align: center;
            color: #585c64;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 160px;
        }
    }
</style>