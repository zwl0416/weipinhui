<template>
    <div class="varietyWrap">
        <div class="search-bg">
            <span class="search">
                牛仔裤女
                <van-icon name="search" class="icon" />
            </span>
        </div>
        <div class="kind-bg">
            <ul class="kinds">
                <li class="kind" v-for="kind in kinds" :key="kind.id">
                    <b>
                        <img :src="kind.img" alt="">
                    </b>
                    <span>{{kind.nm}}</span>
                </li>
                <li class="kind">
                    <b>
                        <img src="//h2.appsimg.com/b.appsimg.com/upload/mst/2020/07/22/97/mst_146e989a0d10e1e8975ef0b65e3a424c_120x120_90.png!75.webp" alt="">
                    </b>
                    <span>更多分类</span>
                </li>
            </ul>
        </div>
        <div class="brank-bg">
            <ul class="branks">
                <h4>品牌精选 低至1折</h4>
                <li class="brank" v-for="brank in branks" :key="brank.id">
                    <b>
                        <img :src="brank.img" alt="">
                    </b>
                    <span>{{brank.nm}}</span>
                </li>
                <li class="brank">
                    <img src="//h2.appsimg.com/b.appsimg.com/upload/mst/2020/07/23/170/mst_41dc1942ace3f765d3a16fe41440b571_122x109_90.png!75.webp" alt="">
                </li>
            </ul>
        </div>
        <varietyContent></varietyContent>
    </div>
</template>

<script>
import {get} from "@/api/http"
import varietyContent from "./varietyContent"
export default {
    components:{
        varietyContent
    }, 
    data() {
        return {
            kinds:{},
            branks:{}
        }
    },
    created() {
        this.getKinds();
        this.getBranks();
    },
    methods: {
        async getKinds(){
            let rs=await get("/api/kinds");
            console.log(rs);
            this.kinds=rs.data
        },
        async getBranks(){
            let rs=await get("/api/branks");
            console.log(rs);
            this.branks=rs.data
        }
    },
}
</script>

<style lang="scss" scoped>
.varietyWrap{
    width: 100%;
    .search-bg{
        width: 100%;
        height: 50px;
        padding: 10px 15px;
        box-sizing: border-box;
        background: #fff;
        .search{
            display: block;
            width: 100%;
            line-height: 30px;
            box-shadow:0 10px 10px 0 transparent;
            background: #f3f4f4;
            font-size: 12px;
            color: #98989e;
            text-indent: 16px;
            .icon{
                float: right;
                font-size: 20px;
                margin: 5px 10px 0 0 ;
            }
        }
    }
    .kind-bg{
        width: 100%;
        height: 225px;
        background: rgb(243, 244, 245);
        box-sizing: border-box;
        padding: 8px 8px 4px;
        .kinds{
            width: 100%;
            height: 213px;
            background: #fff;
            border-radius: 10px;
            padding: 6px 2px;
            box-sizing: border-box;
            .kind{
                width: 60px;
                height: 90px;
                // background: cornflowerblue;
                padding: 5.5px;
                float: left;
                b{
                    display: block;
                    width: 60px;
                    height: 60px;
                    text-align: center;
                    border-radius: 50%;
                    border: 1px solid  rgb(236, 237, 238);
                    background: #F8F8F8;
                    img{
                        width: 100%;
                        border-radius: 50%;
                    }
                }
                span{
                    display: block;
                    width: 60px;
                    line-height: 30px;
                    font-size: 13px;
                    text-align: center;
                    color: rgba(34, 34, 34, 0.8);
                }
            }
        }
    }
    .brank-bg{
        width: 100%;
        height: 197px;
        background: rgb(243, 244, 245);
        box-sizing: border-box;
        padding: 4px 8px 10px;
        .branks{
            width: 100%;
            height: 183px;
            background: #fff;
            border-radius: 10px;
            h4{
                width: 150px;
                line-height: 24px;
                text-align: center;
                color: #fff;
                font-weight: normal;
                background: #EB3A3A;
                font-size: 15px;
                border-radius: 10px 0 10px 0;
            }
            .brank{
                width: 70px;
                height: 50px;
                margin: 10px 8px 15px 10px;
                float: left;
                >img{
                    width: 61px;
                    height: 54px;
                }
                b{
                    display: block;
                    width: 65px;
                    height: 32px;
                    img{
                        height: 32px;
                    }
                }
                span{
                    display: block;
                    width: 68px;
                    height: 15px;
                    border: 1px solid #FEDAD6;
                    border-radius: 10px;
                    font-size: 10px;
                    text-align: center;
                    color: #D21D1D;
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>