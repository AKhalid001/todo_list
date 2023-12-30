import React, { useState } from 'react'

export const InsertTask = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert(" Title or Description cannot be blank ")
        }else{
        props.addTask(title, desc)
        setTitle("")
        setDesc("")
        }
    }


    return (
        <div>
            <div className='container mb-3'>
                <h2><u>Add Task</u></h2>
                <form onSubmit={onSubmit}>

                    <div className="row mb-3">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Task Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} id="desc" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="desc" className="col-sm-2 col-form-label">Task Description</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={desc} onChange={(e) => { setDesc(e.target.value) }} id="desc" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">Add</button>
                </form>
            </div>
        </div>
    )
}


