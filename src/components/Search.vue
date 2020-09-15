<template>
    <div class="search">
        <input type="text" placeholder="护肤套餐">
        <i class="iconfont icon-search-line"></i>
    </div>
</template>

<style lang="scss" scoped>
    .search{
        width: 100%;
        height: 50px;
        background: #F3F4F5;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        input{
            width: 345px;
            height: 30px;
            background: #F3F4F4;
            border: none;
            border: 1px solid #edeeee;
            font-size: 14px;
            text-indent: 10px;
        }
        i{
            position: absolute;
            right: 20px;
            top: 10px;
            font-size: 30px;
            color: gray;
        }
    }
</style>