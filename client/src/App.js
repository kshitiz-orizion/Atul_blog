import React, { Component } from 'react';
import './App.css';
import GetTodo from './component/getTodo.js';
import AddTodo from './component/addTodo.js';
import Login from './component/login.js';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
class App extends Component {
  render() {
    return (
    	<Router>
    		<div className='App'>
		    		<nav className="navbar navbar-expand-lg navbar-light bg-light">				  
						  <div className="collapse navbar-collapse">
							    <div className="navbar-nav">
								      <div className="nav-item nav-link"><Link to={'/'}>GET TODO LIST</Link></div>
								      <div className="nav-item nav-link"><Link to={'/add'}>ADD TODO</Link></div>
								      <div className="nav-item nav-link"><Link to={'/login'}>LOGIN</Link></div>
							    </div>
						  </div>
					</nav>
		    		<Switch>
		                  <PrivateRoute exact path='/' component={GetTodo} />
		                  <PrivateRoute path='/add/:id' component={AddTodo} />
		                  <PrivateRoute exact path='/add' component={AddTodo} />
		                  <Route path='/login' component={Login}/>
		            </Switch>
	     	</div>	
      	</Router>
    );
  }
}

export default App;
