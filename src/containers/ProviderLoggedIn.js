import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Card } from 'semantic-ui-react';
import { toggleFavorite } from '../actions';
import { getFavoritesById } from '../selectors';

class ProviderLoggedIn extends Component {
  state = {
    isFavorite: false,
    // prevProvider: this.props.provider,
  }

  handleClick = () => {
    const {
      favorites,
      user,
      toggleFavorite,
    } = this.props;

    const updatedFavorites = this.updateFavorites(favorites)
    toggleFavorite(user, updatedFavorites)
    this.toggleState()
  };

  updateFavorites = (array) => {
    const { provider } = this.props;
    let updatedArray = {};

    if(array[provider.id]) {
      delete array[provider.id]
      updatedArray = array
    } else {
        updatedArray = {
          ...array,
          [provider.id]: provider,
        }
    }
    return updatedArray;
  };

  toggleState = () => this.setState( prevState => ({
    isFavorite: !prevState.isFavorite
  }));

  componentDidUpdate(prevProps) {
    const { favorites, provider } = this.props;
    if(prevProps.provider !== provider && favorites.hasOwnProperty(provider.id)){
      this.setState({ isFavorite: true });
    } else if(prevProps.provider !== provider) this.setState({ isFavorite: false })
  }

  render() {
    const { provider } = this.props;

    return (
      <Fragment>
       <Card.Meta>
          <div className= 'card_subtitle'>{ provider.type }</div>
          <span>Max.capacity: { provider.capacity}</span>
          <div className= 'black'>{ provider.address }</div>
       </Card.Meta>
       <Icon className = 'card_icon'
          name= { this.state.isFavorite ?
          'heart' :
          'heart outline' }
          size='large'
          onClick= { this.handleClick } />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: getFavoritesById(state),
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleFavorite
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderLoggedIn);
