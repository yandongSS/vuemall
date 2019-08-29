<!--  -->
<template>
<div class='detail'>
    <detail-nav-bar class="nav"></detail-nav-bar>
  
    <scroll class="content" ref="scroll">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
    </scroll>
    <bottom-bar @add="addToCarts"></bottom-bar>
</div>
</template>

<script>
import detailNavBar from './detailComp/detailNavBar'
import detailSwiper from './detailComp/detailSwiper'
import detailBaseInfo from './detailComp/detailBaseInfo'
import detailShopInfo from './detailComp/detailShopInfo'
import scroll from 'components/common/BScroll/scroll'
import detailGoodsInfo from './detailComp/detailGoodsInfo'
import bottomBar from './detailComp/bottomBar'

import {getDetailData,Goods,Shop}  from 'network/detail'
export default {
    name:'detail',
//import引入的组件需要注入到对象中才能使用
components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    scroll,
    detailGoodsInfo,
    bottomBar
},
data() {
//这里存放数据
return {
    iid:null,
    topImages:[],
    goods:{},
    shop:{},
    detailInfo:{}
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    imgLoad(){
        this.$refs.scroll.scroll.refresh()
    },
    addToCarts(){
        // console.log('ok')
        const product={}
        product.img=this.topImages[0]
        product.title=this.goods.title
        product.desc=this.goods.desc
        product.price=this.goods.real
        product.iid=this.iid
        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product).then(res=>{
            this.$toast.show(res,1500)
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.iid=this.$route.params.id
    getDetailData(this.iid).then(res=>{
        console.log(res.result);
     this.topImages= res.result.itemInfo.topImages  
     const data=res.result
     this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo)
     this.shop=new Shop(data.shopInfo)
     this.detailInfo=data.detailInfo
    })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
    .detail{
        position: relative;
        height: 100vh;
        z-index: 2;
        background-color: #fff;
    }
    .content{
        height: calc(100% - 44px - 58px);
    }
    .nav{
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
</style>