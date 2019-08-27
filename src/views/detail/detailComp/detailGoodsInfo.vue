<!--  -->
<template>
<div class='goods-info' v-if="Object.keys(detailInfo).length!==0">
    <div class="info-desc clearfix">
        <div class="start">

        </div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
        <img v-for="(item,index) in detailInfo.detailImage[0].list" 
        :key="index" :src="item" @load="imgLoad">
    </div>
</div>
</template>

<script>
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    count:0,
    imglenght:0
}
},
props:{
    detailInfo:{
        type:Object,
        default(){
            return {'l':0}
        }
    }
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
    detailInfo(){
        this.imglenght=this.detailInfo.detailImage[0].list.length
    }
},
//方法集合
methods: {
    imgLoad(){
        if(++this.count===this.imglenght){
            this.$emit('imgLoad')
        }
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    
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
    img{
        width:100%;
    }
    .desc{
        padding: 8px 10px;
    }
    .info-key{
        padding: 8px 10px;
    }
</style>