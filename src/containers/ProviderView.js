import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Image, Card } from 'semantic-ui-react';
import { toggleOverlay } from '../actions';
import ProviderLoggedIn from './ProviderLoggedIn';
import ProviderNotLoggedIn from '../components/ProviderNotLoggedIn';

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

    const commonProviderContent =
      <Fragment>
        <Image
          floated='left'
          size='small'
          src={`/img/${ provider.img }`}/>
         <Card.Header>
           { provider.name }
         </Card.Header>
      </Fragment> ;

    return (
      <Card fluid>
        <Card.Content>
          { user ? (
              <Fragment>
                <Link to={ `/providers/${ provider.id }`}>
                  { commonProviderContent }
                </Link>
                <ProviderLoggedIn provider={provider}/>
              </Fragment>
            ):(
              <Fragment>
                { commonProviderContent }
                <ProviderNotLoggedIn/>
              </Fragment>
          )}
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
