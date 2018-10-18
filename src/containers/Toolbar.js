import React from 'react';
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'

import '../styles/toolbar.css'

const Toolbar = ({ firebase, user, userName, redirect }) => {
  return (
    <div className = 'toolbar'>
      <div className = 'toolbar_wrapper'>
        <div className = 'toolbar-left'>
        { user &&
          <span onClick = { firebase.logout }>
            { <Icon name = 'sign out' flipped = 'horizontally'/> } LOG OUT
           </span>
        }
        </div>
        <div className = 'toolbar-middle'>
          <Link to={'/'}>
            DayHeart { userName && ` - ${ userName }`}
          </Link>
        </div>
        <div className = 'toolbar-right'>
          { user ?
            <Link to={`/${ redirect }`}>{ redirect.toUpperCase() }</Link> :
            <Link to={'/login'}>LOG IN</Link>
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.firebase.auth.uid,
  userName: state.firebase.auth.displayName,
})

export default withFirebase(connect(mapStateToProps)(Toolbar));
