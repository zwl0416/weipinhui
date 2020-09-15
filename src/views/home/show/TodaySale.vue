<template>
    <div class="todaySale">
        <ul @click="toAoyi()">
            <li v-for="(item,key) in $store.state.todaySaleList" :key="key">
                <img :src="item.img" alt="">
                <div>
                    <h4>
                        <span class="name">{{item.title}}</span>
                        <span class="day">{{item.remain_days}}</span>
                    </h4>
                    <p>
                        <span>{{item.discount}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { get } from "@/api/http"
export default {
    data() {
        return {
            todaySaleList : [],
        }
    },
    created() {
        this.getTodaySaleList()
    },
    methods: {
        async getTodaySaleList(){
            let rs = await get("/api/todaySaleList")
            this.$store.commit('setTodaySaleList',rs.data);
            // this.todaySaleList = rs.data;
            // console.log(this.todaySaleList);

        },
        toAoyi(){
            this.$router.push("/homes")
        }
    },
}
</script>

<style lang="scss" scoped>
    .todaySale{
        width: 100%;
        ul{
            width: 100%;
            li{
                width: 375px;
                height: 234px;
                margin-bottom: 10px;
                img{
                    width: 349px;
                    height: 168px;  
                    display: block;
                    margin: 0 auto;
                }
                div{
                    width: 340px;
                    height: 66px; 
                    margin: 0 auto;
                    h4{
                        height: 33px;
                        line-height: 33px;
                        display: flex;
                        justify-content: space-between;
                        .name{
                            font-size: 14px;
                            color: #222222;
                        }
                        .day{
                            font-size: 12px;
                            color: #98989F;
                        }
                    }
                    p{
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>