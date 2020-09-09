import React from 'react'

class Register extends React.Component{
  constructor(){
    super()
    this.state = {
      username:'',
      email:'',
      password:'',
      confirmPassword:'',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword:this.state.confirmPassword
    }
    this.setState(
      (this.state.password === this.state.confirmPassword) ? 
      (localStorage.setItem('Registration', JSON.stringify(formData)), alert('Form submitted successfully'))
       : alert('password and confirm password must be same')
    )
    this.setState({
      username:'',
      email:'',
      password:'',
      confirmPassword:''
    })
  }

  render(){
    return(
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <br/><br/>
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <br/><br/>
          <label>Password:</label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          <br/><br/>
          <label>Confirm Password:</label>
          <input type="text" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
          <br/><br/>
          {
          }
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Register