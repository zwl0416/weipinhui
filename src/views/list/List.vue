<template>
    <div>
        <Search></Search>
        <div class="list">
            <div class="nav">
                <li :class="{'active': 1 == isActive}" @click="change(1,'womanWearlist')">女装</li>
                <li :class="{'active': 2 == isActive}" @click="change(2,'manWearlist')">男装</li>
                <li :class="{'active': 3 == isActive}" @click="change(3,'underWearlist')">内衣</li>
                <li :class="{'active': 4 == isActive}" @click="change(4,'manShoeslist')">男鞋</li>
                <li :class="{'active': 5 == isActive}" @click="change(5,'womanShoeslist')">女鞋</li>
            </div>
            <div class="content">
                <ListContent></ListContent>
            </div>
        </div>
    </div>
</template>

<script>
import { get } from "@/api/http"
import Search from '@/components/Search'
import ListContent from './listContent/ListContent'
export default {
    components : {
        Search,
        ListContent,
    },
    data() {
        return {
            contentList :[]
        }
    },
    async created() {
        let rs = await get('/api/dataList')
        this.$store.commit('setDataList',rs.data);
        this.$store.commit('setList',this.$store.state.dataObj.womanWearlist);
        console.log(rs)
    },
    data() {
        return {
            isActive : 1
        }
    },
    methods: {
        change(type,list){
            this.isActive = parseInt(type);
            this.contentList = this.$store.state.dataObj[list];
            this.$store.commit('setList',this.contentList);

        }
    },
}
</script>

<style lang="scss" scoped>
    .list{
        width: 100%;
        display: flex;
        .nav{
            width: 93px;
            background: #F3F4F5;
            li{
                width: 93px;
                height: 48px;
                border-bottom: 1px solid lightgray;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
            }
            .active{
                background: white;
                border-left: 2px solid #F03867;
            }
        }
        .content{
            width: 282px;
        }
    }
</style>