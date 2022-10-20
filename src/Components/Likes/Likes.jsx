import React from 'react'
import { Header } from '../Header./Header'
import { Siderbar } from '../Siderbar/Siderbar'
import { Like } from './Like'

export const Likes = () => {
  return (
    <React.Fragment>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <Siderbar/>
                <Like/>
            </div>
        </div>   
    </React.Fragment>
  )
}