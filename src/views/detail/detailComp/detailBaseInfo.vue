<!--  -->
<template>
<div class='base' v-if="Object.keys(goods).length!==0">
   <div class="title">{{goods.title}}</div> 
   <div class="price">
       <span class="newprice">{{goods.newPrice}}</span>
       <span class="oldprice">{{goods.oldPrice}}</span>
       <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
   </div>
   <div class="bo-info">
       <span>{{goods.columns[0]}}</span>
       <span>{{goods.columns[1]}}</span>
       <span>{{goods.ser[0].name}}</span>
    </div>
    <div class="service">
        <div class="left"> <img :src="goods.ser[1].icon" alt=""> <span>{{goods.ser[1].name}}</span></div>
        <div class="right"> <img :src="goods.ser[2].icon" alt=""> <span>{{goods.ser[2].name}}</span></div>
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

}
},
props:{
    goods:{
        type:Object,
        default(){
            return {}
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
    .title{
        font-size: 14px;
        font-weight: bold;
        color: #444;
        padding: 5px 8px;
    }
    .price{
        margin-top: 8px;
        /* border-bottom: 1px solid #ddd; */
        padding-bottom: 10px;
    }
    .newprice{
        color: #ff5777;
        font-size: 20px;
        padding: 5px 8px;
    }
    .oldprice{
        text-decoration: line-through;
    }
    .discount{
        display: inline-block;
        background-color: #ff5777;
        border-radius: 7px;
        color: white;
        padding: 0 5px;
        /* width: 40px; */
        height: 15px;
        text-align: center;
        font-size: 10px;
        line-height: 15px;
        position: relative;
        bottom: 8px;
        left: 10px;
    }
    .bo-info{
        display: flex;
        justify-content: space-between;
        padding: 5px 8px;
        border-bottom: 1px solid #ddd;
    }
    .service{
        padding: 0px 8px;
        margin-top: 8px;
        display: flex;
        justify-content:space-between;
    }
    .service img{
        width: 12px;
        height: 12px;
    }
</style>