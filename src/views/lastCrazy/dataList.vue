<template>
    <div class="Wrap">
        <h3>{{type}}</h3>
         <ul class="datalist">
            <CrazyList  v-for="item in list" :key="item.id" :items="item"></CrazyList>
        </ul>
    </div>
</template>

<script>
import CrazyList from "@/components/CrazyList"
export default {
    props:['type','list'],
    components:{
        CrazyList
    }
}
</script>

<style lang="scss" scoped>
.Wrap{
    width: 100%;
    // background: red;
    h3{
        font-weight: normal;
        width: 88px;
        line-height: 50px;
        text-align: center;
        // background: green;
        margin: auto;
        position: relative;
        &::before{
            content: "";
            width: 50px;
            height: 1px;
            // background: #ff0;
            background: #979898;
            position: absolute;
            top: 50%;
            left: -50px;
        }
        &::after{
            content: "";
            width: 50px;
            height: 1px;
            // background: #00f;
            background: #979898;
            position: absolute;
            top: 50%;
            right: -50px;
        }
    }
    .datalist{
        width: 100%;
        height: 500px;
        // background: green;
    //     li{
    //         float: left;
    //         width: 95px;
    //         height: 152px;
    //         color: #333;
    //         font-size: 12px;
    //         background: #fff;
    //         box-sizing: border-box;
    //         padding-bottom: 7px;
    //         margin: 8px 0 0 8px;
    //         img:nth-child(1){
    //             width: 100%;
    //             height: 88px;
    //         }
    //         img:nth-child(2){
    //             display: block;
    //             width: 52px;
    //             margin: 6px auto;
    //         }
    //         .new{
    //             display: block;
    //             width: 83px;
    //             line-height: 15px;
    //             text-align: center;
    //             color: #17AF2B;
    //             background: rgba(95,200,109, 0.2);
    //             border-radius: 10px;
    //             font-size: 10px;
    //             margin: auto;
    //         }
    //     }
    }
}
</style>