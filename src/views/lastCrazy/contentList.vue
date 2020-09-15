<template>
    <div class="navWrap">
        <ul class="nav">
            <li :class="[cla==0 ? 'active' :'']" @click="handleClick('woman',0)">女装</li>
            <li :class="[cla==1 ? 'active' :'']" @click="handleClick('man',1)">男装</li>
            <li :class="[cla==2 ? 'active' :'']" @click="handleClick('shoes',2)">鞋包</li>
            <li :class="[cla==3 ? 'active' :'']" @click="handleClick('underwear',3)">内衣</li>
            <li :class="[cla==4 ? 'active' :'']" @click="handleClick('sports',4)">运动户外</li>
            <li :class="[cla==5 ? 'active' :'']" @click="handleClick('infant',5)">母婴</li>
            <li :class="[cla==6 ? 'active' :'']" @click="handleClick('beauty',6)">美妆精品</li>
            <li :class="[cla==7 ? 'active' :'']" @click="handleClick('live',7)">生活居家</li>
        </ul> 
        <dataList :list="getDatalist" :type="type" ></dataList>
    </div>
</template>

<script>
import dataList from "./dataList"
import {get} from "@/api/http"
export default {
    components:{
        dataList
    },
    data() {
        return {
            cla:0,
            keyword:'woman',
            type:"女装",
            goodsList:{}
        }
    },
    computed: {
        getDatalist(){
            return this.goodsList[this.keyword]
        }
    },
    async created() {
        var rs=await get("/api/datalists");
        // console.log(rs.data);
        this.goodsList=rs.data
    },
    methods: {
        handleClick(item,id){
            this.cla=id;
            this.keyword=item
            if(this.keyword=="woman"){
                this.type="女装";
            }else if(this.keyword=="man"){
                this.type="男装";
            }else if(this.keyword=="shoes"){
                this.type="鞋包";
            }else if(this.keyword=="underwear"){
                this.type="内衣";
            }else if(this.keyword=="sports"){
                this.type="运动户外";
            }else if(this.keyword=="infant"){
                this.type="母婴";
            }else if(this.keyword=="beauty"){
                this.type="美妆精品";
            }else{
                this.type="生活居家";
            }
        }
    },
}
</script>


<style lang="scss" scoped>
.navWrap{
    display: flex;
    position: relative;
    margin-top: 15px;
    .nav{
        width: 50px;
        height: 512px;
        position: sticky;
        top: 0;
        li{
            background: #fff;
            width: 50px;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            font-size: 13px;
            color: #222;
            padding: 0 10px;
            border-left: 2px solid #fff;
        }
        .active{
            color: #f03867;
            font-weight: bold;
            border-left: 2px solid #f03867;
            background: #F3F4F5;
        }
    }
}

</style>