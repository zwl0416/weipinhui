<template>
  <header>
      <div><van-icon name="arrow-left" /></div>
      <div>
          <slot name="title">
              
          </slot>
      </div>
      <div><van-icon name="wap-home-o" /></div>
  </header>
</template>

<script>
export default {
  props:['title']
}
</script>

<style lang="scss" scoped>
  header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    color: black;
    font-size: 24px;
    text-align: center;
    div:nth-of-type(2){
      width: 264px;
    }
  }
</style>