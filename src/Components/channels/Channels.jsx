import React, {useState} from 'react'
import { Header } from '../Header./Header'
import { Siderbar } from '../Siderbar/Siderbar'
import { Channel } from './Channel'

export const Channels = () => {

    const [videoFilter, setVideoFilter] = useState("");
    const channels = JSON.parse(localStorage.getItem('channels'))[0];
    
    // console.log(channels);
    // console.log(JSON.parse(localStorage.getItem('account')));

    return(
        <React.Fragment>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <Siderbar/>
                    <Channel/>
                </div>
            </div>   
        </React.Fragment>
    )
}
