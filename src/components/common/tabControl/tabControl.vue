<!--  -->
<template>
<div class=''>
    <div class="tab-c" v-for="(item,index) in titles" :key="index">
        <span @click="handel(index)" :class="{active:index===current}" class="tab-item">{{item}}</span></div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    current:0
};
},
props:{
    titles:{
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
methods: {
    handel(index){
        this.current=index
        this.$emit('tabClick',index)
    }
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
.tab-c{
    /* margin-top: 8px; */
    display: flex;
    justify-content:space-evenly;
    background-color: #fff;
}
.tab-item{
    flex: 1;
    display: inline-block;
    height: 30px;
    width: 45px;
    font: 14px bold;
    line-height: 30px;
    text-align: center;
}
.active{
    color:#ff5777;
    border-bottom: 3px solid #ff5777;
}
</style>