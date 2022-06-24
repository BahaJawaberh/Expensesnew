import React from 'react'

const Header = ({title,setTitle}) => {
    const handelClick= function () {
        setTitle("Home")
    }
  return (
    <div onClick = {handelClick} >{title}</div>

  )
}

export default Header
