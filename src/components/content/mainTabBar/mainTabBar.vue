<!--  -->
<template>
<div class=''>
     <tabbar>
        <tabbar-item path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/img/icon/home2-jurassic.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/icon/home2-jurassic (1).svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category" activeColor="red">
         <img slot="item-icon" src="~assets/img/icon/apply2-jurassic1.svg" alt="">
         <img slot="item-icon-active" src="~assets/img/icon/apply2-jurassic.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart" activeColor="red">
         <img slot="item-icon" src="~assets/img/icon/label-jurassic.svg" alt="">
         <img slot="item-icon-active" src="~assets/img/icon/label-jurassic (1).svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" activeColor="red">
         <img slot="item-icon" src="~assets/img/icon/user2-jurassic.svg" alt="">
         <img slot="item-icon-active" src="~assets/img/icon/user2-jurassic (1).svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import tabbar from 'components/common/tabbar'
import tabbarItem from 'components/common/tabbarItem'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    tabbar,
    tabbarItem
},
data() {
//这里存放数据
return {

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
</style>