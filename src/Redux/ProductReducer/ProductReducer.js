import { FAILURE_PRODUCT_DATA, REMOVER_DATA, REQUEST_PRODUCT_DATA, SUCCESS_PRODUCT_DATA } from "./actiontype";

const initialState = {
  product: [],
  query:"",
  isLoading: false,
  isError: false,
};

const productReducer = (state = initialState, {type , payload}) => {
    switch(type){
        case REQUEST_PRODUCT_DATA : {
            return{
                ...state,
                isLoading:true,
                isError:false,
                query:payload
            }
        }
        case SUCCESS_PRODUCT_DATA : {
            return{
                ...state,
                product:[...state.product , ...payload],
                isLoading:false,
                isError:false
            }
        }
        case FAILURE_PRODUCT_DATA : {
            return{
                ...state,
                isError:true,
                isLoading:false
            }
        }
        case REMOVER_DATA : {
            return {
                ...state , 
                product:[]
            }
        }
        default : 
           return state
    }
}

export {productReducer}
