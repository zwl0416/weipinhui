<template>
  <div class="detail">
    <span class="cart">
      <i class="iconfont icon-icon4" @click="toCart()"></i>
    </span>
    <span class="addCart" @click="show=true">加入购物车</span>
    <Ad></Ad>
    <div class="img">
      <i class="iconfont icon-zuojiantou back" @click="back()"></i>
      <span>
        <i class="iconfont icon-heart-add-line"></i>
        <i class="iconfont icon-share" @click="showShare = true"></i>
      </span>
      <van-swipe :autoplay="3000" class="banner-list">
        <van-swipe-item v-for="(image, index) in images" :key="index" class="img">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <!-- <img :src="detaliList.img" alt=""> -->
    </div>
    <div class="content">
      <div class="left">
        <span>¥{{detaliList.sale}}</span>
        <span>{{detaliList.nm}}</span>
        <span>{{detaliList.discount}}</span>
      </div>
      <div class="right">
        <span>最后疯抢</span>
        <br />
        <span>已抢{{detaliList.rushbuy}}</span>
      </div>
    </div>
    <div class="name">{{detaliList.name}}</div>
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" />
    <van-sku v-model="show" :sku="sku" :goods="goods" :goods-id="1" />
  </div>
</template>

<script>
import Ad from "@/components/Ad";

export default {
  data() {
    return {
      detaliList: {},
      images: [],
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
        ],
      ],
      show: false,
      sku: {
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "卡其", // skuValueName：规格值名称
                imgUrl: "", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "", // 用于预览显示的规格类目图片
              },
              {
                id: "2",
                name: "粉色",
                imgUrl: "",
                previewImgUrl: "",
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 10000, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
          {
            id: 2260, // skuId
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 20000, // 价格（单位分）
            stock_num: 220, // 当前 sku 组合对应的库存
          }
        ],
        price: "100.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
        ],
        hide_stock: true, // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        picture: "",
      },
      
    };
  },
  components: {
    Ad,
  },
  created() {
    this.detaliList = this.$route.query;

    let img = this.$route.query.img;
    let img1 = this.$route.query.img1;
    let img2 = this.$route.query.img2;
    let img3 = this.$route.query.img3;
    let img4 = this.$route.query.img4;

    this.images = [img, img1, img2, img3, img4];
    // console.log(this.images)

    this.goods.picture = img;
    // console.log(this.sku.tree[0].v[0].imgUrl)
    this.sku.tree[0].v[0].imgUrl = img;
    this.sku.tree[0].v[0].previewImgUrl = img;

    this.sku.tree[0].v[1].imgUrl = img1;
    this.sku.tree[0].v[1].previewImgUrl = img1;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toCart(){
      this.$router.push('/cart');
    }
  },
};
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  position: relative;
  .cart {
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 86px;
    height: 42px;
    border: 1px solid #e1e1e1;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 40px;
    }
  }
  .addCart {
    width: 252px;
    height: 42px;
    background: #de3d96;
    color: white;
    line-height: 42px;
    text-align: center;
    position: absolute;
    right: 15px;
    bottom: 10px;
    border-radius: 30px;
  }
  .img {
    position: relative;
    .back {
      position: absolute;
      z-index: 112;
      left: 15px;
      top: 15px;
      width: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      color: white;
      background: rgba(0, 0, 0, 0.6);
      font-size: 25px;
    }
    span {
      position: absolute;
      z-index: 112;
      top: 15px;
      right: 15px;
      width: 83px;
      height: 32px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 20px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        margin: 0 5px;
      }
      i {
        font-size: 25px;
      }
    }
    width: 375px;
    height: 375px;
    img {
      width: 375px;
      height: 375px;
    }
  }
  .content {
    width: 100%;
    height: 74px;
    color: white;
    background: url("https://h2a.appsimg.com/b.appsimg.com/upload/momin/2020/08/19/123/1597801521599_750x148_90.png!85.webp");
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    .left {
      span {
        margin-right: 10px;
        font-size: 14px;
        font-weight: 100;
      }
      span:nth-of-type(1) {
        font-size: 20px;
        font-weight: 300;
      }
    }
    .right {
      span {
        font-size: 18px;
      }
      span:nth-of-type(2) {
        font-size: 12px;
      }
    }
  }
  .name {
    height: 60px;
    background: lightcyan;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
}
</style>

