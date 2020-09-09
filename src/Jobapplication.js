import React from 'react'
import axios from './config/axios'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'

class Jobapplication extends React.Component{
  constructor(){
    super()
    this.state = {
      name:'',
      email:'',
      phone:'',
      job:'',
      experience:'',
      skills:''
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
      name: this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      jobTitle:this.state.job,
      experience:this.state.experience,
      skills:this.state.skills
    }
    // console.log(formData)
    axios.post(`/users/application-form`, formData)
    .then((response) => {
      if(response.data.hasOwnProperty('errors')){
        alert(response.data.message)
      }
      else{
        alert(`Your form sent successfully`)
        this.setState({name:'',
        email:'',
        phone:'',
        job:'',
        experience:'',
        skills:'',})
      }
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  render(){
    return(
      <div>
        <Container>
          <h3>Apply for Job</h3>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md={2}><Form.Label>Full name</Form.Label></Col>
              <Col md={8}><Form.Control type="text" name="name" placeholder="Example"
              value={this.state.name} onChange={this.handleChange} /></Col>
            </Row><br/>
            <Row>
              <Col md={2}><Form.Label>Email address</Form.Label></Col>
              <Col md={8}><Form.Control type="text" name="email" placeholder="example@gmail.com"
              value={this.state.email} onChange={this.handleChange} /></Col>
            </Row><br/>
            <Row>
              <Col md={2}><Form.Label>Contact Number</Form.Label></Col>
              <Col md={8}><Form.Control type="text" name="phone" placeholder="+91 9632145879"
              value={this.state.phone} onChange={this.handleChange} /></Col>
            </Row><br/>
            <Row>
              <Col md={2}><Form.Label>Experience</Form.Label></Col>
              <Col md={8}><select name="job" className="form-control" 
              value={this.state.job} onChange={this.handleChange}>
                <option value="none">---Select---</option>
                <option value="Front-End Developer">Front-End Developer</option>
                <option value="Node.js Developer">Node.js Developer</option>
                <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                <option value="FULL Stack Developer">FULL Stack Developer</option>
              </select></Col>
            </Row><br/>
            <Row>
              <Col md={2}><Form.Label>Experience</Form.Label></Col>
              <Col md={8}><Form.Control type="text" name="experience"  placeholder="Experience"
              value={this.state.experience} onChange={this.handleChange} /></Col>
            </Row><br/>
            <Row>
              <Col md={2}><Form.Label>Technical Skills</Form.Label></Col>
              <Col md={8}><textarea type="text" className="form-control" name="skills" 
              placeholder="Technical Skills" value={this.state.skills} onChange={this.handleChange}></textarea></Col>
            </Row><br/>
            <Button type="submit" className="btn btn-primary">Send Application</Button>
          </Form>
        </Container>
      </div>
    )
  }
}
export default Jobapplication