import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteTodo from './deleteConfirmation';
class GetTodo extends Component {
	constructor(props){
		super(props);
		this.deleteTodo=this.deleteTodo.bind(this);
		this.goto=this.goto.bind(this);
		this.newGoto=this.newGoto.bind(this);
		this.confirmdelete=this.confirmdelete.bind(this);
		this.dontdelete=this.dontdelete.bind(this);
		this.state={
			todo:[],
			deleteConfirmation:false
		}		
	}
	componentDidMount(){
		axios.get('/todo').then(res=>{
			this.setState({todo:res.data});
		});
	}
	confirmdelete(id){
		this.setState({
			deleteConfirmation:false,
		},()=>{
				axios.delete('/todo/'+id).then(res=>{
				for(var i=0;i<this.state.todo.length;i++){
					if(id===this.state.todo[i]._id){
						this.state.todo.splice(i,1);
						this.setState({todo:this.state.todo});
					}
				}
			});
		});
		
	}
	dontdelete(){
		this.setState({
			deleteConfirmation:false
		});
	}
	deleteTodo(id){
		this.setState({
			deleteConfirmation:true,
			varid:id
		});
		
	}
	goto(){
		this.props.history.push('add');
	}
	newGoto(id){
		this.props.history.push('add',{newid:id});
	}
  render() {
    return (
      <div>

      <table className="table">
			  <thead>
			    <tr>
			      <th scope="col">TASK</th>
			      <th scope="col">DESCRIPTION</th>
			      <th scope="col"></th>
			      <th scope="col"></th>
			    </tr>
			  </thead>
			  <tbody>
    {this.state.todo.map((x)=><tr key={x._id}>
    						<td><Link to={`/add/${x._id}`} >{x.task}</Link></td>
    						<td>{x.description}</td>
        					<td><button className="btn btn-danger" onClick={()=>this.deleteTodo(x._id)}>Delete</button></td>
        					<td><button className="btn btn-alert" onClick={()=>this.newGoto(x._id)}>Edit</button></td>
        					</tr>)}
        		</tbody>
	</table>
     <button className="btn btn-primary" style={{float:'left'}} onClick={()=>this.goto()}>add new todo</button>
     {this.state.deleteConfirmation && <DeleteTodo confirmdelete={this.confirmdelete} newid={this.state.varid} dontdelete={this.dontdelete}/>}
      </div>
    );
  }
}

export default GetTodo;