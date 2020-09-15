<template>
    <div class="showwraper" ref="showwraper">
        <div class="show">
            <Banner></Banner>
            <div class="ad1">
                <img src="@/assets/imgs/ad1.jpg" alt="">
            </div>
            <ShopClassify></ShopClassify>
            <ShopAd></ShopAd>
            <TodaySale></TodaySale>
        </div>
    </div>
</template>

<script>
import { get } from "@/api/http"

import ShopClassify from './ShopClassify'
import Banner from './Banner'
import ShopAd from './ShopAd'
import TodaySale from './TodaySale'
import BScroll from "@better-scroll/core"
import Pullup from "@better-scroll/pull-up"
BScroll.use(Pullup)

export default {
    components : {
        ShopClassify,
        Banner,
        ShopAd,
        TodaySale
    },
    created() {
        this.$nextTick(()=>{
            // setTimeout(()=>{
                this.initSrcoll();
            // },400)
        })
    },
    methods: {
        async getMoreTodaySaleList(){
            let rs = await get("/api/todaySaleList")
            this.$store.state.todaySaleList.push(...rs.data);
            // console.log(this.todaySaleList);
            this.$nextTick(() => {
                this.bscroll.finishPullUp()
                this.bscroll.refresh()
            })
        },
        top(){
            this.bscroll.scrollTo(0, 0, 500)
        },
        initSrcoll(){
            this.bscroll = new BScroll(this.$refs.showwraper, {
                click : true,
                pullUpLoad: true,
                
                probeType: 3 // listening scroll hook
            })

            this.bscroll.on("pullingUp", () => {
                // console.log("up....")
                this.getMoreTodaySaleList()
            })

            this.bscroll.on('scroll', position => {
                if(position.y < -50){

                    this.$store.commit('setShowAd',false);
                    // this.$store.commit('setShowCart',true);
                    this.$store.commit('setShowBack',true);
                }else{
                    this.$store.commit('setShowAd',true);
                    // this.$store.commit('setShowCart',false);
                    this.$store.commit('setShowBack',false);
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .showwraper{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .ad1{
        height: 35px;
        img{
            height: 100%;
        }
    }
</style>