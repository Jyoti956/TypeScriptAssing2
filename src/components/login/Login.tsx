import React, { Component } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';

interface State {
    name: string;
    role: string;
    email: string;
    password: string;
}

export default class Login extends Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            name: "",
            role: "",
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        
    };

    
    render() {
        return (
            <div id="login">
                <form onSubmit={this.handleSubmit}>
                    <h3>Login Here</h3>

                    <div className="form-group">
                        <label>Name</label>
                        <input 
                        type="text"
                        value={this.state.name} 
                        className="form-control" 
                        placeholder="First name"
                        onChange={(e)=>this.setState({name:e.target.value})} 
                        required />
                    </div>

                    <div className="form-group col-md-13">
                        <label>Role</label>
                        <select 
                        id="inputState" 
                        className="form-control" 
                        onChange={(e)=>this.setState({role:e.target.value})}>
                            <option selected>Choose...</option>
                            <option>Company</option>
                            <option>Admin</option>
                            <option>Customer</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        onChange={(e)=>this.setState({email:e.target.value})} 
                        required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        onChange={(e)=>this.setState({password:e.target.value})} 
                        required />
                    </div>

                    <Button
                        className="simple-menu"
                        variant="contained"
                        color="primary"
                        aria-haspopup="true"
                        type="submit"
                    >
                        Login
                    </Button>

                </form>
            </div>
        );
    }
}