import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Sign extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassword: '',

        };
   
    }

    componentDidMount() {
        console.log("SignCom", this.props);
    }

    onTextChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }


    handleLogin() {
        const { txtUserName, txtPassword } = this.state;
        console.log('handleLogin', txtUserName, txtPassword)
    }

    render() {
        const { txtUserName, txtPassword } = this.state;
        return (
            <div className="container-fluid login">
                <div className="wrap-login">
                    <form action="" method="" className="frm-login">
                        <span className="frm-login-title">Sign In</span>
                        <div className="input-group">
                            <input className="txtUsername" type="text" name="txtUserName" placeholder="Username or email" value={txtUserName} onChange={this.onTextChange} />
                            <span className="focus-input"></span>
                        </div>
                        <div className="input-group">
                            <input className="txtPassword" type="password" name="txtPassword" placeholder="Password" value={txtPassword} onChange={this.onTextChange} />
                            <span className="focus-input"></span>
                        </div>
                        <div className="login-form-btn">
                            {/* <button className="form-btn-submit" type="button" onClick={this.handleLogin} >Sign In</button> */}
                            <Link to="/" className="form-btn-submit">Sign In</Link>
                        </div>
                        <div className="txtorloginwith text-center ">
                            <span className="txt">Or login with</span>
                        </div>
                        <div className="group-social">
                            <a href="#" className="social-item">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-item">
                                <img src="/src/assets/images/icons/google.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text-center txtlink">
                            <Link to="Register" className="txt">
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
       
        );
    }

}


export default Sign;

