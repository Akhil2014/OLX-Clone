import { SINGLE_PRODUCT_FAILURE, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS } from "./actiontypes"

const singleRequest = () => {
    return{
        type:SINGLE_PRODUCT_REQUEST
    }
}

const singleSuccess = (payload) => {
    return{
        type:SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const singleFailure = () => {
    return{
        type:SINGLE_PRODUCT_FAILURE,
    }
}

export { singleFailure , singleSuccess , singleRequest}