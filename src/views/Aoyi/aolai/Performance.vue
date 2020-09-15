<template>
  <div class="brand-item no-coupon no-pms" @click="goproduct(product)">
    <div class="inner-container">
      <div
        mst-mars="brand|100707763"
        class="brand-item-inner"
        mst-rank="15_1_1"
        mst-tag="115017632_10015531_15_1_1_1599524518913_100707763"
        mars_exposure_sead="special_slide_expose"
        mars_exposure_module="mst|brands|100707763|15_1_1|0|gce10053828"
      >
        <div class="brand-img-box">
          <img
            :src="product.show"
            data-mst-type="img"
            alt="图片"
            class="brand-img"
            :data-src="product.show"
            lazy="loaded"
            style
          />
          <div class="brand-logo">
            <img
              :src="product.brand"
              data-mst-type="img"
              alt="图片"
              class="brand-logo-img"
              :data-src="product.brand"
              lazy="loaded"
              style
            />
          </div>
        </div>
        <div hidden="hidden" class="split-line"></div>
        <div class="brand-info">
          <div>
            <div class="brand-name">
              <!---->
              {{product.name}}
            </div>
            <!---->
          </div>
          <div class="brand-btn-wrap clearfix">
            <div class="brand-coupon">
              <div class="coupon-tip-content">
                <span class="coupon-banner"></span>
                <span class="coupon-price"></span>
              </div>
            </div>
            <div
              class="brand-btn"
              mst-mars="brand|100707763"
              mars-type="brand"
              mst-rank="15_2_1"
              mst-tag="115017632_10015531_15_2_1_1599524518913_100707763"
              mars_exposure_sead="special_slide_expose"
              mars_exposure_module="mst|brands|100707763|15_2_1|0|gce10053828"
            >
              <div class="brand-btn-inner">进入专场</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ["product"],
    methods: {
        goproduct(item){
            this.$router.push({path:'/product',query:item})
        }
    },
};
</script>
<style scoped>
        .J-product-filter .J-mst-panel .mst-panel-container .mst-brand-panel .mst-brand-box .alpha-brand-box .brand-list .brand-item {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-flex;
            -webkit-flex-direction: row;
            -webkit-align-items: center;
            border-top: 0.0263rem solid #e7e7e7;
            width: 100%;
            height: 90.6933px;
            box-sizing: border-box
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-brand-panel .mst-brand-box .alpha-brand-box .brand-list .brand-item:first-child {
            border-top: none;
            height: 90.1867px
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-brand-panel .mst-brand-box .alpha-brand-box .brand-list .select-icon {
            border-radius: 2.0267px;
            width: 18.24px;
            height: 18.24px;
            box-sizing: border-box;
            background: url(//a.vpimg4.com/upload/upimg2/u/ef4bbfb9f5d56e7a217afd61cff52ea3.png) no-repeat;
            background-size: 100% 100%
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-brand-panel .mst-brand-box .alpha-brand-box .brand-list .brand-logo-box {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-flex;
            -webkit-justify-content: center;
            -webkit-align-items: center;
            border: 0.0263rem solid #e7e7e7;
            border-radius: 2.0267px;
            margin-left: 14.6933px;
            width: 60.8px;
            height: 60.8px
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-brand-panel .mst-brand-box .alpha-brand-box .brand-list .brand-logo-box .logo {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-brand-panel .mst-brand-box .alpha-brand-box .brand-list .brand-name {
            margin-left: 11.1467px;
            height: 20.2667px;
            font-size: 14.1867px;
            color: #222;
            font-family: PingFangSC-Regular
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-brand-panel .mst-brand-box .alpha-name {
            position: relative;
            width: 100%;
            height: 20.2667px;
            padding-left: 14.1867px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-flex;
            -webkit-align-items: center;
            font-size: 12.16px;
            background: #f3f4f5
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-brand-panel .mst-brand-box .brand-not-show {
            display: none!important
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box {
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 65.36px;
            background: #fff;
            overflow-y: scroll;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .price-range-box {
            width: 100%;
            height: 107.4133px
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .price-range-name {
            position: relative;
            margin: 19.2533px 0 0 17.2267px;
            height: 16.2133px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-flex;
            -webkit-align-items: center;
            color: #222;
            font-size: 14.1867px;
            font-family: PingFangSC-Medium
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .price-range {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-flex;
            -webkit-flex-direction: row;
            -webkit-align-items: center;
            margin: 14.1867px 0 0 17.2267px;
            height: 37.4933px
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .price-range input {
            width: 106.4px;
            height: 100%;
            border: none;
            outline: none;
            border-radius: 1.0133px;
            text-align: center;
            background: #f5f5f5
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .price-range input::-webkit-input-placeholder {
            vertical-align: middle;
            padding-top: 2.0267px;
            font-size: 14.1867px;
            line-height: 17.7333px;
            color: #ccc;
            font-family: PingFangSC-Regular
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .price-range input:focus::-webkit-input-placeholder {
            color: #222;
            color: transparent
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .price-range .range-to {
            margin: auto 3.04px;
            width: 9.6267px;
            height: 1.0133px;
            background: #222
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item {
            width: 100%;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-props {
            border-top: 0.0263rem solid #e7e7e7;
            width: 100%
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-flex;
            -webkit-align-items: center;
            margin: 20.7733px 17.2267px 10.1333px;
            width: 274.6133px;
            height: 16.2133px
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info span {
            position: absolute;
            color: #222;
            font-size: 14.1867px;
            font-family: PingFangSC-Medium;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%)
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info .more-or-retract-category {
            position: absolute;
            right: 0;
            color: #585c64;
            font-size: 12.16px;
            font-family: PingFangSC-Regular;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%)
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info .more-category,.J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info .retract-category {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-flex;
            -webkit-flex-direction: row;
            -webkit-align-items: center
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info .more-category:before {
            content: "\66F4\591A"
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info .retract-category:before {
            content: "\6536\8D77"
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info .more-category:after,.J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info .retract-category:after {
            content: "";
            display: block;
            margin-left: 3.5467px;
            margin-top: -1.52px;
            width: 10.1333px;
            height: 7.0933px;
            background: url(//a.vpimg4.com/upload/upimg2/u/33fd2506b4f3940f8c6948c33b567bfb.png) no-repeat;
            background-size: 100% 100%
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info .retract-category:after {
            transform: scaleY(-1);
            -webkit-transform: scaleY(-1)
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-info .more-category:after {
            margin-top: 2.5333px
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-list {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-line-pack: distribute;
            align-content: space-around;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            display: -webkit-flex;
            -webkit-align-content: space-around;
            -webkit-flex-wrap: wrap;
            margin: 0 14.6933px 10.1333px
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-list .category-item {
            position: relative;
            border-radius: 2.0267px;
            margin: 4.0533px 2.5333px;
            width: 88.16px;
            height: 30.4px;
            line-height: 30.4px;
            box-sizing: border-box
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-list .category-item span {
            position: absolute;
            width: 100%;
            padding: 0 5.0667px;
            color: #222;
            font-size: 12.16px;
            font-family: PingFangSC-Regular;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            box-sizing: border-box
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-list .category-item .border {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 200%;
            transform: scale(.5);
            transform-origin: 0 0;
            -webkit-transform: scale(.5);
            -webkit-transform-origin: 0 0;
            box-sizing: border-box;
            border-radius: 4.0533px;
            border: 2.0267px solid #ccc
        }

        .J-product-filter .J-mst-panel .mst-panel-container .mst-filter-panel .mst-filter-box .props-item .category-list .category-item .check-icon {
            position: absolute;
            width: 7.3467px;
            height: 5.5733px;
            top: 21.584px;
            right: 1.52px;
            background: url(//a.vpimg4.com/upload/upimg2/u/b01901aa9a5e75895f815977cb4ca101.png) no-repeat;
            background-size: 100% 100%
        }

        .J-product-filter .J-mst-panel .mst-panel-content {
            width: 309.0667px;
            height: 100%;
            background: #fff
        }

        .J-product-filter .J-mst-panel .mst-close-container {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
            -webkit-order: -1;
            width: 27.8667px;
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-flex;
            -webkit-align-items: center
        }

        .J-product-filter .J-mst-panel .mst-close-layer {
            width: 100%;
            height: 50.6667px;
            border-radius: 7.6px 0 0 7.6px;
            background: #fff
        }

        .J-product-filter .J-mst-panel .mst-close-layer span {
            display: block;
            margin: 9.12px 6.5867px 9.12px 7.0933px;
            width: 14.1867px;
            height: 32.4267px;
            line-height: 16.2133px;
            font-size: 14.1867px;
            color: #222;
            text-align: center;
            font-family: PingFangSC-Regular
        }

        .J-product-filter .J-mst-panel .onselect-brand .select-icon {
            background: url(//a.vpimg4.com/upload/upimg2/u/1675baabaa45d09a5a850f69771e4a06.png) no-repeat!important;
            background-size: 100% 100%!important
        }

        .J-product-filter .J-mst-panel .disable-click {
            opacity: .4;
            color: #222
        }

        .J-product-filter .J-mst-panel .disable-show {
            display: none
        }

        .J-product-filter .J-mst-panel .cancel-height {
            height: 0!important;
            position: relative!important
        }

        .J-product-filter .close-panel {
            width: 0
        }

        .J-product-filter .close-panel .mst-layer {
            display: none!important
        }

        .J-product-filter .close-panel .mst-panel-container {
            transform: translateX(100%) translateZ(0);
            -webkit-transform: translateX(100%) translateZ(0)
        }

        .J-product-filter .show-brand-panel .mst-brand-panel,.J-product-filter .show-filter-panel .mst-filter-panel {
            display: block!important
        }

        .J-product-filter .other-filter-tab-bar .tab-item {
            position: relative;
            display: inline-block;
            margin: 8.1067px 8.1067px 8.1067px 0;
            padding: 7.0933px 12.16px;
            border-radius: 2.0267px;
            height: 26.3467px;
            text-align: center;
            font-size: 12.16px;
            line-height: 12.16px;
            font-family: PingFangSC-Regular;
            box-sizing: border-box
        }

        .J-product-filter .other-filter.light-style .tab-item {
            color: #222;
            background: #fff;
            border: 0.0263rem solid #c6c6c6
        }

        .J-product-filter .other-filter.light-style .first-page-null p {
            color: #222
        }

        .J-product-filter .other-filter.dark-style .tab-item {
            color: #fff;
            border: 1.0133px solid hsla(0,0%,100%,.6)
        }

        .J-product-filter .other-filter.dark-style .first-page-null p {
            color: #fff
        }

        .J-product-filter .light-style .on-selected-item {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 0;
            height: 0;
            border-radius: 2.0267px 0 0 0;
            border-style: solid;
            border-width: 0 0 7.0933px 7.0933px
        }

        .J-product-filter .mst-product-filter-box .mst-product-filter-inner-box {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%
        }

        .J-product-filter .regular-filter {
            height: 40.0267px
        }

        .J-product-filter .regular-filter .mst-product-filter-inner-box {
            height: 39.52px
        }

        .J-product-filter .other-filter,.J-product-filter .other-filter .mst-product-filter-inner-box {
            height: 42.56px
        }

        .J-product-filter .mst-product-filter-inner-box.float-top {
            position: fixed!important;
            z-index: 300
        }

        .J-product-filter .mst-product-filter-box.navigation-bar-zhanwei {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: -1
        }

        .J-product-filter .mst-product-filter-box.first-page-null {
            width: 356.6933px;
            margin: auto;
            font-size: 16.2133px;
            font-family: PingFangSC-Regular;
            text-align: center
        }

        .J-product-filter .mst-product-filter-box.first-page-null div {
            width: 40.28px;
            height: 40.28px;
            margin: 40.5333px auto;
            background-repeat: no-repeat;
            background-size: 100% 100%
        }

        .tab-container-child-content .J-product-filter .first-page-null {
            width: 329.3333px
        }

        .tab-container-child-content .J-product-filter .float-top {
            margin-left: 50.6667px;
            width: 329.3333px
        }

        .popup-wrapper.shade {
            background: rgba(0,0,0,.5)
        }

        .brand-item-inner{
            position: relative;
            margin-top: 11.4px;
        }
        .mst-brand,.mst-purchase{
            background-color: rgb(245, 236, 219);
        }
        .brand-item,.no-coupon,.no-pms{
            width: 174.8px;
            float: left;
            margin-left: 9.5px;
            position: relative;
        }
        .brand-img{
            width: 174.8px;
        }
        .brand-name,.brand-name-single{
          margin-top: 18px;
            font-size: 14px;
            font-family: PingFangSC-Medium;
            color: #222222;
            text-align: center;
            padding-top: 15.2px;
            height: 53.2px;
            /* line-height: 38px; */
        }
        .brand-info{
            background-color: white;
        }
        .brand-btn-inner{
            color: #fff;
            background: #9D6F39;
            text-align: center;
            line-height: 30.4px;
            font-family: PingFangSC-Regular;
            font-size: 13.1733px;
            width: 114px;
            margin: 0 auto;
        }
        .brand-logo-img{
            width: 76px;
            height: 38px;
            position: absolute;
            left: 50%;
            margin-left: -38px;
            top: 136.8px;
            border: 0.0263rem solid #dadada;
            background-color: #fafafa;

        }
        .image-src{
            width: 375px;
        }
        .brand-list::after{
            content: '';
            display: block;
            clear: both;
        }
        .clearfix{
            content: '';
            display: block;
            clear: both;
        }
        html,h1,h2,ul,li,ol,body{
            margin: 0;
            padding: 0;
        }
        ul,ol,li{
          list-style: none;
        }
</style>