import React from 'react'
import googlelogo from '../../images/googlologo.gif';
import youtubeani from '../../images/youtubeani.gif'
import './login.css'

export const Login = () => {
  return (
    <div className="container formCon" >
        <div className="youtuDiv" >
            <img src={youtubeani} className="youtuaniDim" />
        </div>
        <div className="signin">
            <div>
                <img src={googlelogo} className="googleDim"/>
            </div>
            <div>
            Sign In
            </div>
      </div>
      <p className="paragraph" >
        Sign In with your google account to view a new youtube experience with this app 
      </p>
    </div>
  )
}