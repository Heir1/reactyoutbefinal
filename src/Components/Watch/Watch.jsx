import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Header  from '../Header/Header'
import { Header } from '../Header/Header';
import { Siderbar } from '../Siderbar/Siderbar'

export const Watch = () => {
    const {id} = useParams();
  return (
    <React.Fragment>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <Siderbar/>
                <div className="col-md-10 col-sm-10 col-xs-10" style={{marginTop:"50px"}}>
                    <div className="row">
                        <div className="col-md-8 col-sm-8 col-xs-8 offset-1 deskTop">
                            <iframe className="embed-responsive-item videoLive" width="100%" height="450" src={`https://www.youtube.com/embed/${id}`} allowfullscreen></iframe>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-8 mobile videoLive">
                            <iframe className="embed-responsive-item"   width="100%"  src={`https://www.youtube.com/embed/${id}`} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </React.Fragment>
  )
}