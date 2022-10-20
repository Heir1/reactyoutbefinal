import React from 'react'
import { Header } from '../Header./Header'
import { Siderbar } from '../Siderbar/Siderbar'
import { Channel } from './Channel'

export const Channels = () => {
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
