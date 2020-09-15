<template>
    <div class="box1">
        <ul>
            <li>
                <img src="@/assets/imgs/sale/log1.jpg" alt="" class="a">
                <img src="@/assets/imgs/sale/logsmall1.jpg" alt="" class="b">
                <p>￥69</p>
            </li>
            <li>
                <img src="@/assets/imgs/sale/log2.jpg" alt="" class="a">
                <img src="@/assets/imgs/sale/logsmall2.jpg" alt="" class="b">
                <p>￥52</p>
            </li>
            <li>
                <img src="@/assets/imgs/sale/log3.jpg" alt="" class="a">
                <img src="@/assets/imgs/sale/topsamll3.jpg" alt="" class="b">
                <p>￥79</p>
            </li>
            <li>
                <img src="@/assets/imgs/sale/log4.jpg" alt="" class="a">
                <img src="@/assets/imgs/sale/logsamll4.jpg" alt="" class="b">
                <p>￥44</p>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
.box1{
    height: 201px;
    width: 375px;
   position: relative;
    background: url('../../assets/imgs/sale/back1.jpg'); background-size:cover ;
    ul{
        width: 365px;
        height: 150px;
      
        position: absolute;
        top: 40px;
        left: 5px;
      
        li{
            width: 83px;
            margin: 3px;
              float: left;
        .a{
            width: 83px;
            height: 83px;
        }
        .b{
             width: 50px;
            height: 25px; 
            margin-left: 18px;
        }
        p{
            width: 83px;
            height: 12px;
            color: red;
            text-align: center;
        }
        }
    }
}
</style>