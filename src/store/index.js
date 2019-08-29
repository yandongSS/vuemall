import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'


Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        cartList:[]
    },
    getters,
    mutations:{
     addCounter(state,payload){
        payload.count++
     },
     addToCart(state,payload){
        state.cartList.push(payload)
     }
    },
    actions:{
        addCart(context,payload){
            return new Promise((resolve,reject) => {
                // state.cartList.push(payload)
            let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid)
            if(oldProduct){
                // oldProduct.count+=1
                context.commit('addCounter',oldProduct)
                resolve('当前商品数量+1')
            }else{
                payload.count=1
                // context.cartList.push(payload)
                context.commit('addToCart',payload)
                resolve('添加了新的商品')
            }
            })
            
        }
    }
})
export default store