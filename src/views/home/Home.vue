<template>
    <div class="home-wrapper">
        <div class="home">
            <div class="cart" v-show="$store.state.showCart" @click="toCart()">
                <span class="iconfont icon-icon4"></span>
            </div>
            <div class="back" v-show="$store.state.showBack" @click="toTop()">
                <span class="iconfont icon-arrow-top"></span>
            </div>
            <div class="top" >
                <Ad></Ad>
                <div class="search">
                    <div class="login" @click="toCity()">{{$store.state.showCity}}</div>
                    <div class="ipt"><input type="text" placeholder="大家正在搜索：护肤套装"></div>
                    <div class="menu"><i class="iconfont icon-classify" @click="toList()"></i></div>
                </div>
                <div class="nav">
                    <i class="iconfont icon-xiajiantou" @click="showBar()"></i>
                    <Bar class="bar" v-show="$store.state.showBar"></Bar>
                    <ul>
                        <li :class="{'active': 1 == type}" @click="toTodayShow();change(1)">今日推荐</li>
                        <li :class="{'active': 2 == type}" @click="toLastCarzy();change(2)">最后疯抢</li>
                        <li :class="{'active': 3 == type}" @click="toQuickBuy();change(3)">唯品快抢</li>
                        <li :class="{'active': 4 == type}" @click="toBrandClear();change(4)">品牌清仓</li>
                        <li :class="{'active': 5 == type}" @click="toAoLai();change(5)">唯品奥莱</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <Show class="show" ref="show"></Show>
        </div>
    </div>
    
</template>

<script>
import Ad from "@/components/Ad"
import Show from "./show/Show"
import Bar from "./show/Bar"
import BScroll from "@better-scroll/core"


export default {
    components : {
        Ad,
        Show,
        Bar
    },
    data() {
        return {
            type : 1,
        }
    },
    created() {
        this.$nextTick(()=>{
            // this.initSrcoll()
        })
    },
    methods: {
        change(type){
            this.type = parseInt(type);
        },
        toTop(){
            this.$refs.show.top();
        },
        toDownLoad(){
            // this.$router.push('/downLoad');
            console.log(123)
        },
        toList(){
            this.$router.push('/list');
        },
        showBar(){
            this.$store.commit('setShowBar',!this.$store.state.showBar);
        },
        toCity(){
            this.$router.push('/city');
        },
        toCart(){
            this.$router.push('/cart');
        },

        //多页面跳转
        toLastCarzy(){
            location.href = '/lastCrazy.html'
        },
        toTodayShow(){
            
        },
        toQuickBuy(){
            location.href = '/quick.html'
        },
        toBrandClear(){
            location.href = '/sale.html'
        },
        toAoLai(){
            location.href = '/aoyi.html'
        },

        initSrcoll(){
            this.bscroll = new BScroll(this.$refs.ulWrapper, {
                click : true,
                scrollX : true,                
                probeType: 3 // listening scroll hook
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    .home-wrapper{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .home{
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        .cart{
            width: 45px;
            height: 45px;
            background: rgba(0,0,0,0.8);
            position: fixed;
            z-index: 101;
            left: 10px;
            top: 600px;
            z-index: 100;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            span{
                font-size: 25px;
            } 
        }
        .back{
            width: 45px;
            height: 45px;
            background: rgba(0,0,0,0.8);
            position: fixed;
            z-index: 101;
            right: 10px;
            top: 600px;
            z-index: 100;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            span{
                font-size: 25px;    
            }

        }
        .top{
            position: sticky;
            top: 0;
            z-index: 99;
            .search{
                width: 100%;
                height: 44px;
                background: #F9F9FA;
                display: flex;
                .login{
                    width: 44px;
                    height: 44px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    color: #585c64;
                }
                .ipt{
                    width: 287px;
                    height: 44px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    input{
                        border: none;
                        width: 276px;
                        height: 24px;
                        border-radius: 15px;
                        background: #F3F4F5;
                        border: 1px solid rgb(184, 183, 183);
                        font-size: 14px;
                    }
                }
                .menu{
                    width: 44px;
                    height: 44px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .icon-menu{
                        margin-right: 10px;
                    }
                }
            }
            .nav{
                height: 34px;
                background: white;
                position: relative;
                i{
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: white;
                    width: 34px;
                    line-height: 34px;
                    text-align: center;
                    font-size: 25px;
                }
                .bar{
                    position: absolute;
                    left: 0;
                    top: 0px;
                    z-index: 200;
                }
                ul{
                    overflow-x: auto;
                    white-space: nowrap;
                    li{
                        width: 82px;
                        text-align: center;
                        line-height: 34px;
                        font-size: 14px;
                        color: #666666;
                        display: inline-block;
                    }
                    .active{
                        color: rgb(211, 75, 168);
                        position: relative;
                        &::after{
                            content: "";
                            width: 70px;
                            height: 2px;
                            background: rgb(211, 75, 168);
                            position: absolute;
                            left: 3px;
                            bottom: 2px;     
                        }
                    }
                }  
            }

        }  
        .show{
            flex: 1;
        }
    }
    

</style>