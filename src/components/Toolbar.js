import React from 'react';
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';

const Toolbar = ({ firebase, user, redirect }) => {

return (
  <div className = 'toolbar'>
    <div className = 'toolbar_wrapper'>
      <div className = 'toolbar-left'>
        <span>{<Icon name = 'sign out'/>}</span>
        <span><Link to={'/'}> DayHeart</Link></span>
      </div>
      <div className = 'toolbar-middle'></div>
      <div className = 'toolbar-right'>
        <Link to={`/${ redirect}`}>{ redirect.toUpperCase() }</Link>
      </div>
    </div>
  </div>
);
}

const mapStateToProps = (state) => ({
  firebase: state.firebase,
  user: state.firebase.auth.uid,
})

export default connect(mapStateToProps)(Toolbar);
