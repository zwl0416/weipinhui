<template>
    <div>
        <ul>
            <li v-for="(item,key) in $store.state.list" :key="key">
                <img :src="item.img" alt="">
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    ul{
        width: 252px;
        margin: 0 auto;
        margin-top: 30px;
        margin-left: 30px;
        overflow: hidden;
    }
    li{
        width: 62px;
        height: 82px;
        float: left;
        margin-bottom: 20px;
        margin-right: 20px;
        img{
            width: 62px;
            height: 62px;
        }
        p{
            widows: 62px;
            line-height: 20px;
            font-size: 12px;
            color: #222;
            text-align: center;
        }
    }
</style>