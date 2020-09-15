<template>
    <div class="downLoad">
        <HeaderBar></HeaderBar>
        <div class="content">
            <img src="@/assets/imgs/downLoad.png" alt="">
            <ul class="btn">
                <li @click="iosLoad()">
                    <i class="iconfont icon-ios"></i>
                    <div class="text">
                        <p class="top-text">FOR IOS</p>
                        <p class="sub-text">立即下载</p>
                    </div>
                </li>
                <li @click="androidLoad()">
                    <i class="iconfont icon-android"></i>
                    <div class="text">
                        <p class="top-text">FOR ANDROID</p>
                        <p class="sub-text">立即下载</p>
                    </div>
                </li>
                <li @click="ipadLoad()">
                    <i class="iconfont icon-android"></i>
                    <div class="text">
                        <p class="top-text">FOR ANDROID PAD</p>
                        <p class="sub-text">立即下载</p>
                    </div>
                </li>
                <li @click="windowLoad()">
                    <i class="iconfont icon-windows"></i>
                    <div class="text">
                        <p class="top-text">FOR WINDOWS</p>
                        <p class="sub-text">立即下载</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
    components : {
        HeaderBar
    },
    methods: {
        iosLoad(){
            location.href = "https://itunes.apple.com/cn/app/vipshop/id417200582?mt=8&version=5.30";
        },
        androidLoad(){
            location.href = "https://dmp-data.vip.com/channel/downloadapp?c=sztq5f2g";
        },
        ipadLoad(){
            location.href = "//app.vip.com/update/shop_androidpad/m/shop_androidpad_m_3.0.2.apk";
        },
        windowLoad(){
            location.href = "https://www.microsoft.com/store/apps/9nblggh1zcdq";
        }
    },
}
</script>

<style lang="scss" scoped>
    .downLoad{
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .content{
            flex: 1;
            background: #F3F4F5;
            img{
                width: 330px;
                height: 242px;
                margin-left: 22.5px;
                margin-bottom: 20px;
            }
        }
        .btn{
            margin-left: 80px;
            li{
                width: 221px;
                height: 44px;
                border: 1px solid grey;
                margin-bottom: 20px;
                i{
                    float: left;
                    font-size: 25px;
                    margin: 10px;
                    margin-left: 50px;
                }
                .icon-android{
                    color: #272636;
                }
                .text{
                    margin-top: 5px;
                    float: left;
                    p:nth-of-type(1){
                        color: #98989f;
                        font-size: 14px;
                    }
                    p:nth-of-type(2){
                        color: #585c64;
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>