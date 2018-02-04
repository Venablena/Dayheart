import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Form, Container, Segment, Button, Label, Grid, Accordion } from 'semantic-ui-react'
import { getProviders, filterSelection } from '../actions'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
  }

  toggleActive = (e) => {
    e.target.classList.value.includes('active') ?
      e.target.classList.remove('active') :
      e.target.classList.add('active')
  }

  handleChange = (e) => {
    this.toggleActive(e)
    const { target: {name, value} } = e
    if(this.state.hasOwnProperty(name)){
      console.log(this.state[name] === value);

      const currentState = Object.assign(this.state)
      delete currentState[name]
      this.setState(currentState)
    }
    else {
      const currentState = Object.assign(this.state, {[name]: value })
      this.setState(currentState)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // const providers = this.props.getProviders()
    const newSelection = _.filter(this.props.providers, this.state)
    this.props.filterSelection(newSelection)
    this.setState({})
    this.props.history.push('/map')
  }

  erase = (e) => {
    e.preventDefault()
    this.setState({})
  }

  render() {
    console.log(this.state);
    return (
      <Container className = 'container'>
        <Form.Group>
          <Form.Input className = '.naked_form' label='Search near' placeholder="Enter zip code" />
        </Form.Group>
      <p>
      <Button basic compact floated='left' className='naked'>Age of my child:</Button>
        <Button
          circular icon= 'plus'
          floated= 'right'
          color= 'olive'>
        </Button>
        <Button basic compact floated='right' className='naked'>Add Children</Button>
      </p>
        <Button.Group fluid>
          <Button basic compact
            onClick= { this.handleChange }
            name='ages'
            value='Infant'>Infant
          </Button>
          <Button basic compact
            onClick= { this.handleChange }
            name='ages'
            value='Toddler'>Toddler</Button>
          <Button basic compact
            onClick= { this.handleChange }
            name='ages'
            value='Preschool'>Preschool
          </Button>
          <Button basic compact
            onClick= { this.handleChange }
            name='ages'
            value='School Age'>School Age
          </Button>
        </Button.Group>

        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Button basic compact floated='left' className='naked'>Hours:</Button>
                <Button.Group fluid>
                 <Button basic compact
                   onClick={ this.handleChange }
                   name='full_time'
                   value={ true }>Full-time</Button>

                 <Button basic compact
                   onClick={ this.handleChange }
                   name='part_time'
                   value={ true }>Part-time</Button>
                </Button.Group>
              </Grid.Column>
              <Grid.Column>
              <Button basic compact floated='left' className='naked'>Starting:</Button>

              <Button.Group fluid>
                <Button basic compact
                  onClick={ this.toggleActive }>Now</Button>
                <Button basic compact
                  onClick={ this.toggleActive }>Date</Button>
              </Button.Group>
              </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className= 'hidden'>

        </div>

        <Button basic compact floated='left' className='naked'>
        Type of childcare provider:</Button>
          <Button.Group fluid>

          <Button basic compact
              onClick={ this.handleChange }
             name='type'
             value='Child Care Center'>Center</Button>

           <Button basic compact
             onClick={ this.handleChange }
             name='type'
             value='Family Child Care'>Family</Button>
           <Button basic compact
             onClick={ this.handleChange }
             name='type'
             value='Preschool'>Preschool</Button>
          </Button.Group>

          <p>
           <Button color='orange' floated='left'
            onClick= { this.handleSubmit }>Search</Button>
          <Button className='naked' floated='right'
            onClick= { this.erase }>
            Clear
           </Button>
          </p>
        </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  currentSelection: state.dayheart.providers.filtered,
  providers: state.dayheart.providers.all
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getProviders, filterSelection }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
