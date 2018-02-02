import React from 'react';
import { Link } from 'react-router-dom'

const Toolbar = ({
  // left,
  // middle,
  // right
}) => {
return (
  <div className = 'toolbar'>

      <div className = 'toolbar-left'><Link to={'/'}> DayHeart</Link></div>
      <div className = 'toolbar-middle'></div>
      <div className = 'toolbar-right'><Link to={'/list'}> LIST</Link> </div>
  
  </div>
);
}
export default Toolbar;
