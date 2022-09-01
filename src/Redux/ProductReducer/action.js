import { FAILURE_PRODUCT_DATA, REQUEST_PRODUCT_DATA, SUCCESS_PRODUCT_DATA } from "./actiontype"

const requestProduct = () => {
    return{
        type:REQUEST_PRODUCT_DATA
    }
}
const successProduct = (payload) => {
    return{
        type:SUCCESS_PRODUCT_DATA,
        payload,
    }
}

const failureProduct = () => {
    return{
        type:FAILURE_PRODUCT_DATA 
    }
}

export {requestProduct , successProduct ,failureProduct}