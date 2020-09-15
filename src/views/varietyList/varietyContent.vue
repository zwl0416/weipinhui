<template>
    <div class="contentWrap">
        <ul class="content" v-show="$store.state.showop" ref="content">
            <li :class="[idx==ids ? 'active':'']" v-for="(list,idx) in lists" :key="idx" @click="handleClick(idx)">{{list.title}}</li>
        </ul>
        <div class="dataWrap">
            <ul class="option">
                <li v-for="wise in listSc" :key="wise.id" @click="clickHandle()">{{wise.top}}</li>
            </ul>
            <div class="datalistWrap" ref="datalist">
                <ul class="datalist" :style="'height:'+getHeight">
                    <li v-for="list in listData" :key="list.id" @click="goShopping(list)">
                        <img :src="list.img" alt="">
                        <span>
                            <b>
                                <strong>{{list.special}}</strong>
                                <strong>￥{{list.price}}</strong>
                            </b>
                            <b>{{list.des}}</b>
                            <b class="sell" v-if="list.sale==1">{{list.sell}}</b>
                            <b class="new" v-if="list.sale==2">{{list.new}}</b>
                            <b class="sale" v-if="list.sale==3">累计热卖{{list.add}}件</b>
                        </span>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>
import {get} from "@/api/http";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup)
export default {
    data() {
        return {
            ids:0,
            lists:[],
            listSc:[],
            listData:[],
            start:0,
            limit:6,
            hasMore:true
        }
    },
    computed: {
        getHeight(){
            return 59.46667 * Math.ceil(this.listData.length/3) +"vw"
        }
    },
    created() {
        this.getLists();
    },
    methods: {
        async getLists(){
            let rs=await get("/api/lists");
            console.log(rs.data);
            this.lists=rs.data;
            this.listSc=rs.data[this.ids].wise
            this.listData=rs.data[this.ids].con
            this.$nextTick(()=>{
                this.initScroll();
            })
            console.log(this.$refs.content)
        },
        initScroll(){
            let start=this.start;
            let end=start+this.limit;
            this.bscroll = new BScroll(this.$refs.datalist, {
                pullUpLoad: true,
                click:true
            })
            if(this.listData.length<this.limit){
                this.hasMore=false;
            }
            this.bscroll.on("pullingUp", () => {
                if(this.hasMore){
                    this.initScroll()
                }else{
                    Toast("没有更多的数据了");
                }
            })
            this.$nextTick(()=>{
                this.bscroll.finishPullUp();
                this.bscroll.refresh();
            })
        },
        handleClick(idx){
            this.ids=idx;
            this.listSc=this.lists[this.ids].wise
            this.listData=this.lists[this.ids].con
        },
        goShopping(listSc){
            // console.log(listSc)
            this.$router.push({path:"/shoppingCart",query:listSc})
        },
        clickHandle(){
            console.log(event.target.setAttribute("class","opt"))
        }
    },
}
</script>

<style lang="scss" scoped>
.contentWrap{
    // width: 100%;
    // height: 500px;
    // background: palegreen;
    .content{
        width: 100%;
        height: 55px;
        border-bottom: 1px solid #C3C3C3;
        background: #fff;
        position: sticky;
        top: 0px;
        z-index: 1;
        li{
            float: left;
            width: 93px;
            line-height: 55px;
            text-align: center; 
            color: #666;
            font-size: 14px;
        }
        .active{
            color: #000;
            font-weight: bold;
            position: relative;
            &::after{
                content: '';
                width: 56px;
                height: 3px;
                position: absolute;
                left: 20%;
                bottom: 20%;
                background: #E70068

            }
        }
    }
    .dataWrap{
        width: 100%;
        // background: palevioletred;
        height: 670px;
        .option{
            width: 97.8%;
            height: 42px;
            box-sizing: border-box;
            margin-left: 8px;
            overflow-x: scroll;
            overflow-y: hidden;
            background: #FAFAFA;
            white-space: nowrap;
            position: sticky;
            top: 0px;
            z-index: 2;
            >li{
                // float: left;
                display: inline-block;
                padding: 0 7px;
                margin: 8px 8px 8px 0;
                border: 1px solid #c6c6c6;
                line-height: 26px;
                color: #222;
                background: #fff;
                font-size: 12px;
                text-align: center;
            }
            .opt{
                color: #EB5EAC;
                border: 1px solid #EB5EAC;
                position: relative;
            }
            .opt::after{
                content: '';
                border-width: 5px;
                border-color: #EB5EAC transparent transparent transparent;
                border-style: solid;
                transform: rotate(-45deg);
                position: absolute;
                bottom: -6px;
                right: -5px;
            }
        }
        .datalistWrap{
            width: 100%;
            height: 628px;
            overflow: hidden;
            // background: palegoldenrod;
            .datalist{
                width: 100%;
                clear: both;
                // background: paleturquoise;
                >li{
                    float: left;
                    width: 121px;
                    height: 223px;
                    box-sizing: border-box;
                    padding: 5px 0 0 8px;
                    img{
                        width: 116px;
                    }
                    b{
                        display: block;
                    }
                    b:nth-child(1){
                        width: 100%;
                        line-height: 25px;
                        font-size: 15px;
                        color: #222;
                        margin-top: -5px;
                        strong:nth-child(1){
                            width: 38px;
                            text-align: center;
                            line-height: 15px;
                            display: inline-block;
                            font-size: 8px;
                            color: #fff;
                            border-radius: 10px;
                            padding: 0 3px;
                            background: linear-gradient(90deg,#f03867,#cb78dc);
                        }
                        strong:nth-child(2){
                            display: inline-block;
                            font-weight: bold;
                        }
                    }
                    b:nth-child(2){
                        width: 103px;
                        color: #585C64;
                        font-size: 12px;
                        margin: 0px 0 5px;
                    }
                    .sell{
                        display: inline-block;
                        text-align: center;
                        border: 1px solid #F07009;
                        color: #F07009;
                        font-size: 10px;
                        border-radius: 10px;
                        padding: 0 5px;
                    }
                    .new{
                        display: inline-block;
                        text-align: center;
                        border: 1px solid #32b444;
                        color: #32b444;
                        font-size: 10px;
                        border-radius: 10px;
                        padding: 0 5px;
                    }
                    .sale{
                        display: inline-block;
                        text-align: center;
                        font-size: 10px;
                        color: #98989f;
                        padding: 0 3px;
                        font-size: 11px;
                    }
                }
            }
        }
        
    }
}
</style>