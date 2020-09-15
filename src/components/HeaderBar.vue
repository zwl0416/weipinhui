<template>
    <div class="headerBar">
        <i class="iconfont icon-zuojiantou" @click="back()"></i>
        <span><slot>下载客户端</slot></span>
        
        <i class="iconfont icon-zhuye" @click="home()"></i>
    </div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.go(-1);
        },
        home(){
            this.$router.push('/home');
        }
    },
}
</script>

<style lang="scss" scoped>
    .headerBar{
        background: #FBFBFA;
        width: 100%;
        height: 44px;
        color: #555555;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        i{
            font-size: 30px;
        }
    }
</style>