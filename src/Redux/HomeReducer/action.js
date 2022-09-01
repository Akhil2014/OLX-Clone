import { FAILURE_HOME_DATA, REQUEST_HOME_DATA, SUCCESS_HOME_DATA } from "./actiontypes"
import axios from 'axios'


const requestHome = () => {
    return{
        type:REQUEST_HOME_DATA
    }
}

const successHome = (payload) => {
    return{
        type:SUCCESS_HOME_DATA,
        payload,
    }
}

const failureHome = () => {
    return{
        type:FAILURE_HOME_DATA
    }
}



const getHomeData = (id) => (dispatch) => {
    dispatch(requestHome())
    return axios(`http://localhost:8080/data?_page=${id}&_limit=5`)
    .then((r) => dispatch(successHome(r.data)))
    .catch((e) => dispatch(failureHome()))
}









export {requestHome , successHome , failureHome ,getHomeData }