import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Messages from './Messages';
import Input from './Input';
import { updateMessage, addMessage } from '../actions';



const Chat = () => {

    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const [isUpdate, setIsUpdate] = useState(false)
    const [value, setValue] = useState('')
    let [messages, setMessages] = useState([])
    let messagesData = useSelector(state => state.data.messages)

    useEffect(() => {
        setMessages(messagesData)
    }, [messagesData])


    const handleClick = (data) => {
        setValue(data.message)
        setIsUpdate(true)
        setData(data)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isUpdate) {

            if (value !== '') {
                let returnValue = data
                returnValue.message = value
                dispatch(updateMessage(returnValue))
                setValue('')
                setIsUpdate(false)
            } else {
                dispatch(updateMessage(data))
                setValue('')
                setIsUpdate(false)
            }

        } else {
            if (value !== '') {
                let returnData = {
                    messageId: uuidv4(),
                    message: value,
                    type: "reply"
                }
                dispatch(addMessage(returnData))
            }
        }
        setValue('')
    }
    return (
        <main className="mobile">
            <Header />
            <Messages onClick={handleClick} messages={messages} />
            <Input value={value} onSubmit={handleSubmit} onChange={handleChange} />
        </main>
    )
}

export default Chat;