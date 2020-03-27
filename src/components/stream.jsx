import React { useEffect } from 'react';

const Stream = (props) => {
   let { status, volume } = props;

   useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
   });

   return(
      <audio id="stream">
        <source src="http://80.115.174.87:8000/?type=http" type="audio/mpeg" />
      </audio>
   );
}

export default Stream;
