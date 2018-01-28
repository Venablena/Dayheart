import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Form, Container } from 'semantic-ui-react'
import { createUser } from '../actions/'

const Login = ({ createUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting!');
    const { email, password } = e.target
    createUser(email.value, password.value)
  }

  return (
    <Container>
      <Form onSubmit={ handleSubmit }>
        <Form.Field>
          <Form.Input name="email" type="email" label="Email" autoComplete="email"/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="password" type="password" label="Password" autoComplete="password"/>
        </Form.Field>
        <Form.Field>
          <Form.Button className='orange'> Submit</Form.Button>
        </Form.Field>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
