import { SINGLE_PRODUCT_FAILURE, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS } from "./actiontypes"

const initState = {
    singleProduct:[],
    isLoading:false,
    isError:false
}

const singleReducer = (state = initState , {type , payload}) => {
    switch(type){
        case SINGLE_PRODUCT_REQUEST : {
            return{
                ...state , 
                isLoading:true
            }
        }

        case SINGLE_PRODUCT_SUCCESS : {
            return{
                ...state ,
                singleProduct : payload,
                isLoading:false,
                isError:false,
            }
        }
        case SINGLE_PRODUCT_FAILURE : {
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
    }
}

export {singleReducer}