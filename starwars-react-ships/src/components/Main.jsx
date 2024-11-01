import { useState } from 'react'
import StarshipList from './StarshipList'

function Main(props) {
  

  return (
    <>
      <h2>This is the Main File!</h2>
      <StarshipList starShips={props.starShips}/>
    </>
  )
}

export default Main