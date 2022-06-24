import React, { useState } from 'react'
import Body from './componts/Body/Body'
import Header from './componts/Header/Header'






const App = () => {
  const [title, setTitle] = useState("sdfg")
  const [headerTitle, setHeaderTitle] = useState("qwer")
  return (
    <div>
      <Header title={headerTitle} setTitle={setHeaderTitle}></Header>
      <Body title={title} setTitle={setTitle}></Body>


    </div>


  )
}

export default App