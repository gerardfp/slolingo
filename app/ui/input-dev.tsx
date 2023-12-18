'use client'

import { useState } from "react"

export function InputDev() {
    let [value, setValue] = useState(['']);

    function update(e){ 
        setValue([e.target.value, ...value]);
    }

    function undo(){
        setValue(value.slice(1));
    }

    return (
        <>
            <textarea className="text-black" onChange={update} value={value[0]} />
            <button onClick={undo}>Undo</button>
        </>
    )
}