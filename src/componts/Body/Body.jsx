import React from 'react'

const Body = ({ title,setTitle }) => {
    const handelClick=function () {
        setTitle ("Sweet")
        
    }
    return (
        <div onClick={handelClick}> {title}</div>
    )
}
export default Body
