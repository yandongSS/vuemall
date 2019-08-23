<!--  -->
<template>
<div class='home'>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link"><img :src="item.image" alt=""></a>
        </swiper-item>
    </swiper>
    <recommend-view :recommends="recommends"/>
    <week class="week"/>
    <tab-control :titles="['流行','精选','韩流']" class="tab-c"></tab-control>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>2</li>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import navBar from 'components/common/navBar/navBar'
import {getHomeMultidata} from 'network/home'
import {Swiper,SwiperItem} from 'components/common/swiper'

import recommendView from './childComponent/recommendView'
import week from './childComponent/week'
import tabControl from 'components/common/tabControl/tabControl'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    navBar,
    Swiper,
    SwiperItem,
    recommendView,
    week,
    tabControl
},
data() {
//这里存放数据
return {
    
        banners:[],
        recommends:[]
    
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
       getHomeMultidata().then(res=>{
        console.log(res)
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
    })
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
.home-nav{
    background-color: #ff5777;
    color:white;
    font-size: 18px;
    position:fixed;
    top:0;
    z-index: 99;
    width: 100%;
}
.home{
    padding-top: 44px;
}
.tab-c{
    position: sticky;
    top:40px;
    background-color:white;
}


</style>