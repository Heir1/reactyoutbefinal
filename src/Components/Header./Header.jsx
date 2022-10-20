import React, { useEffect, useState } from 'react'
import youtube from '../../images/youtube.png'
import profile0 from '../../images/profile.png'
import { Container, Row, Col } from 'react-bootstrap';

export const Header = () => {

    const [profile, setProfile] = useState("");
  
    let account;
  
    // console.log(JSON.parse(localStorage.getItem("account"))[0]);
    account = JSON.parse(localStorage.getItem("account"))[0];
  
    // console.log(localStorage.getItem("profile"));

    useEffect(()=>{
        if (localStorage.getItem('profile')){
          
        } else {      
          const fetchData = () => {
            fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${account}&key=AIzaSyAxpjZGN2NGfGfa3djYxcOt7Mx6GOq4quU`)
            .then(res => res.json())
            .then(data => {
              console.log(data);
              // setProfile(data.items[0].snippet.thumbnails.high.url)
              localStorage.setItem("profile", JSON.stringify(data.items[0].snippet.thumbnails.high.url))
            })
          }
          fetchData();
        }
    
      }, [])

  return (
    <React.Fragment>
        
        <div className="container-fluid headerStyle">
            <div className="row headerStyle1">
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <div className="row">
                        <div className="col-md-1 col-sm-1 col-xs-1 deskTop">
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <img src={youtube} alt="" className="logo"/>
                        </div>
                    </div>   
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 searchStyle">
                    <input type="text" placeholder="Search a video" className="form-control"/>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-4 deskTop">
                            
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4 deskTop">
                            
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <img src={ localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : profile0} className="profile" />
                        </div>
                    </div>   
                </div>
            </div>
        </div>

    </React.Fragment>
  )
}
