import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class GetTodo extends Component {
	constructor(props){
		super(props);
		this.deleteTodo=this.deleteTodo.bind(this);
		this.goto=this.goto.bind(this);
		this.newGoto=this.newGoto.bind(this);
		this.state={
			todo:[]
		}		
	}
	componentDidMount(){
		axios.get('/todo').then(res=>{
			this.setState({todo:res.data});
		});
	}
	deleteTodo(id){
		axios.delete('/todo/'+id).then(res=>{
			for(var i=0;i<this.state.todo.length;i++){
				if(id===this.state.todo[i]._id){
					this.state.todo.splice(i,1);
					this.setState({todo:this.state.todo});
				}
			}
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
    						<td>{x.task}</td>
    						<td>{x.description}</td>
        					<td><button className="btn btn-danger" onClick={()=>this.deleteTodo(x._id)}>Delete</button></td>
        					<td><button className="btn btn-alert" onClick={()=>this.newGoto(x._id)}>Edit</button></td>
        					</tr>)}
        		</tbody>
	</table>
     <button className="btn btn-primary" style={{float:'left'}} onClick={()=>this.goto()}>add new todo</button>
      </div>
    );
  }
}

export default GetTodo;