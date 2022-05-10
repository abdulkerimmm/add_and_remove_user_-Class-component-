import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends Component {
     constructor(props){
         super(props);
        
         this.state={
             users:[
             {
                 id:1,
                 name:"bahadir donmez",
                 gmail:"bahadir@gmail.com"              
             },
             {
                id:2,
                name:"kahveci tuna",
                gmail:"kahveci@gmail.com"              
            },
            {
                id:3,
                name:"tayfun kara",
                gmail:"tayfun@gmail.com"              
            },
         ]}

         this.deleteUser=this.deleteUser.bind(this);
         this.addUser=this.addUser.bind(this);
     }
     addUser(newUser){                                                                                                                                                                                                                                                         
         let uptadeUsers=this.state.users;
         uptadeUsers.push(newUser);

         this.setState({
             users:uptadeUsers
         });
     }
     deleteUser(id){
          let uptadeUsers=this.state.users;
          uptadeUsers=uptadeUsers.filter(userR=>userR.id !==id);
         //state Direct Immutable
         this.setState({
             users:uptadeUsers
         })
     }
    render(){

        return(
        <div className="container"> 
           <h1>users</h1>
           <hr/>
           <AddUser addUser={this.addUser}/>
           <hr/>
           <Users deleteUser={this.deleteUser} usersT={this.state.users} />
        </div>        
        )
    }
}

export default App;