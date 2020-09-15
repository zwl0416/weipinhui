<template>
<div>
    <div class="big">
    <div class="boxs" v-for="i in datatlist" :key="i.id" >
        <div class="top">
            <div class="imgs"> <img :src="i.top" alt=""></div>
           
            <span>{{i.nm}}</span>
            <button>进入专场</button>
        </div>
        <ul class="bottom"  >
            <li> <img :src="i.tite1">
             <span>特卖价：&nbsp;&nbsp;{{i.text1}}</span>
            </li>
            <li> <img :src="i.tite2" alt="">
             <span>特价：&nbsp;&nbsp;{{i.text2}}</span>
            </li>
            <li> <img :src="i.tite3" alt="">
             <span>特价：&nbsp;&nbsp;{{i.text3}}</span>
            </li>
        </ul>
    </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.big{background: #F3F4F5;}
.boxs{
    height: 276px;
    background: white;
   
  /*   background: #666; */
      margin-top:12px ;
    .top{
        height: 76px;
       
        display: flex;
        justify-content: space-around;
        
        align-items: center;
        
        .imgs{
            width: 48px;
            height: 48px;
            border: 1px solid #F3F4F5;
        img{
            width: 48px;
            height: 20px;
            margin-top:14px ;
        }
        }
        span{
            display: inline-block;
            width: 210px;
            height: 22px;
            font-size: 20px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 210px;
        }
        button{
            width: 76px;
            height: 28px;
            background: red;
            color: white;
            border: none;
        }
    }
    .bottom{
        height: 200px;
      
      
        display: flex;
        justify-content: space-around;
        li{
            width: 114px;
            height: 175px;
           
            img{
                width: 100%;
                height: 144px;
            }
            span{
                display: inline-block;
                height: 16px;
                width: 100%;
                text-align: center;
                color: #222;
                font-size: 16px;
                margin-top:5px ;
            }
        }
    }
}

</style>
<script>
import {get} from '@/api/http'
export default {
     data(){
    return{
        datatlist:[],
       
    }
     },
    
 async created() {
    let rs=await get('/api/lister')
        
        this.datatlist=rs.data
      
        console.log(this.datatlist)
},
}
</script>