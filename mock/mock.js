const classify = require('./classify.json')
const shopAd = require('./shopAd.json')
const todaySale = require('./todaySale.json')
const list = require('./list.json')


const con1=require("./con1.json");
const datalist=require("./datalist.json");
const kinds=require("./kinds.json");

const lister = require('./lister.json')
const data = require('./data.json')

const rowList = require('./rowList.json');
const listLeft = require('./listLeft.json');
const listTop = require('./listTop.json');
const leftContent = require('./leftContent.json');

module.exports=()=>{
  return {
    "classifylist":classify.classifylist,
    "shopAdList" : shopAd.shopAdList,
    "todaySaleList" : todaySale.todaySaleList,
    "dataList" : list.dataList,
    "barList" : list.barList,
    "hotCities" : list.hotCities,
    "cities" : list.cities,

    // 最后疯抢
    "con1":con1.con1,
    "datalists":datalist.datalist,
    "kinds":kinds.kinds,
    "branks":kinds.branks,
    "lists":kinds.lists,

    "lister":lister.data,
    "expectlist":data.expectlist,

    "rowList" : rowList.firstProducts,
    "listLeft" : listLeft.listLeft,
    "listTop" : listTop.data,
    "leftContent" : leftContent.leftContent
  }
}