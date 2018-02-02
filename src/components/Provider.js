import React, { Component } from 'react';
import { Container, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { toggleOverlay, removeFavorite, toggleFavorite } from '../actions'

class Provider extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFavorite: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    const match = this.props.favorites.find(favorite => favorite.id === this.props.provider.id)
    if (!this.state.isFavorite && match) this.setState({ isFavorite: true })
  }

  handleClick = () => {
    const match = this.props.favorites.find(favorite => favorite.id === this.props.provider.id)
    let result
    if (match) {
      const index = this.props.favorites.indexOf(match)
      result = [
        ...this.props.favorites.slice(0, index), ...this.props.favorites.slice(index + 1)
      ]
    } else {
      result = [ ...this.props.favorites, this.props.provider ]
    }

    this.props.toggleFavorite(this.props.user, result)
  }

  render() {
    return (
      <Container>
        <Segment.Group horizontal>
          <Segment textAlign='left' color='olive'>
            <Link to={ `/providers/${ this.props.provider.id }`}>
              <h4>{ this.props.provider.name }</h4>
              <p>{ this.props.provider.type }</p>
              <p>{ this.props.provider.ages }</p>
              <p>{ this.props.provider.address }</p>
            </Link>
          </Segment>
          <Segment.Group compact textAlign='right'>
            <Segment>
              <Icon
                name =
                { this.state.isFavorite ?
                'heart' :
              'heart outline' }
                size='large'
                onClick= {this.handleClick} />
            </Segment>
            <Segment>
              { this.props.isActive ?
                <Icon name='close'
                      size='large'
                      onClick={ this.closeOverlay }/> :
                      null}
            </Segment>
          </Segment.Group>
        </Segment.Group>
      </Container>
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


// List View
// Facility Name
// Ages Served
// Type of Facility
//
// center detail view
// Type of facility
// Current vacancies
// Hours
// Schedule (Full Day, Part Day, Full Time, Part Time) uncollapse other Options
// Ages Served
// Capacity
// Licensing Status: Provider ID link to Child Care Check website
// Early Achievers Rating
// Longer Description (Substitute short description)
// Unciollapse other categories detailed in above

///////////////
// const match = (this.props.favorites.map(el => el.id).find(this.props.provider.id))
// match ?
// newFavorites = this.props.favorites.slice(this.props.favorites.indexOf(match), 1)
// : newFavorites = [...this.props.favorites, this.props.provider]
