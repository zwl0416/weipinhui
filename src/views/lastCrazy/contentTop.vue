<template>
<div>
    <div class="content2">
      <img src="@/assets/imgs/lastCrazy/lastCrazy-content2.gif" alt="">
    </div>
    <div class="contentWrap">
        <ul class="con1">
            <li class="con" v-for="(ft1,idx1) in ft" :key="idx1">
                <img :src="ft1.ct" alt="">
                <span class="ct">
                    <img :src="ft1.lg" alt="">
                    <b>{{ft1.ft}}</b>
                </span>
            </li>
        </ul>
        <div class="con2">
            <img src="@/assets/imgs/lastCrazy/lastCrazy-con-2.webp" alt="">
            <ul class="conwrap">
                <li class="con">
                    <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/612262/2020/0718/120/55d2811e-4bdc-454b-9177-b0522fd5ed27_167x167_90.jpg!75.webp" alt="">
                    <span>鞋</span>
                    <b>拓路者66元抢</b>
                </li>
                <li class="con">
                    <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/01/09/152/5f8c92e9-edf3-4af6-9346-dc9b1f961f13_167x167_90.jpg!75.webp" alt="">
                    <span>连衣裙</span>
                    <b>1折抢伊华欧秀</b>
                </li>
                <li class="con">
                    <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/104218/2020/0319/86/b5c765fc-96cd-4194-a072-8891d5b6a5a1_167x167_90.jpg!75.webp" alt="">
                    <span>箱包</span>
                    <b>单肩包59元抢</b>
                </li>
                <li class="con">
                    <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/611221/2020/0806/61/478dc30c-90f3-438d-a077-cf8051a40a78_167x167_90.jpg!75.webp" alt="">
                    <span>女式衬衫</span>
                    <b>罗蒙2.5折抢</b>
                </li>
            </ul>
            
        </div>
        <div class="con3">
            <div class="day">
                <img src="//h2.appsimg.com/b.appsimg.com/upload/mst/2020/09/02/93/mst_95faaa15d9ca6df374237e8a204b3652_375x325_90.jpg!75.webp" alt="">
                <ul class="conwrap" style="left: 13px;">
                    <li class="con">
                        <img src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/06/04/72/a4c5d37a-a34f-43f7-a2cf-1da791ff8522_159x159_90.jpg!75.webp" alt="">
                        <span>特卖价<b>￥46</b></span>
                    </li>
                    <li class="con">
                        <img src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/105612/2020/0527/137/6d2ed604-99d7-42a5-8677-cae47ba196aa_159x159_90.jpg!75.webp" alt="">
                        <span>特卖价<b>￥66</b></span>
                    </li>
                </ul>
            </div>
            <div class="day">
                <img src="//h2.appsimg.com/b.appsimg.com/upload/mst/2020/09/02/4/mst_4ce40b5f7ef56ba3c152f0bca2c55394_375x325_90.jpg!75.webp" alt="">
                <ul class="conwrap" style="right: 18px;">
                    <li class="con">
                        <img src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/615472/2020/0805/50/0cf30590-c7d3-4496-a5ed-089092f97853_159x159_90.jpg!75.webp" alt="">
                        <span>特卖价<b>￥109</b></span>
                    </li>
                    <li class="con">
                        <img src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/11/15/142/f07b2d42-0519-44dc-8a8e-5a4e07ea64ff_159x159_90.jpg!75.webp" alt="">
                        <span>特卖价<b>￥109</b></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</div>
</template>
<script>
import {get} from "@/api/http"
export default {
    data(){
        return { 
            ft:{},
        }
    },
    created() {
        this.getCon();
    },
    methods: {
        async getCon(){
            let rs=await get("/api/con1");
            // console.log(rs.data)
            this.ft=rs.data;
        }
    },
    
}
</script>

<style lang="scss" scoped>
.content2{
  width: 100%;
  height: 51px;
  img{
    width: 100%;
    height: 51px;
  }
}
.contentWrap{
  width: 100%;
  min-height: 303px;
  background: #F3F4F5;
//   padding: 0 9px;
  .con1{
    width: 357px;
    height: 295px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    margin: 0 9px;
    .con{
        width: 110px;
        height: 140px;
        // background: red;
        position: relative;
        float: left;
        margin: 0 0px 6px 7px;
        >img{
            width: 100%;
            border-radius: 6px;
        }
        .ct{
            width: 88px;
            height: 55px;
            background: rgba(255,255,255, 0.94);
            position: absolute;
            bottom: 8px;
            left: 11px;
            border-radius: 6px;
            >img{
                width: 54px;
                height: 27px;
                display: block;
                margin: 4px auto;
            }
            b{
                width: 70px;
                height: 13px;
                font-size: 10px;
                display: block;
                color: #F33762;
                border: 1px solid #F33762;
                border-radius: 10px;
                text-align: center;
                margin: auto;
            }
        }
    }
  }
  .con2{
      width: 100%;
      height: 180px;
    //   background: red;
        position: relative;
      img{
          width: 100%;
      }
      .conwrap{
          width: 347px;
          height: 130px;
          display: flex;
          justify-content: space-around;
          position: absolute;
          top: 40px;
          left: 13px;
          .con{
              width: 83px;
              span,b{
                  display: block;
                  text-align: center;
              }
              span{
                  line-height: 22px;
                  font-size: 11px;
                  color: #222;
              }
              b{
                  width: 73px;
                  line-height: 15px;
                  background: #F2983A;
                  color: #fff;
                  font-size: 10px;
                  margin: auto;
                  border-radius: 10px;
              }
          }
      }
  }
  .con3{
      width: 375px;
      height: 162px;
      background: #fff;
    //   margin: 0 9px;
      display: flex;
      justify-content: space-between;
      .day{
          width: 188px;
          height: 157px;
          padding-top: 3px;
          position: relative;
          img{
              width: 100%;
          }
          .conwrap{
              position: absolute;
              top: 50px;
              display: flex;
              .con{
                  width: 79px;
                  height: 100px;
                  background: #fff;
                  position: relative;
                  margin-left: 3px;
                  span{
                      position: absolute;
                      bottom: 0;
                      left: 5px;
                      line-height: 20px;
                      color: #F03867;
                      font-size: 9px;
                      b{
                          font-size: 13px;
                          color: #222;
                          margin-left: 5px;
                      }
                  }
              }
          }
      }
  }
}
</style>