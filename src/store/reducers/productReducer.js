




const initialState = {
  products: [],
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
      case "INCREASE_QUANTITY":
        return{
          ...state,
          products: state.products.map((item)=> item.id === action.payload ? {...item , quantity: item.quantity ? item.quantity + 1 : 2 , totalPrice:item.quantity ? item.price * (item.quantity + 1) : item.price * 2} : item)
        };

        case "DECREASE_QUANTITY":
          return{
            ...state,
            products: state.products.map((item)=> item.id === action.payload ? {...item , quantity: item.quantity ? item.quantity - 1 : 1 , totalPrice:item.quantity ? item.price * (item.quantity - 1) : item.price * 1} : item)
          };


          case "REMOVE_FORM_CART":
            return{
              ...state,
              products: state.products.filter(item => item.id !== action.payload)
            };

    default:
      return state;
  }
};
export default ProductReducer;
