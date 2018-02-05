import React, { Component } from 'react';
import { Icon, Image, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { toggleOverlay, toggleFavorite } from '../actions'

class Provider extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFavorite: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    const match = this.props.favorites.find(favorite => favorite.id === this.props.provider.id)
    let result
    if (match) {
      const index = this.props.favorites.indexOf(match)
      result = [
        ...this.props.favorites.slice(0, index), ...this.props.favorites.slice(index + 1)
      ]
      this.setState ({ isFavorite : false })
    } else {
      result = [ ...this.props.favorites, this.props.provider ]
      this.setState ({ isFavorite : true })
    }
    this.props.toggleFavorite(this.props.user, result)
  }

  renderMoreContent = () => {
    return(
      <Card.Content extra>
                  <Icon name='close'
                        onClick={ this.closeOverlay }/>
      </Card.Content>
    )
  }

  closeOverlay = () => {
    this.props.toggleOverlay(false)
  }

  componentDidMount () {
    const match = this.props.favorites.find(favorite => favorite.id === this.props.provider.id)
    if (!this.state.isFavorite && match) this.setState({ isFavorite: true })
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Link to={ `/providers/${ this.props.provider.id }`}>
            <Image floated='left' size='small' src={`img/${ this.props.provider.img }`}/>
             <Card.Header>
               { this.props.provider.name }
             </Card.Header>
           </Link>
           <Card.Meta>
              <div className= 'card_subtitle'>{ this.props.provider.type }</div>
              <span>Max.capacity: { this.props.provider.capacity}</span>
              <div className= 'black'>{ this.props.provider.address }</div>
           </Card.Meta>
           <Icon className = 'card_icon'
            name= { this.state.isFavorite ?
            'heart' :
            'heart outline' }
            size='large'
            onClick= { this.handleClick } />
       </Card.Content>
       { this.props.isActive ?
         this.renderMoreContent() : null}
     </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  overlay: state.dayheart.toggleOverlay,
  favorites: state.dayheart.providers.favorites.data,
  user: state.firebase.auth.uid
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleOverlay,
    toggleFavorite
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Provider)
