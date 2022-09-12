import React from 'react'
import { useState } from 'react'

const Button = () => {
    const [change, setChange] = useState(true);

    const handleColor =()=>{
        setChange(current => !current)
    }
    
  return (
    <div>
        <div>
            <button
             style={{
                backgroundColor: change ? 'teal' : 'Red',
                color: change ? 'white' : 'blue',
              }}
            onClick={handleColor}>Click Here</button>
        </div>
    </div>
  )
}

export default Button