<!--  -->
<template>
<div class='shop'>
    <div class="shop-logo">
        <img :src="shop.logo" alt=""><span class="name">{{shop.name}}</span>
    </div>
    <div class="infos">
    <div class="sells">
        <p class="b">{{shop.sells|sellCountFilter}}</p>
        <p class="s">总销量</p>
    </div>
    <div class="all">
        <p class="b">{{shop.goodsCount}}</p>
        <p class="s">全部宝贝</p>
    </div>
    <div class="shop-score">
        <ul>
            <li v-for="item in shop.score" :key="item.score">
                <span class="score-name">{{item.name}}</span>
                <span class="green" :class="{'score-better':item.isBetter}">{{item.score}}</span>
                <span class="bgreen" :class="{'better':item.isBetter}">{{item.isBetter?'高':'低'}}</span>
            </li>
        </ul> 
    </div>
    </div>
    <div class="goshop"><a :href="shop.shopURL"><span> 进店逛逛</span></a></div>
    
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
    shop:{
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
filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
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
.shop{
    margin: 20px 0;
    box-shadow: 0 4px 7px 5px #ccc;
}
    .shop-logo img{
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    .shop-logo{
        padding: 20px;
        margin: 10px 0;
    }
    .s{
        font-size: 12px;
    }
    .b{
        font-size: 15px;
        font-weight: bold;
    }
    .name{
        margin-left: 20px;
        color: black;
        font-size: 14px;
        font-weight: bold;
    }
    .infos{
        display: flex;
        justify-content:space-around;
        
    }
    .sells,.all{
        color:black;
        text-align: center;
        /* font-size: 14px; */
        /* font-weight: bold; */
        
    }
    .sells{
        margin-left: 15px;
    }
    .all{
        border-right: 1px solid #ccc;
        padding:0 20px;
    }
    .score-name{
        margin-right: 10px;
        color: black;
    }
    li{
        margin-bottom: 5px;
    }
    .green{
        color: green;
        width: 22px;
        margin-right: 10px;
        display: inline-block;
    }
    .bgreen{
        background-color: green;
        color: white;  
    }
    .score-better{
        color:red;
        width: 22px;
        margin-right: 10px;
        display: inline-block;
    }
    .better{
        color: white;
        background-color: red;
    }
    .goshop span{
        display: block;
        background-color: #bcd7f1;
        text-align: center;
        line-height: 20px;
        border-radius: 8px;
        width: 100px;
        height: 20px;
        margin: 0 auto;
    }
    a{
        display: block;
        width:100%;
    }
    .goshop{
        margin: 10px 0;
        border-bottom:2px solid #ddd;
        padding-bottom: 10px;
    }
</style>