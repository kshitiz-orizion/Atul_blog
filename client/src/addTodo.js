import React, { Component } from 'react';
import axios from 'axios';

class AddTodo extends Component{
	constructor(props){
		super(props);
		this.state={
			task:'',
			description:''
		}

	}
	componentDidMount(){
		if(this.props.history.location.state===undefined){
			this.setState({
				task:'',
				description:''
			});
		}
		else{
			let id=this.props.history.location.state.newid;
			axios.get('/todo/'+id).then(res=>{
				this.setState({
					task:res.data.task,
					description:res.data.description
				});
			});
		}
	}
	handleChange=(event)=>{
		this.setState({
			[event.target.name]:event.target.value
		});
		
	}

	handleSubmit=(event)=>{
		if(this.props.history.location.state===undefined){
			axios.post('/todo',this.state).then(res=>{
				this.props.history.push('/');
			});
		}else{
			let id=this.props.history.location.state.newid;
			axios.put('/todo/'+id,this.state).then(res=>{
				this.props.history.push('/');
			});
		}
		event.preventDefault();
	}
	render(){
		return (
			<div>
			<form>
					  <div className="form-group row">
					    <label className="col-sm-2 col-form-label">TASK</label>
					    <div className="col-sm-6">
					      <input type="text" className="form-control" name="task" value={this.state.task} onChange={this.handleChange}/>
					    </div>
					  </div>
					  <div className="form-group row">
					    <label  className="col-sm-2 col-form-label">DESCRIPTION</label>
					    <div className="col-sm-6">
					      <input type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleChange}/>
					    </div>
					  </div>
					  <button className="btn btn-primary" style={{float:'left',marginLeft:'20vw'}} onClick={this.handleSubmit}>Submit</button>
			</form>
			</div>)
	}
}

export default AddTodo;