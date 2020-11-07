export const initialState = {
    cart: [],
};
//selector
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

//reducer    
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        default:
            return state;
    }
}
export default reducer;