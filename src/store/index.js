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
            // state.cartList.push(payload)
            let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid)
            if(oldProduct){
                // oldProduct.count+=1
                context.commit('addCounter',oldProduct)
            }else{
                payload.count=1
                // context.cartList.push(payload)
                context.commit('addToCart',payload)
            }
        }
    }
})
export default store