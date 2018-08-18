import React,{Component} from 'react';
import '../styles/login.css';
import LoginForm from './loginform';
import SignupForm from './signupform';
class Login extends Component{
	constructor(props){
		super(props);
		this.login=this.login.bind(this);
		this.signup=this.signup.bind(this);
		this.state={
			login:'',
			signup:''
		}
	}
	componentDidMount(){
			this.setState({
				login:true,
				signup:false,
			});
	}
	login(){
		this.setState({
			login:true,
			signup:false
		})
	}
	signup(){
		this.setState({
			login:false,
			signup:true
		})
	}
	render(){
		return(
			<div>
				<div>
					<button className="LoginBtn" onClick={()=>this.login()}>LOGIN</button>
					<button className="SignupBtn" onClick={()=>this.signup()}>SIGNUP</button>
				</div>
				{this.state.login && <LoginForm/>}
				{this.state.signup && <SignupForm gologin={this.login}/>}
			</div>)
	}
}

export default Login;