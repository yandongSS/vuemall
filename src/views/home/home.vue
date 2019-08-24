<!--  -->
<template>
<div class='home'>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll">
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link"><img :src="item.image" alt=""></a>
        </swiper-item>
    </swiper>
    <recommend-view :recommends="recommends"/>
    <week class="week"/>
    <tab-control :titles="['流行','精选','韩流']" 
                 class="tab-c" 
                 @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[type].list"></goods-list>
    
    </scroll>
    <back-top class="back" @click.native="backClick"></back-top>
 
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import navBar from 'components/common/navBar/navBar'

import {getHomeMultidata,getHomeGoods} from 'network/home'

import {Swiper,SwiperItem} from 'components/common/swiper'

import recommendView from './childComponent/recommendView'
import week from './childComponent/week'
import tabControl from 'components/common/tabControl/tabControl'
import goodsList from 'components/content/goods/goodsList'
import scroll from 'components/common/BScroll/scroll'
import backTop from 'components/content/backTop/backTop'

const types=['pop','new','sell']
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    navBar,
    Swiper,
    SwiperItem,
    recommendView,
    week,
    tabControl,
    goodsList,
    scroll,
    backTop
},
data() {
//这里存放数据
return {
    
        banners:[],
        recommends:[],
        goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]}
        },
        type:'pop'
        
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,800)
        },
        tabClick(index){
            this.type=types[index]
            console.log(this.type)
        },
        _getHomeMultidata(){
            getHomeMultidata().then(res=>{
                // console.log(res)
                this.banners=res.data.banner.list
                this.recommends=res.data.recommend.list
         })
        },
        _getHomeGoods(type){
            const page=this.goods[type].page + 1
            getHomeGoods(type,page).then(res=>{
                console.log(res)
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page+=1
            })
        }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
       this._getHomeMultidata()
       this._getHomeGoods('pop')
       this._getHomeGoods('new')
       this._getHomeGoods('sell')
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
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
/* .back{
  
    
} */
.home-nav{
    background-color: #ff5777;
    color:white;
    font-size: 18px;
    position:fixed;
    left:0;
    right: 0;
    top:0;
    z-index: 99;
    width: 100%;
}
.home{
    /* padding-top: 44px; */
    height: 100vh;
    width: 100%;
    position: relative;
}
.tab-c{
    position: sticky;
    top:40px;
    background-color:white;
}
.content{
    /* height: 400px; */
    overflow: hidden;
    position:absolute;
    top:44px;
    bottom: 49px;
    left:0;
    right: 0;
    /* margin-top: 44px; */
    /* background-color: #ff5777; */

}

</style>