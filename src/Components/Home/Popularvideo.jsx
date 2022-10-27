import React, { useState } from 'react'
import axios from 'axios'
import { Spinner } from '../Spinner/Spinner'
import { NavLink } from 'react-router-dom'

const Popularvideo = ({videos, videoFilter, loading, setVideos1}) => {
    const [searchedVideo, setSearchedvideo] = useState([]);
    const [loading1, setLoading1] = useState(false);

    const searchVideoHandler = async (e) => {
        setLoading1(true)
        e.preventDefault();
        const search = document.getElementById('search').value

        if(search.trim().length===0) return alert("Veuillez saisir le nom de la vidéo que vous recherchez")

        const results = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&q=${search}&safeSearch=none&key=AIzaSyDUeGQ6vAoOrjY6Q1HGVfnZ9CpZcvvxgt0`)

        setSearchedvideo(results.data.items)
        console.log(results.data.items);
        setLoading1(false);
    }


    return (
        <div className="col-md-10 col-sm-10 col-xs-10" style={{marginTop: "10px"}}>
            <div className='row' style={{marginBottom: "20px"}}>
                <div className='col-md-6 col-sm-6 col-xs-6 offset-3 deskTop'>
                    <form class="example">
                        <input type="text" id='search' placeholder="Search.." /> 
                        <button class="btn btn-danger" onClick={searchVideoHandler}><i class="fa fa-search"></i></button>
                    </form>
                </div>
                <div className='col-md-6 col-sm-6 col-xs-6 mobile' style={{marginTop: "50px"}}>
                    <form class="example">
                        <input type="text" id='search' placeholder="Search.."  /> 
                        <button class="btn btn-danger" onClick={searchVideoHandler}><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>

            {

                searchedVideo.length > 0 ? 
                (
                    loading1 ? (
                        <Spinner/>
                    )
                    :
                    (
                        <div className="row">
                        {
                            searchedVideo.filter(videoTitle => {
                            if((videoTitle.snippet.title.toLowerCase()).includes((videoFilter.toLowerCase()).trim())){
                            return videoTitle
                            }
                            }).map((video, index) => (
                                <div className="col-md-3 col-sm-4" key={index}>
                                    <NavLink to={video.id.videoId} style={{textDecoration : "none", color : "black"}}>
                                        <div className="thumbnail">
                                            <img src={video.snippet.thumbnails.high.url} alt="Lights" style={{width:"100%"}} className="videoImage"/>
                                            <div className="caption">
                                                <p>{video.snippet.title.length > 35 ? `${video.snippet.title.substring(0,35)}...` : video.snippet.title}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>   
                            ))
                        }
                    </div>
                    )
                )
                :
                (
                
                    loading ? (
                        <Spinner/>
                    )
                    :
                    (
                        <div className="row">
                            {
                                videos.filter(videoTitle => {
                                if((videoTitle.snippet.title.toLowerCase()).includes((videoFilter.toLowerCase()).trim())){
                                return videoTitle
                                }
                                }).map((video, index) => (
                                    <div className="col-md-3 col-sm-4" key={index}>
                                        <NavLink to={video.id} style={{textDecoration : "none", color : "black"}}>
                                            <div className="thumbnail">
                                                <img src={video.snippet.thumbnails.high.url} alt="Lights" style={{width:"100%"}} className="videoImage"/>
                                                <div className="caption">
                                                    <p>{video.snippet.title.length > 35 ? `${video.snippet.title.substring(0,35)}...` : video.snippet.title}</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>   
                                ))
                            }
                        </div>
                    )
    
                )
                
            }
            

        </div>
  )
} 

export default Popularvideo;

// onChange={(e) => setSearchedvideo(e.target.value)}