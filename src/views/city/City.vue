<template>
<div>
  <section class="nav" @touchmove = "move">
    <div class="nav-item" data-id="locate" @click="go('locate')">定位</div>

    <div class="nav-item" data-id="hot" @click="go('hot')">热门</div>

    <div class="nav-letter nav-item" :ref="l" v-for="l in getLetter" :key="l">{{l}}</div>

  </section>
  <div class="cityWrapper" ref="wrapper">
    <section id="city-list" class="city-list-container" style="display: block;">
      <section>
        <div id="locate" class="city-title">定位城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="location-city">定位失败，请点击重试</div>
        </div>
      </section>

      <section class="history-city-list"></section>

      <section>
        <div id="hot" class="city-title">热门城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item" data-nm="上海" data-id="10" v-for="(item,key) in HotCities" :key="key" @click="changeCity(item.name)">{{item.name}}</div>
        </div>
      </section>

      <section>
        <div  v-for="(item,key) in cities" :key="key">
          <div :id="key" class="city-title city-title-letter">{{key}}</div>
          <div class="city-list city-list-block clearfix">
            <div class="city-item" @click="changeCity(i.name)" data-id="150" v-for="(i,k) in item" :key="k">{{i.name}}</div>
          </div>
        </div>
      </section>

    </section>
  </div>
</div>
</template>

<script>
import { get } from "@/api/http";

import BScroll from "@better-scroll/core"

export default {

  data() {
    return {
      HotCities:[],
      cities : {}
    }
  },
  created() {
    
    this.getHotCities();
    this.getCities();

    this.$nextTick(()=>{
      setTimeout(()=>{
        this.initScroll();
      },400)
    })
  },
  computed: {
    getLetter(){
      return Object.keys(this.cities);
    }
  },
  methods: {
    async getHotCities(){
      let rs = await get('/api/hotCities');
      this.HotCities = rs.data;
    },
    async getCities(){
      let rs = await get('/api/cities');
      this.cities = rs.data;
    },
    move($event){

      //获取A距离顶部的距离 
      let topA = this.$refs.A[0].getBoundingClientRect().top;
      //获取当前距离
      let current = $event.targetTouches[0].pageY;
      //获取每个高度
      let letterHeight = this.$refs.A[0].getBoundingClientRect().height;
      //获取索引值
      let index = Math.floor((current - topA) / letterHeight)
      let letter = this.getLetter[index];
      if(letter){
        this.bscroll.scrollToElement(document.querySelector(`#${letter}`),500)
      }
    },
    initScroll(){
      this.bscroll = new BScroll(this.$refs.wrapper, {
        scrollY:true,
        click: true
      })
    },
    go(place){
      this.bscroll.scrollToElement(document.querySelector(`#${place}`),500);
    },
    changeCity(city){
      this.$store.commit('setCity',city);
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="scss" scoped>

.cityWrapper{
  height: 100%;
  overflow: hidden;
}

.city-list-container {
  display: none;
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
  width: 100%;
}

.clearfix:after {
  content: " ";
  display: table;
  clear: both;
}

.city-title {
  padding-left: 15px;
  line-height: 30px;
}

.city-title-letter {
  padding-left: 25px;
}

.city-list {
  padding-right: 30px;
}

.city-list-inline {
  background-color: #f5f5f5;
  padding-bottom: 8px;
}

.city-list-inline .city-item,
.city-list-inline .location-city {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.city-list-inline .location-city {
  width: auto;
  min-width: 30%;
  padding: 0 20px;
}

.city-list-block {
  background-color: #f5f5f5;
}

.city-list-block .city-item {
  height: 44px;
  line-height: 44px;
  margin-left: 15px;
  border-bottom: 1px solid #c8c7cc;
}

.city-list-block .city-item:last-child {
  border-bottom: none;
}

.nav {
  position: fixed;
  top: 75px;
  top: 11vh;
  right: 0;
  width: 35px;
  z-index: 10;
  text-align: center;
  font-size: 12px;
}

.nav .nav-item {
  height: 16px;
  height: 2.8vh;
}

.nav .nav-letter {
  width: 15px;
  margin-left: 15px;
}
</style>