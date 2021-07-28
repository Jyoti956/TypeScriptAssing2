import React, { Component, FormEvent} from 'react';
import './Form.css';
import Button from '@material-ui/core/Button';
import {users} from '../../users';
import { withRouter } from 'react-router-dom';
//import { UserModel } from '../../Models';

interface IState {
    email:string;
    password:string;
    errorMsg:string;
}


class Form extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            email:"",
            password:"",
            errorMsg:''
        }
    }

    
private handleSubmit=(e:FormEvent)=>{
        e.preventDefault();
        if(this.state.email===users[0].email && this.state.password===users[0].password){
           this.props.history.push("/company"); 
        }
        else{
            this.setState({errorMsg:"*************Invalid Credentials"})
        }
    }

    render() {
        return (
            <div id="login">
                <form onSubmit={this.handleSubmit}>
                    <h3>Login Here</h3>
                    <h5>{this.state.errorMsg}</h5>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={(e) => this.setState({email:e.target.value})}
                            required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={(e) => this.setState({password:e.target.value})}
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

export default withRouter(Form);