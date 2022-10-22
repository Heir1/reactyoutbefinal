import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Header } from '../Header./Header'
import { Siderbar } from '../Siderbar/Siderbar'
import Popularvideo from './Popularvideo';

const Popular = () => {
  
  const [loading, setLoading] = useState(false)
  const [videoFilter, setVideoFilter] = useState("");
  const [videos, setVideos] = useState([]);
  

  useEffect(() => {

    setLoading(true);

    const fetchData = async () => {
        
      const results = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=FR&maxResults=20&key=AIzaSyAxpjZGN2NGfGfa3djYxcOt7Mx6GOq4quU`)


      setVideos(results.data.items)

      setLoading(false);
      
    }

    fetchData()

  }, [])

  return (
    <React.Fragment>
        <Header setVideoFilter={setVideoFilter} />
        <div className="container-fluid">
            <div className="row">
                <Siderbar/>
                <Popularvideo videoFilter={videoFilter} videos={videos} loading={loading} />
            </div>
        </div>   
    </React.Fragment>
  )
}

export default Popular