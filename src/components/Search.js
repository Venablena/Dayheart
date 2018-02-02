import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Form, Container, Segment, Button, Label } from 'semantic-ui-react'
import { getProviders, filterSelection } from '../actions'
import { withRouter } from 'react-router-dom'
import { LocalForm, Control } from 'react-redux-form'
import _ from 'lodash'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const { target: {name, value} } = event
    this.setState( { [name]: value } )
  }

  // filterData = (data)=> data.filter(item => {
  //   for(let key in this.state){
  //
  //   }
  // })
  //
  // {
  //   return data.filter(item => {
  //     for(let key in this.state){
  //       //console.log('in the function:', this.state[key]);
  //       if(this.state[key] !== item[key]){
  //        return false
  //       }
  //       return true
  //     }
  //   })
  // }

  //filterData = (data) => _.filter(data, this.state)

  handleSubmit = (e) => {
    e.preventDefault()
    // const providers = this.props.getProviders()
    const newSelection = _.filter(this.props.providers, this.state)
    this.props.filterSelection(newSelection)
    this.props.history.push('/map')
  }

  render() {

    return (
      <Form>
        <Form.Field>
          <Form.Input label='Search near' placeholder="Enter zip code" />
        </Form.Field>

        <Segment>
          <Form.Group inline>
           <label>1 Child</label>
              <Form.Radio
                onChange= { this.handleChange }
                name='ages'
                value='Infant'
                label='infant'/>
              <Form.Radio
                onChange= { this.handleChange }
                name='ages'
                value='Toddler'
                label='toddler' />
              <Form.Radio
                onChange= { this.handleChange }
                name='ages'
                value='Preschool'
                label='pre-school' />
              <Form.Radio
                onChange= { this.handleChange }
                name='ages'
                value='School Age'
                label='school age' />
          </Form.Group>
        </Segment>

        <Segment>
          Add Children
        </Segment>

        <Segment.Group horizontal>
         <Segment>Full-time</Segment>
         <Segment>Part-time</Segment>
        </Segment.Group>

        <Segment.Group horizontal>
          <Segment>Starting</Segment>
          <Segment>Now</Segment>
          <Segment>Date</Segment>
        </Segment.Group>

          <Button.Group fluid color='olive'>
           <Button
             onClick={ this.handleChange }
             name='schedule_daily'
             value='Full Day' >Full-time</Button>
           <Button
             onClick={ this.handleChange }
             name='schedule_daily'
             value='Part Day' >Part-time</Button>
          </Button.Group>

          <Button.Group fluid color='olive'>
            <Button disabled>Starting</Button>
            <Button>Now</Button>
            <Button>Date</Button>
          </Button.Group>

          <Button.Group fluid>

           <Button as='div' labelPosition='left'>
            <Label as='a' basic pointing='right'>Type</Label>
          <Button
              onClick={ this.handleChange }
             name='type'
             value='Child Care Center'>Center</Button>
          </Button>
           <Button
             onClick={ this.handleChange }
             name='type'
             value='Family Child Care'>Family</Button>
           <Button
             onClick={ this.handleChange }
             name='type'
             value='Preschool'>Preschool</Button>
          </Button.Group>

          <Segment.Group horizontal>
           <Segment>Clear</Segment>
           <Segment className='orange inverted'>
            <Button onClick= { this.handleSubmit }>Search</Button>
           </Segment>
           <Segment></Segment>
          </Segment.Group>
        </Form>
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
