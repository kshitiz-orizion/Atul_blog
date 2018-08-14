import React, { Component } from 'react';
import './App.css';
import GetTodo from './getTodo.js';
import AddTodo from './addTodo.js';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

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
							    </div>
						  </div>
					</nav>
		    		<Switch>
		                  <Route exact path='/' component={GetTodo} />
		                  <Route exact path='/add' component={AddTodo} />
		               </Switch>
	     	</div>	
      	</Router>
    );
  }
}

export default App;
