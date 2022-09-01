import {
  FAILURE_PRODUCT_DATA,
  REMOVER_DATA,
  REQUEST_PRODUCT_DATA,
  SUCCESS_PRODUCT_DATA,
} from "./actiontype";
import axios from "axios";

const requestProduct = (payload) => {
  return {
    type: REQUEST_PRODUCT_DATA,
    payload,
  };
};
const successProduct = (payload) => {
  return {
    type: SUCCESS_PRODUCT_DATA,
    payload,
  };
};

const failureProduct = () => {
  return {
    type: FAILURE_PRODUCT_DATA,
  };
};

const removeData = () => {
  return {
    type: REMOVER_DATA,
  };
};

const getProductData =
  (query, id = 1) =>
  (dispatch) => {
    dispatch(requestProduct(query));
    return axios(`http://localhost:8080/data?q=${query}&_page=${id}&_limit=5`)
      .then((r) => dispatch(successProduct(r.data)))
      .catch(() => dispatch(failureProduct()));
  };

export {
  requestProduct,
  removeData,
  successProduct,
  failureProduct,
  getProductData,
};
