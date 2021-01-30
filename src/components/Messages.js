import React,{useEffect,useRef} from 'react';
import Message from './Message';

export default function Messages({onClick,messages}) {

    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => elementRef?.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }));
        return <div ref={elementRef} />;
    };

    return (
        <div className="messages">
            {messages.map((message,i) => (
            <Message message={message} key={i} onClick={onClick}/>
            ))}
            <AlwaysScrollToBottom/>
        </div>
    )
}
