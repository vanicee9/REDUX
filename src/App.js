import React, { useState } from 'react'
import {useSelector, useDispatch} from react-redux;
import { incrementNum, decrementNum } from './actions';

export default function () {
  const myState = useSelector((state)=>state.logic)
  const dispatch = useDispatch()
  
  return (
    

    <div>

       <h1>Redux use</h1>
       <h1>Count is {count}</h1>
      <button onClick ={()=>dispatch(incrementNum())}>Increment</button>
      <button onClick ={()=>dispatch(decrementNum())}>Decrement</button>
    </div>
  )
}
