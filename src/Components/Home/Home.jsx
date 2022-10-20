import React from 'react'
import { Header } from '../Header./Header'
import { Siderbar } from '../Siderbar/Siderbar'
import { Homevideo } from './Homevideo'

export const Home = () => {
  return (
    <React.Fragment>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <Siderbar/>
                <Homevideo/>
            </div>
        </div>   
    </React.Fragment>
  )
}