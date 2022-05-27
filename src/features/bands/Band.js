import React from 'react'
import {bandRemoved} from "./bandsSlice";
import {useDispatch} from "react-redux";

function Band({band}){
  const dispatch = useDispatch();

  function handleDeleteClick(){
    dispatch(bandRemoved(band.id))
  }

  return (
    <li>
      <span>{band.name}</span>
      <button onClick={handleDeleteClick}>Delete Band</button>
    </li>
  )
}

export default Band