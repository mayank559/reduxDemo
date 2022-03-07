import * as actionTypes from './mylist-type'
const initial_state={
    players:[{id:1,price:10},
        {id:2,price:20},
        {id:3,price:30},
        {id:4,price:40}] //{id,price}
}
const MylistReducer=(state=initial_state,action)=>
{
switch(action.type){
    case actionTypes.BUY_PLAYER:
        const item=state.players.find((player)=>player.id===action.payload.id)
        const Price=item.price
        
        return{
            ...state,
               Price
        }
        
        
    case actionTypes.REMOVE_PLAYER:
        const item_to_remove=state.players.find((player)=>player.id===action.payload.id)
        const Price2=item_to_remove.price
        
        return{
            ...state,
               Price2
        }

    default:
     return state;
}

};

 export default MylistReducer;