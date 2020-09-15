<template>
    <div class="banner" @click="toQuick()">
        <van-swipe :autoplay="3000" class="banner-list">
            <van-swipe-item v-for="(image, index) in images" :key="index" class="img">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>

export default {
    data() {
        return {
            images: [
                'https://h2a.appsimg.com/a.appsimg.com/upload/flow/2020/09/01/93/15989518831983.jpg!85.webp',
                'https://h2a.appsimg.com/a.appsimg.com/upload/flow/2020/09/07/195/15994596154502.jpg!85.webp',
                'https://h2a.appsimg.com/a.appsimg.com/upload/flow/2020/09/01/179/15989410697058.jpg!85.webp'
            ],
        };
    },
    methods:{
        toQuick(){
            this.$router.push("/quick/2536")
        }
    }

}
</script>
<style lang="scss">
    .banner{
        width: 100%;
        height: 150px;
        .banner-list{
            width: 100%;
            height: 100%;
            .img{
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
        img{
            width: 375px;
            height: 150px;
        }
    }
</style>