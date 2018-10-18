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
    const { id } = this.props.provider;
    const {
      favorites,
      user,
      provider,
      toggleFavorite,
    } = this.props;
    let updatedFavorites = {}

//THIS REMOVES ALL OF THE FAVORITES, FIX!!!
    if(favorites[id]) {
      delete favorites[id]
      updatedFavorites = favorites
    } else {
        updatedFavorites = {
          ...favorites,
          [id]: provider,
        }
    }
    toggleFavorite(user, updatedFavorites)
    this.toggleState()
  }

  toggleState = () => this.setState( prevState => ({
    isFavorite: !prevState.isFavorite
  }))

  // componentDidMount () {
  //   const { favorites, provider } = this.props;
  //   favorites.hasOwnProperty(provider.id) ?
  //   this.setState({ ...this.state, isFavorite: true }) :
  //   this.setState({ ...this.state, isFavorite: false })
  // }

  static getDerivedStateFromProps(props, state) {
    const { favorites, provider } = props;
    const { prevProvider } = state;
    console.log(provider, prevProvider);
    favorites.hasOwnProperty(provider.id) ?
    this.setState({ ...this.state, isFavorite: true }) :
    this.setState({ ...this.state, isFavorite: false })
  }

  componentDidUpdate(prevProps) {
    const { favorites, provider } = this.props;
    if(favorites.hasOwnProperty(provider.id)) console.log("I'm a favorite");
    else { console.log("i'm not a favorite");}
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
