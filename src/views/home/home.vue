<!--  -->
<template>
<div class='home'>
  
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','精选','韩流']" 
                 class="tab-control tab-c" 
                 @tabClick="tabClick" 
                 ref="tabControl1"
                 v-show="isTabcontrolFixed"></tab-control>
    <scroll class="content" ref="scroll" 
                            :probe-type="3" 
                            :pull-up-load="true" 
                            @scroll="scrollClick"
                            @pullingUp="loadMore">
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link"><img :src="item.image" alt="" @load="swiperImgLoad"></a>
        </swiper-item>
    </swiper>
    <recommend-view :recommends="recommends"/>
    <week class="week"/>
    <tab-control :titles="['流行','精选','韩流']" 
                 class="tab-c" 
                 @tabClick="tabClick" 
                 ref="tabControl"
                 ></tab-control>
    <goods-list :goods="goods[type].list"></goods-list>
    
    </scroll>
    <back-top class="back" @click.native="backClick" v-show="isShow"></back-top>

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
import { timingSafeEqual } from 'crypto';

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
        type:'pop',
        isShow:false,
        swiperIsLoad:false,
        tabOffsetTop:0,
        isTabcontrolFixed:false,
        saveY:0
        
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
        swiperImgLoad(){
            
            if(!this.swiperIsLoad){
                // console.log('-----')
                // console.log(this.$refs.tabControl.$el.offsetTop)
                this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop
                this.swiperIsLoad=true
            }
        },
        scrollClick(position){
            // console.log(position)
            if((-position.y)>800){
                this.isShow=true
            }else{
                this.isShow=false
            }
            this.isTabcontrolFixed=(-position.y)>this.tabOffsetTop
        },
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,700)
        },
        tabClick(index){
            this.type=types[index]
            console.log(this.type)
            this.$refs.tabControl.current=index
            this.$refs.tabControl1.current=index
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
                //上拉加载更多
                this.$refs.scroll.finishPullUp()
            })
        },
        loadMore(){
            this._getHomeGoods(this.type)
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
        this.$bus.$on('imgLoad',()=>{
           console.log("总线OK")
        this.$refs.scroll.scroll.refresh()
       })
},
 //生命周期 - 销毁完成
activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0);
    //console.log(this.saveY)
    this.$refs.scroll.scroll.refresh()
}, 
deactivated(){
    this.saveY=this.$refs.scroll.getScrollY()
    //console.log(this.saveY)
},
}
</script>
<style scoped>
/* .back{
  
    
} */
.home-nav{
    background-color: #ff5777;
    color:white;
    font-size: 18px;
    /* position:fixed;
    left:0;
    right: 0;
    top:0;
    z-index: 99;
    width: 100%; */
}
.home{
    /* padding-top: 44px; */
    height: 100vh;
    width: 100%;
    position: relative;
}
.tab-control{
    position: relative;
    z-index: 99;
}
/* .tab-c{
    position: sticky;
    top:40px;
    background-color:white;
} */
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
/* .fixed{
    position:fixed;
    top:44px;
    left:0;
    right: 0;
} */

</style>