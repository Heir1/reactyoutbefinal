import React from 'react'
import { Spinner } from '../Spinner/Spinner'
import { NavLink } from 'react-router-dom'
import hqdefault1 from '../../images/hqdefault1.jpg'
import hqdefault2 from '../../images/hqdefault2.jpg'
import hqdefault3 from '../../images/hqdefault3.jpg'
import hqdefault4 from '../../images/hqdefault4.jpg'
import hqdefault5 from '../../images/hqdefault5.jpg'
import hqdefault6 from '../../images/hqdefault6.jpg'
import hqdefault7 from '../../images/hqdefault7.jpg'
import hqdefault8 from '../../images/hqdefault8.jpg'

export const Homevideo = ({videos, videoFilter, loading}) => {
  return (
    <div className="col-md-10 col-sm-10 col-xs-10" style={{marginTop: "50px"}}>
        {
            loading ? (
                <Spinner/>
            )
            :
            (
                <div className="row">
                    {
                        videos.filter(videoTitle => {
                        if((videoTitle.snippet.title.toLowerCase()).includes(videoFilter.toLowerCase())){
                        return videoTitle
                        }
                        }).map((video, index) => (
                            <div className="col-md-3 col-sm-4">
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
        }
        

    </div>
  )
} 


// <div className="col-md-3 col-sm-4">
// <div className="thumbnail">
//     <img src={hqdefault2} alt="Nature" style={{width:"100%"}} className="videoImage"/>
//     <div className="caption">
//     <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//     </div>
// </div>
// </div>
// <div className="col-md-3 col-sm-4">
// <div className="thumbnail">
//     <img src={hqdefault3} alt="Fjords" style={{width:"100%"}} className="videoImage"/>
//     <div className="caption">
//     <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//     </div>
// </div>
// </div>
// <div className="col-md-3 col-sm-4">
// <div className="thumbnail">
//     <img src={hqdefault4} alt="Fjords" style={{width:"100%"}} className="videoImage"/>
//     <div className="caption">
//     <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//     </div>
// </div>
// </div>
// <div className="col-md-3 col-sm-4">
// <div className="thumbnail">
//     <img src={hqdefault5} alt="Fjords" style={{width:"100%"}} className="videoImage"/>
//     <div className="caption">
//     <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//     </div>
// </div>
// </div>
// <div className="col-md-3 col-sm-4">
// <div className="thumbnail">
//     <img src={hqdefault6} alt="Fjords" style={{width:"100%"}} className="videoImage"/>
//     <div className="caption">
//     <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//     </div>
// </div>
// </div>
// <div className="col-md-3 col-sm-4">
// <div className="thumbnail">
//     <img src={hqdefault7} alt="Fjords" style={{width:"100%"}} className="videoImage"/>
//     <div className="caption">
//     <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//     </div>
// </div>
// </div>
// <div className="col-md-3 col-sm-4">
// <div className="thumbnail">
//     <img src={hqdefault8} alt="Fjords" style={{width:"100%"}} className="videoImage"/>
//     <div className="caption">
//     <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//     </div>
// </div>
// </div>