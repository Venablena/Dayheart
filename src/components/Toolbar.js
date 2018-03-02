import React from 'react';
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'

const Toolbar = ({ firebase, user, redirect }) => {

return (
  <div className = 'toolbar'>
    <div className = 'toolbar_wrapper'>
      <div className = 'toolbar-left'>
      { user ?
        <span>{
          <Icon name = 'sign out'
                flipped= 'horizontally'
                onClick = { firebase.logout }/>}
        </span>
        :null }
        <span><Link to={'/'}> DayHeart</Link></span>
      </div>
      <div className = 'toolbar-middle'></div>
      <div className = 'toolbar-right'>
        <Link to={`/${ redirect }`}>{ redirect.toUpperCase() }</Link>
      </div>
    </div>
  </div>
);
}

const mapStateToProps = (state) => ({
  user: state.firebase.auth.uid
})

export default withFirebase(connect(mapStateToProps)(Toolbar));
