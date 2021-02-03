import { UPDATE_MESSAGE,MSG_DATA,GET_MESSAGES,ADD_MESSAGE } from './Types';



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
}

export const updateMessage = (data) => dispatch => {
    dispatch({
        type: UPDATE_MESSAGE,
        payload: data
      });
}