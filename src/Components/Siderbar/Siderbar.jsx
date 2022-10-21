import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Siderbar = () => {

    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
  return (
    <div className="col-md-2 col-sm-2 col-xs-2 sideStyle">
        <div className="row sideStyle1">
            <NavLink to={"/mysubscriptions"} style={{textDecoration:"none", color:'white'}}>
                <div className="col-xs-3 funcStyle">
                    Home
                </div>
            </NavLink>
            <NavLink to={"/mychannels"} style={{ textDecoration:"none", color:'white'}}>
                <div className="col-xs-3 funcStyle">
                    Channels
                </div>
            </NavLink>
            <NavLink to={"/mylikes"} style={{textDecoration:"none", color:'white'}}>
                <div className="col-xs-3 funcStyle">
                    Likes
                </div>
            </NavLink>

            <div className="col-xs-3 logoutStyle">
                <button className="btn btn-danger logoutStyle" onClick={logout} >Logout</button>
            </div>
        </div>
    </div>
  )
}