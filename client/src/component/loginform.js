import React,{Component} from 'react';
import axios from 'axios';
import '../styles/login.css';
import {withRouter} from 'react-router-dom';
import {fakeAuth} from'../App.js'
class LoginForm extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
		}
	}
	login=()=>{
		fakeAuth.authenticate();
	}
	signout=()=>{
		fakeAuth.signout();
	}
	handleChange=(event)=>{
		this.setState({
			[event.target.name]:event.target.value
		});
	}
	handleSubmit=(event)=>{
		if(this.state.username!=='' && this.state.password!==''){
			axios.get('/login/'+this.state.username+'/'+this.state.password).then(res=>{
				if(res.data!=null){
				this.login();
				this.props.history.push('/');				
				}
				else{
					this.setState({
						loginfailed:true
					});
				}
			});
		}else{
			this.setState({
				loginfailed:true
			});
		}
		event.preventDefault();
	}
	render(){
		return(
			<div>
				<div className="LoginHeading">LOGIN</div>
				<button className="btn btn-danger SignOut" onClick={this.signout}>Signout</button>
					<form className="LoginForm">
						{this.state.loginfailed && <div>Username and password do not match</div>}
						  <div className="form-group row">
						    <label className="col-sm-2 col-form-label">USERNAME</label>
						    <div className="col-sm-10">
						      <input type="text" className="form-control" value={this.state.username} name="username" onChange={this.handleChange}/>
						    </div>
						  </div>
						  <div className="form-group row">
						    <label  className="col-sm-2 col-form-label">PASSWORD</label>
						    <div className="col-sm-10">
						      <input type="text" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
						    </div>
						  </div>
						  <button className="btn btn-primary" style={{float:'left',marginLeft:'20vw'}} onClick={this.handleSubmit}>Submit</button>
					</form>
			</div>)
	}
}

export default withRouter(LoginForm);