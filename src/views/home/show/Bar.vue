<template>
    <transition name="fade">
        <div class="bar">
            <div class="header">
                <span>精选推荐</span>
                <i class="iconfont icon-shangjiantou" @click="up()"></i>
            </div>
            <ul class="list"> 
                <li @click="toHome()" v-for="(item,key) in bar.bar1" :key="key">
                    <img :src="item.img" alt="">
                    <p>{{item.name}}</p>
                </li>
                <li></li>
                <li></li>
            </ul>
            <div class="choice">
                <p>更多选择</p>
                <ul>
                    <li v-for="(item,key) in bar.bar2" :key="key" @click="toList()">{{item}}</li>
                </ul>
            </div>
        </div>
    </transition>
    
</template>

<script>
import { get } from "@/api/http"
export default {
    data() {
        return {
            bar : {}
        }
    },
    async created() {
        let rs = await get("api/barList");
        this.bar = rs.data;
    },
    methods: {
        up(){
            this.$store.commit('setShowBar',!this.$store.state.showBar)
        },
        toHome(){
            this.$store.commit('setShowBar',!this.$store.state.showBar)
        },
        toList(){
            this.$router.push("/varietyList")
        }
    },
}
</script>

<style lang="scss" scoped>
    .bar{
        color: #585C64;
        overflow: hidden;
        // background: white;
    }
    .header{
        width: 100%;
        height: 34px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
        background: white;

        span{
            color: #585C64;
        }
        i{
            font-size: 25px;
        }
    }
    .list{
        width: 100%;
        overflow: hidden;
        li{
            width: 93.75px;
            height: 72px;
            box-sizing: border-box;
            border-right: 1px solid lightgrey;
            border-top: 1px solid lightgrey;
            float: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                width: 20px;
                height: 20px;
                margin-bottom: 5px;
            }
            p{
                font-size: 12px;
            }
        }
        li:nth-of-type(4){
            border-right: none;
        }
        li:nth-of-type(8){
            border-right: none;
        }

    }
    .choice{
        border-top: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
        p{
            line-height: 34px;
            text-indent: 15px;
        }
        ul{
            width: 100%;
            box-shadow: border-box;
            padding-left: 17px;
            li{
                width: 78px;
                text-align: center;
                line-height: 38px;
                background: #F3F4F5;
                color: #585C64;
                display: inline-block;
                border-radius: 3px;
                margin-right: 10px;
                margin-bottom: 10px;
            }
        }
    }

    .bar{
        width: 100%;
        height: 623px;
        background: white;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter, .fade-leave-to{
        height: 0;
    }
</style>