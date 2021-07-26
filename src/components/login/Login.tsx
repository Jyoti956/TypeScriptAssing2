import React, { Component, FormEvent} from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import {users} from '../../users';
import { withRouter } from 'react-router';
import { UserModel } from '../../Models';

interface IState {
    user: UserModel;
}


class Login extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: new UserModel(),
        }
    }

    
    private updateUser(key: string, value: string): void {
        this.setState({
            ...this.state,
            user: new UserModel({ ...this.state.user, [key]: value })
        });
    }

    private handleSubmit(e:FormEvent){
        e.preventDefault();
        
    }

    render() {
        return (
            <div id="login">
                <form onSubmit={this.handleSubmit}>
                    <h3>Login Here</h3>
                    <div className="form-group col-md-13">
                        <label>Role</label>
                        <select
                            id="inputState"
                            className="form-control"
                            onChange={({ target }) => this.updateUser('', target.value)}
                        >
                            <option value="Choose...">Choose...</option>
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
                            onChange={({ target }) => this.updateUser('', target.value)}
                            required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={({ target }) => this.updateUser('', target.value)}
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

export default withRouter(Login);