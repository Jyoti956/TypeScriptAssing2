import React, { Component, FormEvent } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import users from '../../users';

interface State {
    uname: string;
    role: string;
    email: string;
    password: string;
    userCreds: {}[];
}

export default class Login extends Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            uname: "",
            role: "",
            email: "",
            password: "",
            userCreds: []
        }
    }

    private handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let userCreds = [...this.state.userCreds];
        const data = {
            uname: this.state.uname,
            role: this.state.role,
            email: this.state.email,
            password: this.state.password
        };
        userCreds.push(data)
        this.setState({ userCreds: [...userCreds]})
        console.log(userCreds);

        // if (data.uname == users[0].name) {
        //     alert("hgfyjtyhgtc")
        // }

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
                            className="form-control"
                            placeholder="First name"
                            onChange={(e) => this.setState({ uname: e.target.value })}
                            required />
                    </div>

                    <div className="form-group col-md-13">
                        <label>Role</label>
                        <select
                            id="inputState"
                            className="form-control"
                            onChange={(e) => this.setState({ role: e.target.value })}>
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
                            onChange={(e) => this.setState({ email: e.target.value })}
                            required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => this.setState({ password: e.target.value })}
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