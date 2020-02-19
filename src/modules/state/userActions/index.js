import { SENT_CARDS, RECEIVED_CARDS, USER_DETAILS, REDEEM_CARD } from "./types";
import axiosWrapper from "../../../apis/axiosCreate";

export const fetchReceivedCards = email => async dispatch => {
  const response = await axiosWrapper.get(
    `/giftTransact?receiverEmail=${email}`
  );
  dispatch({
    type: RECEIVED_CARDS,
    payload: response.data
  });
};

export const fetchSentCards = email => async dispatch => {
  const response = await axiosWrapper.get(`/giftTransact?senderEmail=${email}`);
  dispatch({
    type: SENT_CARDS,
    payload: response.data
  });
};

export const userDetails = email => async dispatch => {
  const response = await axiosWrapper.get(`/users?email=${email}`);
  dispatch({
    type: USER_DETAILS,
    payload: response.data
  });
};

export const redeemCard = (rowId, addObj) => async dispatch => {
  await axiosWrapper.delete(`/giftTransact/${rowId}`);
  const endRes = await axiosWrapper.post(`/giftTransact`, addObj);

  dispatch({
    type: REDEEM_CARD,
    payload: endRes.data
  });
};

export const updateUserBalance = (email, newBalance) => async () => {
  await axiosWrapper
    .patch(`/users?email=${email}`, { balance_points: newBalance })
    .catch(err => {
      console.log(err);
    });
};

export const updateTransact = TransactObj => async () => {
  await axiosWrapper.post("/giftTransact", TransactObj).catch(err => {
    console.log(err);
  });
};
