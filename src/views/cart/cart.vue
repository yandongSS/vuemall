<!--  -->
<template>
<div class='cart'>
   
   <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
   </nav-bar>
   <cart-list></cart-list>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import navBar from 'components/common/navBar/navBar'
import cartList from './cartComp/cartList'

import {mapGetters} from "vuex"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
   navBar,
   cartList
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
   // cartLength(){
      // return this.$store.state.cartList.length
      ...mapGetters({
         length:'cartLength'
      })
   // }
},
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
   .nav-bar{
      background-color: #ff5777;
      color: #fff;
      font-size: 18px;
      position: fixed;
      right: 0;
      left: 0;
   }
   .cart{
      width: 100%;
   }
   #tab-bar{
      width: 100%;
   }
</style>