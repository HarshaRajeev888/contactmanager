import React, { Component } from 'react'

export default class AddContacts extends Component {
    state={
        name: "",
        email: ""
    }
    add = (e)=>{
e.preventDefault()
if(this.state.name === "" && this.state.email === ""){
    alert("all the fields are mandatory")
}
this.props.AddContactsHandler(this.state)
this.setState({name: "" , email:""})


    }
    render() {
        return (
            <div>
                <h2>Add Contacts</h2>
                <form  onSubmit={this.add}>
                <div>
                    <label> Name</label>
                    <input type="text" placeholder="name" name="name" value={this.state.name}
                    onChange={(e) =>this.setState({name: e.target.value})}
                    ></input>
                </div>

                <div>
                    <label> Email</label>
                    <input type="email" placeholder="email" email="email"
                    value={this.state.email}
                     onChange={(e) =>this.setState({email: e.target.value})}
                    ></input>
                </div>

                <button>Add</button>
                </form>
          </div>
    
         
        )
    }
}
