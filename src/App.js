import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jobapplication from './Jobapplication'
import Admin from './Admin'
import Register from './Register'

function App(){
  return(
    <BrowserRouter>
      <div>
        <Route path="/register" component = {Register}/>
        <Route path="/" component={Jobapplication} exact={true} />
        <Route path="/admin" component={Admin} />
        }
      </div>  
    </BrowserRouter> 
  )
}
export default App