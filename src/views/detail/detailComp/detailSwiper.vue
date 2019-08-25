<!--  -->
<template>
<div class='detail-swiper'>
    <swiper class="swipers">
        <swiper-item v-for="(item,index) in topImages" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Swiper,
    SwiperItem
},
data() {
//这里存放数据
return {

}
},
props:{
    topImages:{
        type:Array,
        default(){
            return []
        }
    }
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {},
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
 .swipers{
     height: 400px;
 }
</style>