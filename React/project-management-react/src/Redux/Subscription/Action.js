import api from "@/config/api";
import {
  GET_USER_SUBSCRIPTION_FAILURE,
  GET_USER_SUBSCRIPTION_REQUEST,
  GET_USER_SUBSCRIPTION_SUCCESS,
  UPGRADE_SUBSCRIPTION_FAILURE,
  UPGRADE_SUBSCRIPTION_REQUEST,
  UPGRADE_SUBSCRIPTION_SUCCESS,
} from "./ActionTypes";

export const getUserSubscription = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_SUBSCRIPTION_REQUEST });
    try {
      const response = await api.get("/api/subscription/user", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: GET_USER_SUBSCRIPTION_SUCCESS,
        payload: response.data,
      });
      console.log("users subscription", response.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_USER_SUBSCRIPTION_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const upgradeSubscription = ({ planType }) => {
  return async (dispatch) => {
    dispatch({ type: UPGRADE_SUBSCRIPTION_REQUEST });
    try {
      const response = await api.patch("/api/subscription/upgrade", null, {
        params: {
          planType: planType,
        },
      });
      dispatch({
        type: UPGRADE_SUBSCRIPTION_SUCCESS,
        payload: response.data,
      });
      console.log("upgraded subscription", response.data);
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: UPGRADE_SUBSCRIPTION_FAILURE,
        payload: error.message,
      });
    }
  };
};