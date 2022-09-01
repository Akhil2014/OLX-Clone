import { FAILURE_HOME_DATA, REQUEST_HOME_DATA, SUCCESS_HOME_DATA } from "./actiontypes"

const initialState = {
    homeData:[],
    isLoading:false,
    isError:false
}


const homeReducer = (state  = initialState , {type , payload}) => {
    switch(type){
        case REQUEST_HOME_DATA : {
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case SUCCESS_HOME_DATA : {
            return{
                ...state,
                isLoading:false,
                homeData:[...state.homeData , ...payload]
            }
        }
        case FAILURE_HOME_DATA : {
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default : 
          return state
    }
}


export {homeReducer}