import React from 'react'
import SonFunction from './SonFunction'

const DaddyFunction = () => {

    const handleChildClick = () => {
        console.log("Clicou no elemento Filho!")
    }
  return (
    <SonFunction onChildClick={handleChildClick}/>

  )
}

export default DaddyFunction