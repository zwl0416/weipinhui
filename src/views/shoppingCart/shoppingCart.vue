<template>
    <div class="detailWrap">
        <div class="top">
            <van-icon name="arrow-left" class="back" />
            <span class="share">
                <van-icon name="like-o" />
                <van-icon name="share-o" />
            </span>
        </div>
        <div class="detail">
            <img src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/09/08/3/3f857938-b4c8-4aca-bb6d-7d8c2495ca21_720x909_70.jpg!85.webp" alt="">
            <p class="price">
                <span class="left">
                    <b>￥49</b>
                    <b>￥230</b>
                    <b>2.2折</b>
                </span>
                <span class="right">
                    <b>最后疯抢</b>
                    <b>已抢77%</b>
                </span>
            </p>
            <p class="title">
                <span>休闲polo衫女2020夏季气质翻领弹力修身显瘦短袖上衣</span>
                <b>佐丹奴</b>
            </p>
            <p class="quality">
                <img src="https://h2a.appsimg.com/b.appsimg.com/upload/momin/2019/12/23/16/1577086532213.png!85.webp" alt="">
                <span>100%正品·专业鉴定·正品险</span>
                <van-icon name="arrow" />
            </p>
            <ul class="color">
                <h4>颜色</h4>
                <li>
                    <img src="https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/09/08/138/5f41b5ea-929e-41c9-a1fb-95eb81fdcff6_720x909_70.jpg!85.webp" alt="">
                    标志白
                </li>
            </ul>
        </div>
        <ul class="nav">
            <li class="service"><van-icon name="service-o" /></li>
            <li class="cart"><van-icon name="shopping-cart-o" /></li>
            <li class="shopping">加入购物车</li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route.query)
    },
}
</script>

<style lang="scss" scoped>
.detailWrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top{
        position: absolute;
        width: 100%;
        height: 60px;
        background: plum;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 22px;
        .back{
            width: 40px;
            height: 40px;
            line-height: 40px;
            border-radius: 50%;
            text-align: center;
            background: rgba(#000, 0.7);
        }
        .share{
            width: 83px;
            height: 32px;
            box-sizing: border-box;
            padding: 0 15px 4px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 100px;
            background: rgba(#000, 0.7);
        }
    }
    .detail{
        width: 100%;
        background: #F3F4F5;
        flex: 1;
        // height: 100%;
        >img{
            width: 100%;
        }
        .price{
            width: 100%;
            height: 74px;
            background: #FF3369;
            margin-top: -4px;
            display: flex;
            box-sizing: border-box;
            padding: 0 10px;
            align-items: center;
            justify-content: space-between;
            .left{
                font-size: 14px;
                color: #FFACC2;
                b{
                    margin-right: 5px;
                }
                b:nth-child(1){
                    font-size: 25px;
                    color: #fff;
                }
                b:nth-child(2){
                    text-decoration: line-through;
                }
            }
            .right{
                display: flex;
                flex-direction: column;
                color: #fff;
                text-align: right;
                b:nth-child(1){
                    font-size: 14px;
                    margin-bottom: 5px;
                }
                b:nth-child(2){
                    font-size: 10px;
                }
            }
        }
        .title{
            width: 100%;
            height: 75px;
            padding: 15px;
            margin: auto;
            box-sizing: border-box;
            margin-bottom: 8px;
            background: #fff;
            span{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                display: block;
                font-size: 14px;
                margin-bottom: 10px;
            }
            b{
                font-size: 12px;
                color: #4A90E2;
            }
        }
        .quality{
            width: 100%;
            height: 46px;
            padding: 0 15px;
            box-sizing: border-box;
            background: #fff;
            display: flex;
            // justify-content: space-around;
            align-items: center;
            margin-bottom: 8px;
            >img{
                width: 73px;
                margin-right: 10px;
            }
            span{
                width: 249px;
                font-size: 12px;
                color: #585C64;
                padding-left: 15px;
            }
            b{
                color: #C2C2C7;
            }
        }
        .color{
            width: 100%;
            min-height: 100px;
            background: #fff;
            padding: 0 15px;
            box-sizing: border-box;
            h4{
                display: block;
                width: 100%;
                line-height: 40px;
            }
            li {
                border: 1px solid #E3E3E3;
                line-height: 30px;
                padding: 0 5px;
                img{
                    width: 19px;
                }
            }
        }
    }
    .nav{
        width: 100%;
        height: 66px;
        padding: 12px 15px;
        background: #fff;
        box-sizing: border-box;
        background: pink;
        display: flex;
        justify-content: space-around;
        color: #000;
        font-size: 25px;
        .service{
            width: 42px;
            height: 42px;
            line-height: 47px;
            text-align: center;
        }
        .cart{
            width: 85px;
            height: 41px;
            line-height: 47px;
            text-align: center;
            border-radius: 50px;
            border: 1px solid #ccc;
        }
        .shopping{
            width: 203px;
            line-height: 42px;
            text-align: center;
            background: #DE3D96;
            color: #fff;
            border-radius: 70px;
            font-size: 14px;
        }
    }
}
</style>