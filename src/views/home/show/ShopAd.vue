<template>
    <div class="shopAd">
        <div class="bigSale" @click="toQuick()">
            <img src="https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/09/07/122/mst_b46773225ebeb072bc1e3f4c0b26eb78_750x485_90.png" alt="">
            <div class="imglist">
                <img src="https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/09/07/133/mst_65634af627d28df85ad5c74415034453_228x316_90.png" alt="">
                <img src="https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/09/07/32/mst_245cbe8092af6ffb5a748af66398fffa_228x316_90.png" alt="">
                <img src="https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/09/07/187/mst_672128938fef3b21272923f7c581d4bf_228x316_90.png" alt="">
            </div>
        </div>
        <div class="rushBuy" v-for="(item,key) in shopAdList" :key="key">
            <img :src="item.main_img" alt="">
            <p class="logo"><img :src="item.logo" alt=""></p>
            <p class="content">{{item.content}}</p>
            <div class="list">
                <ul class="imglist" v-for="(i,k) in item.list" :key="k">
                    <li class="first" @click="handleClick(i)"><img :src="i.img_1" alt=""></li>
                    <li class="second"><img :src="i.img_2" alt=""></li>
                    <li class="third">{{i.nm}}</li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>
import { get } from "@/api/http"

export default {
    data() {
        return {
            shopAdList : [],
        }
    },
    created() {
        this.getShopAdList();
    },
    methods: {
        async getShopAdList(){
            let rs = await get("/api/shopAdList")
            this.shopAdList = rs.data;
            // console.log(this.shopAdList[0].list);
        },
        handleClick(i){
            this.$router.push({path:'/detail',query:i})
        },
        toQuick(){
            this.$router.push("/sale")
        }
    },
}
</script>

<style lang="scss" scoped>
    .shopAd{
        width: 100%;
    }
    .bigSale{
        width: 100%;
        height: 242px;
        position: relative;

        img{
            width: 100%;
            height: 100%;
            margin: 0 auto;
        }
        .imglist{
            display: flex;
            height: 158px;
            position: absolute;
            left: 15px;
            bottom: 10px;
            img{
                width: 114px;
                height: 158px;
            }
        }
    }
    .rushBuy{
        width: 100%;
        height: 223px;
        position: relative;

        img{
            width: 100%;
            height: 100%;
            margin: 0 auto;
        }
        .logo{
            position: absolute;
            left: 94px;
            top: 26px;
            width: 53px;
            height: 14.5px;
            img{
                width: 53px;
                height: 14.5px;
            }
        }
        .content{
            position: absolute;
            right: 15px;
            top: 24px;
            font-size: 14px;
            color: #808080;
        }
        .list{
            position: absolute;
            width: 364px;
            height: 140px;
            left: 6px;
            bottom: 25px;
            display: flex;
            justify-content: space-evenly;
                .imglist{
                height: 130px;
                position: relative;
                .first{
                    width: 109px;
                    height: 100px;
                    img{
                        width: 109px;
                        height: 100px;
                    }
                }
                .second{
                    width: 109px;
                    height: 30px;
                    margin: 3px auto;
                    img{
                        width: 60px;
                        height: 30px;
                    }
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .third{
                    width: 109px;
                    height: 20px;
                    color: #EB247E;
                    font-size: 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
        
    }
</style>