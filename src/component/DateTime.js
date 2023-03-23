import React, { useEffect, useState } from 'react'

const DateTime = (props) => {
    const [text, setText] = useState('')
    useEffect(() => {
        const todayDate = new Date()
        setText(todayDate.toUTCString())
    }, [])
    const { name } = props;
    return (
        <div>
            <h1 className='text-center'>Hi My Name is {name}</h1>
            <h3>Today's Date is {text}</h3>
        </div>
    )
}

export default DateTime
