import React, { useState } from 'react'

export default function TodoAdd(onAdd) {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
    }

  return (
    <form onSubmit={(handleSubmit)}>
        <input 
            type="text" 
            placeholder='Add a new TODO'
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
    </form>
  )
}
