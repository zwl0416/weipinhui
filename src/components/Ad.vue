<template>
    <div class="ad" v-show="$store.state.showAd" @click="toDownLoad()">
        <img src="../assets/imgs/ad.png" alt="">
        <div class="content">
            <p>品牌特卖 3折封顶</p>
            <p>早10晚8准点上新，7天放心退</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toDownLoad(){
            this.$router.push('/downLoad');
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .ad{
        width: 375px;
        height: 65px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .content{
            position: absolute;
            left: 0;
            top: 0;
            margin-left: 95px;
            margin-top: 14px;
            font-weight: 100;
            p:nth-of-type(1){
                font-size: 16px;
                color: white;
            }
            p:nth-of-type(2){
                font-size: 12px;
                color: white;
            }
        }


    }

</style>