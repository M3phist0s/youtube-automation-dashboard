import React from 'react';
const Login = () => (
  <div style={{textAlign: 'center', marginTop: '10vh'}}>
    <h2>Login with Google</h2>
    <a href={process.env.REACT_APP_BACKEND_URL + '/api/auth/login'}>
      <button>Sign in with Google</button>
    </a>
  </div>
);
export default Login;
