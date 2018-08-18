import React,{Component} from 'react';
import '../styles/login.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class SignupForm extends Component{
	constructor(props){
		super(props);
		this.gotologin=this.gotologin.bind(this);

		this.state={
			username:'',
			password:''
		}
	}
	gotologin(){
		this.props.gologin();
	}
	handleChange=(event)=>{
		this.setState({
			[event.target.name]:event.target.value
		});
	}
	handleSubmit=(event)=>{
		if(this.state.username!=='' && this.state.password!==''){
			axios.post('/login',this.state).then(res=>{
				if(res.data==='username already exists'){
					this.setState({
						usernameexist:true
					})
				}else{
					this.setState({
						successsignup:true
					})
				}
			});
		}else{
			this.setState({
				enterusername:true
			})
		}
	}
	render(){
		return(
			<div>	
				<div>
					<div className="LoginHeading">SIGNUP</div>
					{this.state.usernameexist && <div>username taken</div>}
					{this.state.enterusername && <div>enter username and password</div>}
					<div className="form-group row">
						
						    <label className="col-sm-2 col-form-label">ENTER USERNAME</label>
						    <div className="col-sm-10">
						      <input type="text" className="form-control" value={this.state.username} name="username" onChange={this.handleChange}/>
						    </div>
					</div>
					<div className="form-group row">
						    <label  className="col-sm-2 col-form-label">ENTER PASSWORD</label>
						    <div className="col-sm-10">
						      <input type="text" className="form-control" value={this.state.password} name="password" onChange={this.handleChange}/>
						    </div>
					</div>
					<button className="btn btn-primary" style={{float:'left',marginLeft:'20vw'}} onClick={this.handleSubmit}>Submit</button>	
					{this.state.successsignup && <button className="btn btn-success" onClick={()=>this.gotologin()}>LOGIN</button>}
				</div>				
			</div>)
	}
}

export default withRouter(SignupForm);