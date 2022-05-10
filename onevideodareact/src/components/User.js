import React, { Component } from "react";

class User extends Component{

    OnDeleteClick(id){
       const {deleteUser}=this.props;
        deleteUser(id);
      }

    render(){
        const { id, name, gmail } = this.props;
     
        return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{gmail}</td>
                <td> <button onClick={this.OnDeleteClick.bind(this,id)} className="btn btn-danger">delete</button> </td>
            </tr>
        )
    }
}
export default User;