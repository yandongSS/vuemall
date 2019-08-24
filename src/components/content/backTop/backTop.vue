<!--  -->
<template>
<div class='back'>
    <img src="~assets/img/icon/backtop.png" alt="">
</div>
</template>

<script>
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

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
.back{
    border: 1px solid #ff5777;
    z-index: 999;
    position: fixed;
    height: 40px;
    width: 40px;
    right: 15px;
    bottom: 70px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5)
}
img{
    width: 100%;
    border-radius: 50%;
}
</style>