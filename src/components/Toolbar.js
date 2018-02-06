import React from 'react';
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Toolbar = ({ firebase, user }) => {

const logOut = () => {
//   firebase.logOut()
//    .then(() => {
//         this.setState({
//           user: null
//   });
}

return (
  <div className = 'toolbar'>
    <div className = 'toolbar_wrapper'>
      <div className = 'toolbar-left'>
        <span>{
          <Icon name = 'sign out'
                onClick = { logOut()}/>}
        </span>
        <span><Link to={'/'}> DayHeart</Link></span>
      </div>
      <div className = 'toolbar-middle'></div>
      <div className = 'toolbar-right'><Link to={'/list'}> LIST</Link> </div>
    </div>
  </div>
);
}

const mapStateToProps = (state) => ({
  firebase: state.firebase,
  user: state.firebase.auth.uid,
})

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     logOut
//    }, dispatch)
// }

export default connect(mapStateToProps)(Toolbar);
