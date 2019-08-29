<!--  -->
<template>
<div class="goods-item" @click="itemClick">
    <!-- <a :href="goodsItem.link"> -->
        <img v-lazy="goodsItem.show.img" alt="mm" @load="imgLoad">
        <div class="detail">
            <p class="titles" :title="goodsItem.title">{{goodsItem.title}}</p>
            <div class="price">
                <span class="pred">￥:{{goodsItem.price}}</span>
                <span class="del">{{goodsItem.orgPrice}}</span>
                <span><span class="red">❤</span>{{goodsItem.cfav}}</span>
            </div>
        </div>
    <!-- </a> -->
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
    goodsItem:{
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
methods: {
    imgLoad(){
        this.$bus.$emit('imgLoad')
    },
    itemClick(){
        console.log('商品item被点击')
        this.$router.push('/detail/'+ this.goodsItem.iid)
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
    .goods-item{
        padding: 3px;
        margin-bottom: 4px;
        
    }
    /* a{
        display: block;
    } */
    .pred{
        color:#ff5777;
        font-size: 14px;
        font-weight: bold;
    }
    .red{
        color: red;
    }
    .del{
        text-decoration: line-through;
        font-size:10px;
    }
    .detail{
        color:#444;
        margin-top: 5px;
        }
    .titles{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        text-align: center;
        font-weight: 600;
    }
    img{
        width: 100%;
        border-radius: 3px;
        /* height: 90%; */
        min-height: 258px;
        box-shadow: 0 2px 2px 2px #ccc;
    }
    .price{
        display: flex;
        justify-content: space-around;
    }
</style>