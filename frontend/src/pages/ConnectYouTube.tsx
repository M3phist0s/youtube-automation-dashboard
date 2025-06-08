import React from 'react';
const ConnectYouTube = () => (
  <div style={{textAlign: 'center', marginTop: '10vh'}}>
    <h2>Connect your YouTube Channel</h2>
    <a href={process.env.REACT_APP_BACKEND_URL + '/api/youtube/connect'}>
      <button>Connect with YouTube</button>
    </a>
  </div>
);
export default ConnectYouTube;
