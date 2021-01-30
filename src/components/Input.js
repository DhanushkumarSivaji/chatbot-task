import React,{ useRef, useEffect } from 'react'

export default function Input({value,onChange,onSubmit,disabled}) {

    let inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus()
    }, [value])

    return (
             <form onSubmit={onSubmit}>
                    <input type="text" value={value} onChange={onChange}  ref={inputRef} placeholder="Type a message..." disabled={disabled}/>
                    <div className="sendIcon" disabled={disabled} onClick={onSubmit}> {"+"}</div>
             </form>
    )
}
