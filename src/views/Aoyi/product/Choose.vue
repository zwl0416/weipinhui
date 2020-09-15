<template>
    <div>
        <div class="choose-head">
            <span @click="showChoose2()">取消</span>
            <span>筛选</span>
        </div>
        <div class="choose-price">
            <p>价格区间(元)</p>
            <div class="qujian">
                <input type="text" placeholder="最低价" ref="minPrice"> - <input type="text" placeholder="最高价" ref="maxPrice">
            </div>
            <div class="pinpai">
                <p>品牌</p>
                <div class="pinpai-brand">
                    <span>Dickes</span>
                </div>
            </div>
            <div class="type">
                <p>品类</p>
                <div class="type-brand">
                    <span @click="choosecolor1($event)" value="man">男士</span>
                    <span @click="choosecolor1($event)" value="woman">女士</span>
                </div>
            </div>
            <div class="size">
                <p>品类</p>
                <div class="size-brand">
                    <span @click="choosecolor2($event)" value="L">L</span>
                    <span @click="choosecolor2($event)" value="XL">XL</span>
                    <span @click="choosecolor2($event)" value="XXL">XXL</span>
                    <span @click="choosecolor2($event)" value="XXXL">XXXL</span>
                </div>
            </div>
        </div>
        <div class="choose-sure">
            <span @click="sureChoose()">确定</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            mode:[],
            size:[]
        }
    },
    methods: {
        showChoose2(){
            this.$router.go(-1)
        },
        choosecolor1($event){
            if(this.$store.state.showChoose){
                this.$store.commit('setChoose',false)
                $event.srcElement.style.backgroundColor = "white"
                let a = $event.target.getAttribute('value')
                for(key in this.mode){
                    if(this.mode[key] == a){
                        this.mode.splice(key,1)
                    }
                }
            }else{
                this.$store.commit('setChoose',true)
                $event.srcElement.style.backgroundColor = "hotpink"
                let a = $event.target.getAttribute('value')
                this.mode.push(a)
            }
        },
        choosecolor2($event){
            if(this.$store.state.showChoose){
                this.$store.commit('setChoose',false)
                $event.srcElement.style.backgroundColor = "white"
                let a = $event.target.getAttribute('value')
                for(key in this.size){
                    if(this.size[key] == a){
                        this.size.splice(key,1)
                    }
                }
            }else{
                this.$store.commit('setChoose',true)
                $event.srcElement.style.backgroundColor = "hotpink"
                let a = $event.target.getAttribute('value')
                this.size.push(a)
            }
        },
        sureChoose(){
            if(this.$refs.minPrice.value){
                this.$store.commit('setMinPrice',this.$refs.minPrice.value)
            }
            if(this.$refs.maxPrice.value){
                this.$store.commit('setMaxPrice',this.$refs.maxPrice.value)
            }
            if(this.mode <= []){
                this.$store.commit('setMode',["man","woman"])
            }else{
                this.$store.commit('setMode',this.mode)
            }
            if(this.size <= []){
                this.$store.commit('setSize',["L","XL","XXL","XXXL"])
            }else{
                this.$store.commit('setSize',this.size)
            }
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss" scoped>
    .choose-head{
        position: relative;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-bottom: .02667rem solid #e7e7e7;
        background-color: #fff;
        span:nth-of-type(1){
            position: absolute;
            top: 0;
            left: 20px;
            font-size: 14px;
            color: #222222;
        }
        span:nth-of-type(2){
            font-size: 18px;
            width: 45px;
            color: #262626;
        }
    }
    .choose-price{
        padding-left: 15px;
        padding-right: 15px;
        p{
            color: black;
            font-size: 14px;
            font-weight: 600;
            line-height: 45px;
        }
        .qujian{
            height: 36px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 15px;
            border-bottom: .02667rem solid #e7e7e7;
            background-color: #fff;
            input{
                width: 160px;
                height: 34px;
                border: none;
                outline: none;
                text-align: center;
                background: #f6f6f6;
                font-size: 14px;
            }
        }
        .pinpai{
            height: 36px;
            padding-bottom: 15px;
            border-bottom: .02667rem solid #e7e7e7;
            background-color: #fff;
            height: 76px;
            .pinpai-brand{
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                span{
                    display: block;
                    font-size: 12px;
                    color: black;
                    width: 104px;
                    height: 30px;
                    line-height: 30px;
                    border: .02667rem solid #c6c6c6;
                    text-align: center;
                    border-radius: 3px;
                }
            }
        }
        .type{
            height: 36px;
            padding-bottom: 15px;
            border-bottom: .02667rem solid #e7e7e7;
            background-color: #fff;
            height: 76px;
            .type-brand{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                span{
                    display: block;
                    font-size: 12px;
                    color: black;
                    width: 104px;
                    height: 30px;
                    line-height: 30px;
                    border: .02667rem solid #c6c6c6;
                    text-align: center;
                    border-radius: 3px;
                    margin-right: 8px;
                }
            }
        }
        .size{
            height: 36px;
            padding-bottom: 15px;
            border-bottom: .02667rem solid #e7e7e7;
            background-color: #fff;
            height: 125px;
            .size-brand{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                span{
                    margin-top: 8px;
                    display: block;
                    font-size: 12px;
                    color: black;
                    width: 104px;
                    height: 30px;
                    line-height: 30px;
                    border: .02667rem solid #c6c6c6;
                    text-align: center;
                    border-radius: 3px;
                    margin-right: 8px;
                }
            }
        }
    }
    .choose-sure{
        padding-top: 15px;
        padding-bottom: 15px;
        border-top: .02667rem solid #e7e7e7;
        text-align: center;
        span{
            margin: 0 auto;
            display: block;
            height: 44px;
            line-height: 44px;
            width: 120px;
            color: white;
            background: #DE3D69;
            font-size: 16px;
        }
    }
</style>