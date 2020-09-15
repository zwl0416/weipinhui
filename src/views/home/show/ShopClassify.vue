<template>
    <div class="classify">
        <ul class="shopClassify">
            <li v-for="(item,key) in classifylist" :key="key" class="clear" @click="showAlert()">
                <img :src="item.src" alt="">
                <p>{{item.nm}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { get } from "@/api/http"
import Vue from 'vue';
import { Dialog } from 'vant';

export default {
    components: {
        [Dialog.Component.name]: Dialog.Component,
    },
    data() {
        return {
            classifylist : [],
        }
    },
    created() {
        this.getClassifyList()
    },
    methods: {
        async getClassifyList(){
            let rs = await get("/api/classifylist")
            this.classifylist = rs.data;


            // console.log(this.classifylist);
        },
        showAlert(){
            // Dialog.alert({
            //     title: '你好啊',
            //     message: '该功能马上开发完成',
            //     }).then(() => {
            //     // on close
            // });
            this.$router.push("/varietyList")
        }
    },
}
</script>

<style lang="scss" scoped>
    .clear::after{
        content: '';
        display: block;
        clear: both;
    }
    .classify{
        height: 168px;
    }
    .shopClassify{
        height: 100%;
        li{
            width: 75px;
            height: 84px;
            position: relative;
            float: left;
            img{
                width: 100%;
                height: 100%;
            }
            p{
                width: 75px;
                text-align: center;
                position: absolute;
                left: 0;
                bottom: 0;
                font-size: 14px;
                color: #666666;
            }
        }
    }
</style>