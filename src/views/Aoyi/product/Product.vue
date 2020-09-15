<template>
    <div class="main">
        <Header>
            <template #title>
                {{product.name1}}
            </template>
        </Header>
        <Title :head="product"></Title>
        <div class="sort-head"></div>
        <ul class="sort">
            <li :class="{price:this.$store.state.showPrice}" @click="sortPrice()">价格
                <div>
                    <p><van-icon name="arrow-up" /></p>
                    <p><van-icon name="arrow-down" /></p>
                </div>
            </li>|
            <li :class="{discount:this.$store.state.showDiscount}" @click="sortDiscount()">折扣
                <div>
                    <p><van-icon name="arrow-up" /></p>
                    <p><van-icon name="arrow-down" /></p>
                </div>
            </li>|
            <li class="num">销量
                <div>
                    <p><van-icon name="arrow-up" /></p>
                    <p><van-icon name="arrow-down" /></p>
                </div>
            </li>|
            <li class="search" @click="showChoose1()">筛选
                <div>
                    <van-icon name="eye-o" />
                </div>
            </li>
        </ul>
        <div class="content">
            <Shop :shops="item" :key="item.id" v-for="item in chooseProduct"></Shop>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import Title from './Title'
import Shop from './shop1'
import {get} from '@/api/http'

export default {
    components:{
        Header,
        Title,
        Shop
    },
    created() {
        this.getdetail()
    },
    mounted() {
        console.log(this.$route.query) 
        this.product = this.$route.query
    },
    computed: {
        chooseProduct(){
            let minPrice1 = this.$store.state.minPrice
            let maxPrice1 = this.$store.state.maxPrice
            this.detail = this.detail.filter((item)=>{
                return parseInt(item.nowPrice.replace(/￥/,'')) < parseInt(maxPrice1) && parseInt(item.nowPrice.replace(/￥/,'')) > parseInt(minPrice1)
            })
            this.detail = this.detail.filter((item)=>{
                return item.mode.indexOf(this.$store.state.mode[0]) > -1 || item.mode.indexOf(this.$store.state.mode[1]) > -1
            })
            this.detail = this.detail.filter((item)=>{
                return item.page.indexOf(this.$store.state.size[0]) > -1 || item.mode.indexOf(this.$store.state.size[1]) > -1 || item.mode.indexOf(this.$store.state.size[2]) > -1 || item.mode.indexOf(this.$store.state.size[3]) > -1  
            })
            return this.detail
        }
    },
    methods: {
        async getdetail(){
            let rs = await get("product.json")
            this.detail.push(...rs.data.data);
        },
        showChoose1(){
            this.$router.push({path:'/choose'})
        },
        sortPrice(){
            if (this.$store.state.showPrice){
                this.$store.commit('setPrice',false)
            }else{
                this.$store.commit('setPrice',true)
            }
            this.detail.sort((a, b) => {
            let salaryA = parseInt(a.nowPrice.replace(/￥/i, ''));
            let salaryB = parseInt(b.nowPrice.replace(/￥/i, ''));
            if (this.$store.state.showPrice) {
              return salaryB - salaryA;
            } else {
              return salaryA - salaryB;
            }
          })
        },
        sortDiscount(){
            if (this.$store.state.showDiscount){
                this.$store.commit('setDiscount',false)
            }else{
                this.$store.commit('setDiscount',true)
            }
            this.detail.sort((a, b) => {
            let salaryA = parseInt(a.discount);
            let salaryB = parseInt(b.discount);
            if (this.$store.state.showDiscount) {
              return salaryB - salaryA;
            } else {
              return salaryA - salaryB;
            }
          })
        },

    },
    data() {
        return {
            detail:[],
            product:{}
        }
    },
}
</script>

<style lang="scss" scoped>
    .price{
        p:nth-of-type(1){
            color: rgb(199, 34, 12) !important;
        }
        p:nth-of-type(2){
            color: #444 !important;
        }
    }
    .discount{
        p:nth-of-type(1){
            color: rgb(199, 34, 12) !important;
        }
        p:nth-of-type(2){
            color: #444 !important;
        }
    }
    .main{
        position: relative;
    }
    .sort-head{
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        margin-top: -16px;
        width: 100%;
        height: 18px;
        background: white;
    }
    .sort{
        background: white;
        z-index: 10;
        position: sticky;
        top: 0px;
        color: #999;
        width: 100%;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        li{
            color: #444;
            font-size: 14px;
            display: flex;
            align-items: center;
            div{
                margin-left: 5px;
                height: 20px;
                line-height: 20px;
                p{
                    line-height: 10px;
                    height: 10px;
                    font-size: 8px;
                }
                p:nth-of-type(1){
                    color: #444;
                }
                p:nth-of-type(2){
                    color: rgb(199, 34, 12);
                }
            }
        }
    }
    .content{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: #F3F4F5;
    }
</style>