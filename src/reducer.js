export const initialState = {
    basket: [{
        id: "asadfdv",
        title: "Samsung LC4 Fitness Band",
        price: 1800,
        rating: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
    }],
    user: null
}
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

//reducer
function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id)
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn("Can't remove item.");
            }

            return { ...state, basket: newBasket }
            break;
        default:
            return state;
    }
}

export default reducer;