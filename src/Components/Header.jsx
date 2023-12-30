import React from 'react'

export const Header = ()=> {
    let headerStyle = {
        background: "grey"
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={headerStyle}>

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">ToDo_List</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> </ul>

                        <a className="navbar-brand" href="/">Reset</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

