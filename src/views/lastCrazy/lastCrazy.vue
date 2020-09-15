<template>
  <div class="lastCrazy" id="top">
    <div class="logo">
      <img src="@/assets/imgs/lastCrazy/lastCrazy-logo.webp" alt="">
    </div>
    <div class="content1">
      <img src="@/assets/imgs/lastCrazy/lastCrazy-content1.webp" alt="">
    </div>
    
    <contentTop></contentTop>

    <contentList></contentList>
    <a class="toTop" href="#top">
      <van-icon name="back-top" />
      <b>顶部</b>
    </a>
  </div>
</template>

<script>
import contentTop from "@/views/lastCrazy/contentTop"
import contentList from "@/views/lastCrazy/contentList"

export default {
  components: {
    contentTop,
    contentList
  }
}
</script>

<style lang="scss" scoped>
.lastCrazy{
  background: #F3F4F5;
  .logo{
    width: 100%;
    height: 150px;
    overflow: hidden;
    img{
      width: 100%;
      height: auto;
    }
  }
  .content1{
    width: 100%;
    height: 40px;
    img{
      width: 100%;
      height: 40px;
    }
  }
  .toTop{
    display: block;
    width: 40px;
    height: 40px;
    position: fixed;
    right: 10px;
    bottom: 80px;
    border-radius: 50%;
    color: #fff;
    background: rgba(0,0,0, 0.65);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    b{
      font-weight: normal;
      font-size: 10px;
    }
  }
}


</style>
