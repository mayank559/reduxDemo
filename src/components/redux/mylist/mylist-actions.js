import * as actionTypes from './mylist-type'
export const buyPlayer=(playerId)=>{
    return{
        type:actionTypes.BUY_PLAYER,
        payload:{
            id:playerId
        }
    }
}
export const removePlayer=(playerId)=>{
    return{
        type:actionTypes.REMOVE_PLAYER,
        payload:{
            id:playerId
        }
    }
}