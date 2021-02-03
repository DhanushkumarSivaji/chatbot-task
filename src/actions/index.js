import { generateRandomNumber } from '../utils';
import { UPDATE_MESSAGE,MSG_DATA,GET_MESSAGES,ADD_MESSAGE,USER_REPLY_MESSAGE,MSG_REPLY } from './Types';



export const getMessageData = () => dispatch => {
   dispatch({
    type: GET_MESSAGES,
    payload: MSG_DATA
   });
}

export const addMessage = (data) => dispatch => {
   dispatch({
    type: ADD_MESSAGE,
    payload: data
   });

   setTimeout(() => {
      dispatch({
         type: USER_REPLY_MESSAGE,
         payload: MSG_REPLY[generateRandomNumber()]
        });
   }, 500);
}

export const updateMessage = (data) => dispatch => {
    dispatch({
        type: UPDATE_MESSAGE,
        payload: data
      });
   
}