import React from 'react'
import { Task } from './Task'

export const TaskList = (props) => {

  let tasklistStyle = {
    minHeight: "70vh",
    margin: "40px auto"
}

  return (

    <div className='container'  style={tasklistStyle}>
      <h3 className="my-3"><u> ToDo_List </u></h3>
      {props.TL.length === 0 ? " No Task Found " :
        props.TL.map((T) => {
          return (
            <>
          <Task T={T} key={T.sno} onDelete={props.onDelete} /> 
          <hr/>
          </>
        )})
      }
    </div>

  )
}


