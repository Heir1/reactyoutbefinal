import React from 'react'

export const Siderbar = () => {
  return (
            <div className="col-md-2 col-sm-2 col-xs-2 sideStyle">
                <div className="row sideStyle1">
                    <div className="col-xs-3 funcStyle">
                        Home
                    </div>
                    <div className="col-xs-3 funcStyle">
                        Channels
                    </div>
                    <div className="col-xs-3 funcStyle">
                        Likes
                    </div>
                    <div className="col-xs-3 logoutStyle">
                        <button className="btn btn-danger logoutStyle" >Logout</button>
                    </div>
                </div>
            </div>
  )
}