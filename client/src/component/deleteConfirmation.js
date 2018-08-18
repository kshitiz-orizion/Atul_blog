import React,{Component} from 'react';
import '../styles/deleteConfirmation.css';
class DeleteTodo extends Component{
	constructor(props){
		super(props);
		this.confirmdelete=this.confirmdelete.bind(this);
		this.dontdelete=this.dontdelete.bind(this);
	}
	confirmdelete(){
		this.props.confirmdelete(this.props.newid);
	}
	dontdelete(){
		this.props.dontdelete();
	}
	render(){
		return(
			<div>
				<div className="backgroundDelete">
				</div>
					<div className="deleteConfirmation">
						<div className="deleteHeading">
						Are You Sure you want to delete?
						</div>
						<button className="btn btn-primary yesButton" onClick={this.confirmdelete}>Yes</button>
						<button className="btn btn-danger noButton" onClick={this.dontdelete}>No</button>
					</div>
				
			</div>)
	}
}

export default DeleteTodo;