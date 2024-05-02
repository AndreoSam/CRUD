import axios from "axios";
import { base_url, user_url } from "../../Api/apiUrl";
import { authConst } from "./ActionConst";

const api_url = base_url + user_url;

export const makeRequest = () => {
  return {
    type: authConst.REQUEST,
  };
};

export const failRequest = (err) => {
  return {
    type: authConst.FAIL,
    payload: err,
  };
};

export const getUser = (data) => {
  return {
    type: authConst.GET,
    payload: data,
  };
};

//fetching data from json server
export const fetchUserlist = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios.get(api_url).then((res) => {
      const userlist = res.data;
      dispatch(getUser(userlist))
    }).catch((err) => {
      dispatch(failRequest(err.message))
    })
  }
}
