import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Header } from '../Header./Header'
import { Siderbar } from '../Siderbar/Siderbar'
import { Homevideo } from './Homevideo'

export const Home = () => {

  let channel;

  if(localStorage.getItem("channels")){{
    channel = JSON.parse(localStorage.getItem('channels'))[0][3].snippet.resourceId.channelId;
    console.log(JSON.parse(localStorage.getItem('channels'))[0][3].snippet.resourceId.channelId);
  }}
  
  
  const [loading, setLoading] = useState(false)
  const [videoFilter, setVideoFilter] = useState("");
  const [videos, setVideos] = useState([]);
  

  useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        const results = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel}&maxResults=20&order=date&type=video&key=AIzaSyAxpjZGN2NGfGfa3djYxcOt7Mx6GOq4quU`)


        setVideos(results.data.items)

        console.log(results.data);
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
                <Homevideo videoFilter={videoFilter} videos={videos} loading={loading} />
            </div>
        </div>   
    </React.Fragment>
  )
}