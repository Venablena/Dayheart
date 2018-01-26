import React from 'react';
import { Row, Input } from 'semantic-ui-react'


const Login = ({}) => (
  <div>
    <form>
      <input type="email" label="Email" s={12} />
      <input type="password" label="password" s={12} />
    </form>
  </div>
);

export default Login;
