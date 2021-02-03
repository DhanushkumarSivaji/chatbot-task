import React,{ useRef, useEffect } from 'react'

export default function Input({value,onChange,onSubmit}) {
    let inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus()
    }, [value])

    return (
            <form onSubmit={onSubmit}>
                    <input type="text" value={value} onChange={onChange}  ref={inputRef} placeholder="Type a message..." />
                    <div className="sendIcon" onClick={onSubmit}> {"+"}</div>
            </form>
    )
}
