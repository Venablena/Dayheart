import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Image, Card } from 'semantic-ui-react';
import { toggleOverlay } from '../actions';
import ProviderLoggedIn from '../components/ProviderLoggedIn';
import ProviderNotLoggedIn from './ProviderNotLoggedIn';

class ProviderView extends Component {

  renderMoreContent = () => {
    return (
      <Card.Content extra>
        <Icon name='close'
              onClick={ this.closeOverlay }/>
      </Card.Content>
    )
  }

  closeOverlay = () => {
    const { toggleOverlay } = this.props;
    return toggleOverlay(false)
  }

  render() {
    const { user, provider } = this.props;

    const providerContent =
      <Fragment>
        <Link to={ `/providers/${ provider.id }`}>
          <Image
            floated='left'
            size='small'
            src={`/img/${ provider.img }`}/>
           <Card.Header>
             { provider.name }
           </Card.Header>
         </Link>
      </Fragment> ;

    return (
      <Card fluid>
        <Card.Content>
          { providerContent }
          { user ?
            <ProviderLoggedIn provider={provider}/>
            :
            <ProviderNotLoggedIn /> }
        </Card.Content>
       { this.props.isActive &&
         this.renderMoreContent() }
     </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  overlay: state.dayheart.toggleOverlay,
  user: state.firebase.auth.uid,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleOverlay,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderView)
