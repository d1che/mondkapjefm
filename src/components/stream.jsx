import React from 'react';
import ReactPlayer from 'react-player';

const Stream = (props) => {
   return <ReactPlayer 
      url='https://stream.mondkapjefm.nl:8443/stream'
      playing={props.status} 
      volume={props.volume/100}
      width='0'
      height='0'
   />
};

export default Stream;
