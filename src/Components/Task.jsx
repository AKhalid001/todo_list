import React from 'react'

export const Task = ({ T , onDelete }) => {
  return (
    <div>
        <p className="list-group-item">{T.sno}.{T.title} : </p> 
        <p>{T.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=> {onDelete(T)}}>Delete</button>
    </div>
  )
}

