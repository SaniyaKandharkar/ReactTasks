import React, {useEffect, useState} from 'react';

const Forms = () => {
    const[count,setCount] = useState(1)
    useEffect(() => {
       alert("Count is being updated.")
       console.warn(count)
    },[count])
    return (
        <div>
            <h1>Use effect hooks in reactJs</h1>
            <h1>{count}</h1>
            <button onClick = {()=> setCount(count+1)}>Update Count</button>
        </div>
    )
}

export default Forms