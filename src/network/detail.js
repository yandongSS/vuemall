import {request} from './request'

export function getDetailData(iid){
   return request({
    url:'/detail',
    params:{
        iid
    }
   })
}
export class Goods{
    constructor(itemInfo,columns,shopInfo){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns=columns
        this.ser=shopInfo.services
        
    }
}
export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.sells=shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCount=shopInfo.cGoods
        this.shopURL=shopInfo.shopUrl
    }
}