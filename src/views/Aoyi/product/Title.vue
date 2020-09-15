<template>
    <div class="box" :style="'background'+':'+ 'url('+head.show+')'+';background-size:100% 100%'">
        <div><img :src="head.brand | wh('50x50')" alt=""></div>
        <div>
            <p>{{head.name1}}</p>
            <p>{{head.name}}</p>
        </div>
        <div>
            <van-icon name="like" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <van-icon name="share" />
        </div>
    </div>
</template>

<script>
export default {
    props:['head'],
    components:{

    }
}
</script>

<style lang="scss" scoped>
    .box{
        height: 140px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        div:nth-of-type(1){
            border: 1px solid white;
            width: 50px;
            height: 50px;
            background: white;
            text-align: center;
            img{
                margin-top: 15px;
                width: 80%;
                height: 40%;
            }
        }
        div:nth-of-type(2){
            width: 223px;
            height: 50px;
            p{
                height: 25px;
                line-height: 25px;
                color: #74d63b;
            }
            p:nth-of-type(1){
                font-size: 14px;
            }
            P:nth-of-type(2){
                font-size: 12px;
            }
        }
        div:nth-of-type(3){
            width: 60px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 25px;
            color: hotpink;
        }
    }
</style>