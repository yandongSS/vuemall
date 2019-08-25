<!--  -->
<template>
<div class=''>
    <nav-bar >
        <div slot="left" class="back" @click="back">
            <img src="~assets/img/icon/back1.png" alt="">
        </div>
        <div slot="center" class="title">
            <div v-for="(item,index) in titles" :key="index"
                 :class="{active:index===currentIndex}"
                 @click="activeClick(index)">{{item}}</div>
    </div>
    </nav-bar>
</div>
</template>

<script>
import navBar from 'components/common/navBar/navBar'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    navBar
},
data() {
//这里存放数据
return {
    titles:['商品','详情','评论','推荐'],
    currentIndex:0
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    activeClick(index){
        this.currentIndex=index
    },
    back(){
        this.$router.back()
    }
},
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
    .title{
        display: flex;
        justify-content: space-evenly;
       font-size: 14px;
    }
    /* .center{
        width:22%;
    } */
    .active{
        color: #ff5777;
        border-bottom:2px solid #ff5777; 
        padding: 0 7px;
    }
    .back img{
        width: 45%;
    }
</style>