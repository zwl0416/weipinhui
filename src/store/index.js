import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 首页
    //城市
    showCity : '太原',
    //首页今日热卖的数据
    todaySaleList : [],
    //展示ad
    showAd : true,
    //展示购物车
    showCart : true,
    //展示回到顶部
    showBack : false,
    //展示Bar
    showBar : false,
    //列表页
    dataObj : {},
    //分类列表数据
    list :[],

    // 最后疯抢
    dataList:[],
    showop:true,

    city:{
      name:'北京',
      code:1
    },
    // 显示转发
    showMenu:false,

    
    showPrice: false,
    showDiscount:false,
    minPrice:"0",
    maxPrice:"9999999999",
    mode:["woman","man"],
    size:["L","XL","XXL","XXXL"],
    showChoose:false
    
  },
  mutations: {
    // 首页
    setCity(state,status){
      state.showCity = status;
    },
    setTodaySaleList(state,status){
      state.todaySaleList = status;
    },
    setShowAd(state,status){
      state.showAd = status;
    },
    setShowCart(state,status){
      state.showCart = status;
    },
    setShowBack(state,status){
      state.showBack = status;
    },
    setShowBar(state,status){
      state.showBar = status;
    },
    setDataList(state,status){
      state.dataObj = status;
    },
    setList(state,status){
      state.list = status;
    },

    // 最后疯抢
    setDatalist(state,data){
      state.dataList=data;
    },
    showoption(state,status){
      state.showop=status;
    },


    // 修改城市名字
    setCityName(state,status){
      state.city = status;
    },
    setMenu(state,status){
      state.showMenu = status;
    },

    setPrice(state, status) {
      state.showPrice = status;
    },
    setDiscount(state, status) {
      state.showDiscount = status;
    },
    setMinPrice(state, status) {
      state.minPrice = status;
    },
    setMaxPrice(state, status) {
      state.maxPrice = status;
    },
    setMode(state, status) {
      state.mode = status;
    },
    setSize(state, status) {
      state.size = status;
    },
    setChoose(state, status){
      state.showChoose = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
