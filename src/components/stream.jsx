import React from 'react';
import ReactPlayer from 'react-player';

const Stream = (props) => {
   return <ReactPlayer 
      url='http://stream.mondkapjefm.nl:8000/?type=http'
      playing={props.status} 
      volume={props.volume/100}
      width='0'
      height='0'
   />
};

export default Stream;
