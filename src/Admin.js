import React from 'react'
import axios from './config/axios'
import {Button, Table } from 'react-bootstrap'
import moment from 'moment'
 
class Admin extends React.Component{
  constructor(){
    super()
    this.state = {
      users: [],
      jobTitle: ['Front-End Developer', 'Node.js Developer', 'MEAN Stack Developer', 'FULL Stack Developer'],
      selectedTitle:'Front-End Developer'
    }
  }

  componentDidMount(){
    axios.get(`/users/application-forms`)
    .then((response) => {
      const users=response.data
      this.setState({ users })
    })
  }
  changeTitle = (title) => {
    this.setState({selectedTitle: title})
  }

  handleView =(id) => {
    axios.get(`/users/application-form/${id}`)
    .then((response) => {
      const users = response.data
      alert(`${users.phone} - ${users.email} -${users.experience} - ${users.skills}`)
    })
  }

  handleUpdate = (id, status) => {
    axios.put(`/users/application-form/update/${id}`, {status})
    .then((response) => {
      const users = response.data
      this.setState(prevState => ({
        users: prevState.users.map(user => {
          if(user._id === users._id){
            return {...users}
          }else{
            return {...user}
          }
        })
      }))
    })
  }

  render(){
    return(
      <div>
        <h3>Admin Dashboard</h3>
        {
          this.state.jobTitle.map(title => {
            return (
                <Button className="btn btn-primary" onClick={()=> {
                  this.changeTitle(title)
                }}>{title}</Button>
            )
          })
        }          
        <h2>{this.state.selectedTitle}</h2>
        <p>List of candidates applied for {this.state.selectedTitle} job</p>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Technical Skills</th>
              <th>Experience</th>
              <th>Applied Date</th>
              <th>View Details</th>
              <th>Update Application Status</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.filter(user => user.jobTitle === this.state.selectedTitle).map(
                ele => {
                  return (
                    <tr key={ele._id}>
                      <td>{ele.name}</td>
                      <td>{ele.skills}</td>
                      <td>{ele.experience}</td>
                      <td>{moment(ele.createdAt).format("DD/MM/YYYY")}</td>
                      <td><button className="btn btn-info" onClick={() =>{
                        this.handleView(ele._id)
                      }}>View Details</button></td>
                      <td>{(ele.status === 'applied') ? 
                      <div><button className="btn btn-success" onClick={() => {this.handleUpdate(ele._id, 'Shortlisted')}}>Shortlisted</button>
                      <button  onClick={() => {this.handleUpdate(ele._id, 'Rejected')}}>Reject</button></div> : 
                    <button>{ele.status}</button>}
                      </td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </Table>

      </div>
    )
  }
}
export default Admin