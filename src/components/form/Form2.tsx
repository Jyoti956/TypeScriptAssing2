import React, { Component, FormEvent } from 'react';
import './Form.css';
import Button from '@material-ui/core/Button';
import { users } from '../../users';
import { withRouter } from 'react-router-dom';
import { UserModel } from '../../Models';

interface IState {
    user: UserModel;

}

class Form2 extends Component<any, IState> {
    
    private updateUser = (key: string, value: string):void => {
        
        this.setState({
                
                user: new UserModel(),
                [key]:value
            });
    }


    private handleSubmit = ():void => {
        console.log(this.state.user);
    }

    render() {
        return (
            <div id="login">
                <form onSubmit={this.handleSubmit}>
                    <h3>Login Here</h3>
                    {/* <h5>{this.state.errorMsg}</h5> */}
                    <div>
                        <label>Role</label>
                        <select className="form-group col-md-12">
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
                            value={this.state.user.password}
                            onChange={({ target }) => this.updateUser('', target.value)}
                            required />
                    </div>

                    <Button
                        className="simple-menu"
                        variant="contained"
                        color="primary"
                        aria-haspopup="true"
                        
                    >
                        Login
                    </Button>

                </form>
            </div>
        );
    }
}

export default withRouter(Form2);