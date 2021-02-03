import { v4 as uuidv4 } from 'uuid';
export const GET_MESSAGES = "GET_MESSAGES"
export const UPDATE_MESSAGE = "UPDATE_MESSAGE"
export const ADD_MESSAGE = "ADD_MESSAGE"

export const MSG_DATA = [
    {
      messageId: uuidv4(),
      message: "Hi Dhanush, How are you",
      type: "user"
    }
  ]
export const MSG_REPLY = [
    {
      messageId: uuidv4(),
      message: "Shall we go for a movie today afternoon ?",
      type: "user"
    },
    {
      messageId: uuidv4(),
      message: "How is your parents?",
      type: "user"
    },
    {
      messageId: uuidv4(),
      message: "Did you changed your laptop?",
      type: "user"
    },
    {
      messageId: uuidv4(),
      message: "What about your gym goals?",
      type: "user"
    },
    
    {
      messageId: uuidv4(),
      message: "At what time you will start work ?",
      type: "user"
    },
    {
      messageId: uuidv4(),
      message: "How is your cloud certificate preparations ?",
      type: "user"
    },

  ]
