import React from 'react'
import hqdefault1 from '../../images/hqdefault1.jpg'
import hqdefault2 from '../../images/hqdefault2.jpg'
import hqdefault3 from '../../images/hqdefault3.jpg'
import hqdefault4 from '../../images/hqdefault4.jpg'
import hqdefault5 from '../../images/hqdefault5.jpg'
import hqdefault6 from '../../images/hqdefault6.jpg'
import hqdefault7 from '../../images/hqdefault7.jpg'
import hqdefault8 from '../../images/hqdefault8.jpg'


export const Channel = ({channels, videoFilter}) => {
  return (
    <div className="col-md-10 col-sm-10 col-xs-10" style={{marginTop: "50px"}}>
        <div className="row">
            {
                channels.filter(channel => {
                    if((channel.snippet.title.toLowerCase()).includes(videoFilter.toLowerCase())){
                        return channel
                    }
                }).map((channel, index) => (
                    <div className="col-md-5 col-sm-5 channelDesign" key={index}>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="circle">
                                    <img src={channel.snippet.thumbnails.default.url} alt="Nature" style={{width:"100%"}} className=" videoImage"/>
                                    <div className="caption">
                                    <p>{channel.snippet.title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8">
                                <div className="thumbnail">
                                    <div className="caption">
                                        <p>{(channel.snippet.description).length > 200 ? `${(channel.snippet.description).substring(0,200)}...` : channel.snippet.description }.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


        </div> 
    </div>
  )
}


// <div className="col-md-5 col-sm-5 channelDesign">
// <div className="row">
//     <div className="col-md-4 col-sm-4">
//         <div className="thumbnail">
//             <img src={hqdefault2} alt="Nature" style={{width:"100%"}} className="videoImage"/>
//             <div className="caption">
//             <p>Traversy Media</p>
//             </div>
//         </div>
//     </div>
//     <div className="col-md-8 col-sm-8">
//         <div className="thumbnail">
//             <div className="caption">
//             <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// <div className="col-md-5 col-sm-5 channelDesign">
// <div className="row">
//     <div className="col-md-4 col-sm-4">
//         <div className="thumbnail">
//             <img src={hqdefault3} alt="Nature" style={{width:"100%"}} className="videoImage"/>
//             <div className="caption">
//             <p>Traversy Media</p>
//             </div>
//         </div>
//     </div>
//     <div className="col-md-8 col-sm-8">
//         <div className="thumbnail">
//             <div className="caption">
//             <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// <div className="col-md-5 col-sm-5 channelDesign">
// <div className="row">
//     <div className="col-md-4 col-sm-4">
//         <div className="thumbnail">
//             <img src={hqdefault4} alt="Nature" style={{width:"100%"}} className="videoImage"/>
//             <div className="caption">
//             <p>Traversy Media</p>
//             </div>
//         </div>
//     </div>
//     <div className="col-md-8 col-sm-8">
//         <div className="thumbnail">
//             <div className="caption">
//             <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// <div className="col-md-5 col-sm-5 channelDesign">
// <div className="row">
//     <div className="col-md-4 col-sm-4">
//         <div className="thumbnail">
//             <img src={hqdefault5} alt="Nature" style={{width:"100%"}} className="videoImage"/>
//             <div className="caption">
//             <p>Traversy Media</p>
//             </div>
//         </div>
//     </div>
//     <div className="col-md-8 col-sm-8">
//         <div className="thumbnail">
//             <div className="caption">
//             <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// <div className="col-md-5 col-sm-5 channelDesign">
// <div className="row">
//     <div className="col-md-4 col-sm-4">
//         <div className="thumbnail">
//             <img src={hqdefault6} alt="Nature" style={{width:"100%"}} className="videoImage"/>
//             <div className="caption">
//             <p>Traversy Media</p>
//             </div>
//         </div>
//     </div>
//     <div className="col-md-8 col-sm-8">
//         <div className="thumbnail">
//             <div className="caption">
//             <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// <div className="col-md-5 col-sm-5 channelDesign">
// <div className="row">
//     <div className="col-md-4 col-sm-4">
//         <div className="thumbnail">
//             <img src={hqdefault7} alt="Nature" style={{width:"100%"}} className="videoImage"/>
//             <div className="caption">
//             <p>Traversy Media</p>
//             </div>
//         </div>
//     </div>
//     <div className="col-md-8 col-sm-8">
//         <div className="thumbnail">
//             <div className="caption">
//             <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// <div className="col-md-5 col-sm-5 channelDesign">
// <div className="row">
//     <div className="col-md-4 col-sm-4">
//         <div className="thumbnail">
//             <img src={hqdefault8} alt="Nature" style={{width:"100%"}} className="videoImage"/>
//             <div className="caption">
//             <p>Traversy Media</p>
//             </div>
//         </div>
//     </div>
//     <div className="col-md-8 col-sm-8">
//         <div className="thumbnail">
//             <div className="caption">
//             <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
