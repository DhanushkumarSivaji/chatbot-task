/* eslint-disable */
import { shuffle } from 'lodash';
import { generateRandomNumber } from '../utils';
import { UPDATE_MESSAGE,GET_MESSAGES,ADD_MESSAGE,MSG_REPLY } from "../actions/Types";

const initialState = {
    messages: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_MESSAGES: 
      return {
        ...state,
        messages: action.payload
      }

    case ADD_MESSAGE: 
      return {
        ...state,
        messages: [...state.messages, action.payload ,shuffle(MSG_REPLY)[generateRandomNumber()]]
      }

    case UPDATE_MESSAGE:
        return {
          ...state,
          messages: state.messages.map(message =>
            message.messageId === action.payload.messageId ? action.payload : message
          )
        };
    
    default:
      return state;
  }
}