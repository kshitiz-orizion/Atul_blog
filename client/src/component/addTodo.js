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
		if(this.props.history.location.state===undefined && this.props.match.params.id===undefined){
			this.setState({
				task:'',
				description:''
			});
		}
		else if(this.props.history.location.state !== undefined && this.props.match.params.id===undefined){
			let id=this.props.history.location.state.newid;
			axios.get('/todo/'+id).then(res=>{
				this.setState({
					task:res.data.task,
					description:res.data.description
				});
			});
		}
		else{			
			let id=this.props.match.params.id;
			if (id ==='1' || id === '2'){
				this.setState({
				task:'',
				description:''
			});
			}
			else{
				axios.get('/todo/'+id).then(res=>{
				this.setState({
					task:res.data.task,
					description:res.data.description
				});
			 });
			}
			
		}
	}
	handleChange=(event)=>{
		this.setState({
			[event.target.name]:event.target.value
		});
		
	}

	handleSubmit=(event)=>{
		if(this.props.history.location.state===undefined && this.props.match.params.id===undefined){
			axios.post('/todo',this.state).then(res=>{
				this.props.history.push('/');
			});
		}else{
			let id;
			if(this.props.match.params.id){
				id = this.props.match.params.id;
			}
			else{
				id=this.props.history.location.state.newid;
			}
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