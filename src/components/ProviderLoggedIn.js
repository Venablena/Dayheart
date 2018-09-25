import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Card } from 'semantic-ui-react';
import { toggleFavorite } from '../actions';
import { getFavoritesById } from '../selectors';

class ProviderLoggedIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFavorite: false
    }
  }

  handleClick = () => {
    const { id } = this.props.provider;
    const {
      favorites,
      user,
      provider,
      toggleFavorite,
    } = this.props;
    let updatedFavorites = {}

    favorites[id] ?
    updatedFavorites =  delete favorites[id]
    :
    updatedFavorites = {
      ...favorites,
      [id]: provider,
    }

    return toggleFavorite(user, updatedFavorites)
  }

  componentDidMount () {
    const { favorites, provider } = this.props;
    favorites.hasOwnProperty(provider.id) ?
    this.setState({ ...this.state, isFavorite: true }) :
    this.setState({ ...this.state, isFavorite: false })
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
