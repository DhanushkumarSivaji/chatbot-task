import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Header from './Header';
import Messages from './Messages';
import Input from './Input';
import { updateMessage } from '../actions'


const Chat = () => {

    const dispatch = useDispatch()
    const [data,setData] = useState({})
    const [value,setValue] = useState('')
    const [disabled,setDisabled] = useState(true)
    let [messages,setMessages] = useState([])
    let messagesData = useSelector(state => state.data.messages)

    useEffect(()=> {
        setMessages(messagesData)
    },[messagesData])


    const handleClick = (data) => {
        setDisabled(false)
        setValue(data.message)  
        setData(data)
    } 

    const handleChange = (e) => {
        setValue(e.target.value)
    }   
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let returnValue = data
        returnValue.message = value
        dispatch(updateMessage(returnValue))
        setValue('')
        setDisabled(true)
    }
    return (
        <main className="mobile">
            <Header/>
            <Messages onClick={handleClick} messages={messages}/>
            <Input value={value} onSubmit={handleSubmit} onChange={handleChange} disabled={disabled}/>
        </main>
    )
}

export default Chat;