<template>
    <div class="cart">
        <HeaderBar>购物车</HeaderBar>
        <div class="content">
            <img src="@/assets/imgs/cart.png" alt="">
            <p>购物车空空如也</p>
            <span @click="toHome()">去抢购</span>
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
        toHome(){
            this.$router.push('/home');
        }
    },
}
</script>

<style lang="scss" scoped>
    .cart{
        background: #F3F4F5;
    }
    .content{
        width: 100%;
        height: 360px;
        background: white;
        p{
            text-align: center;
            line-height: 50px;
            font-size: 18px;
            margin-bottom: 20px;
        }
        span{
            display: inline-block;
            width: 182px;
            line-height: 32px;
            text-align: center;
            border: 1px solid #DE3C96;
            color: #DE3C96;
            margin-left: 98px;
        }
    }
</style>