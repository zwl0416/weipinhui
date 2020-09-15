<template>
    <div class="box">
    <a name="toop"></a>
    <div class="top1" >
            
            <img src="@/assets/imgs/sale/top01.jpg" alt="">
        </div> 
        <div class="top2">
             <img src="@/assets/imgs/sale/top3.jpg" alt="">
        </div> 
        <div class="top3">
           <ul>
              <li v-for="item in expectlist" :key="item.id">
                  <img :src="item.img" alt="">
                  <p>{{item.nm}}</p>
              </li>
           </ul>
        </div>
   <Q></Q>
    <div class="top4">
        <img src="@/assets/imgs/sale/shoe1.jpg" alt="">
        <img src="@/assets/imgs/sale/yi.jpg" alt="">
    </div>
    <div class="foot">
        <img src="@/assets/imgs/sale/foot1.jpg" alt="">
    </div> 
   <!--  列表动态生成 -->
    <Lister></Lister> 
   
    <!-- 返回顶部 -->
    <div class="back">
        <a href="#toop">返回</a>
    </div>
    </div>
</template> 
<script>
import {get} from '@/api/http'
import Lister from './lister'
import Q from './q'
export default {
    data(){
    return{
        expectlist:[]
    }
    
    },
    components:{
        Lister,
        Q,
    },

 async created() {
        let rs=await get('/api/expectlist')
    
        this.expectlist=rs.data
    },
    
}
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
   
    .top1{
width: 375px;
height: 102px;
img{
    width: 100%;
    height: 100%;
}
}
.top2{
width: 375px;
height: 37px;
img{
    width: 100%;
    height: 100%; 
}
}
.top3{
   
    height: 237px;
    background: url('../../assets/imgs/sale/top02.jpg');
    background-size:cover ;
    position: relative;
    ul{
      
     
        height: 160px;
        position: absolute;
        left: 0;
        top: 66px;
        margin-left:4px ;
      
        /* overflow: hidden; */
        li{  float: left;
            height: 60px;
            width: 70px;
            margin: 10px;
     
            img{
                width: 70px;
                height: 35px;
            }
            p{
                width: 70px;
                height: 17px;
                border-radius: 20px;
                border: 1px orange solid;
                color: orange;
                font-size: 12px;
                text-align: center;
                margin-top:7px ;
            }
        }
    }
}
.top4{
    height: 74PX;
    display: flex;
    img{
        height: 74px;
        width: 187px;
    }
}
.foot{
    height: 40px;
    img{width: 100%;height: 100%;}
}
}
.back{
    background: rgba(0,0,0,.5);
    border-radius: 50%;
    position: fixed;
    right: 40px;
    width: 40px;
    height: 40px;
    bottom: 30px;
   
    line-height: 40px;
    a{
         color: white;
         text-decoration: none;
    }
}

</style>