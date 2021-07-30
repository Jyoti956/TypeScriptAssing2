import React, { Component } from 'react';
import './LoginForm.css';
import Button from '@material-ui/core/Button';
import { users } from '../../users';
import { withRouter } from 'react-router-dom';

interface IState {
    role:string;
    email: string;
    password: string;
    errorMsg: string;
}

class LoginForm extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            role:"",
            email: "",
            password: "",
            errorMsg: '',
        }
    }

private handleLogin = () => {
        if (this.state.role===users[0].role && this.state.email === users[0].email) {
            this.props.history.push("/company");
        }
        if (this.state.role===users[1].role && this.state.email === users[1].email) {
            this.props.history.push("/admin");
        }
        if (this.state.role===users[2].role && this.state.email === users[2].email) {
            this.props.history.push("/customer");
        }
        else {
            this.setState({ errorMsg: "*************Invalid Credentials" })
        }
    }

render() {
        return (
            <div id="login">

                <h3>Login Here</h3>
                <h5>{this.state.errorMsg}</h5>
                <div className="form-group">
                    <label>Role</label>
                        <select className="form-group col-md-12" 
                                onChange={(e) => this.setState({ role: e.target.value })}
                        >
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
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        required />
                </div>

                <Button
                    className="simple-menu"
                    variant="contained"
                    color="primary"
                    aria-haspopup="true"
                    onClick={this.handleLogin}
                >
                    Login
                </Button>
            </div>
        );
    }
}

export default withRouter(LoginForm);