import './loginpage.css'
import React, { Component, createContext } from 'react'
import Grid from '@material-ui/core/Grid'

class LoginPage extends Component {
    state = {}
    render() {
        return (
            <Grid container >
                <Grid item xs={3}>
                    left
                </Grid>
                <Grid item xs={6}>
                    <div className='loginpage_main'>
                        <div className="center-left">
                            <img src="../../images/inst.svg" width="445px" />
                        </div>
                        <div className="loginpage_right_component">
                            <div className='login_right'>
                                <img className='loginpage_logo' src="../../images/logo.png" alt="" />
                                <div className="loginpage_signin">
                                    <input className='login_text' type="text" placeholder='phone number username ,or email' />
                                    <input className='login_text' type="password" placeholder='password' />
                                    <button className='login_button'>login</button>
                                    <div className='login_ordiv'>
                                        <div className='login_divdor'></div>
                                        <div>Or</div>
                                        <div className='login_divdor'></div>
                                    </div>
                                    <div className='login_fb'> <img src="../../images/fb.png" /> login with facebook</div>
                                    <div className='login_forget'>Forget Password</div>
                                </div>
                            </div>

                            <div className="signup_options">
                                <div className="signin">
                                    Don`t have an account? <span>sign up</span>
                                </div>
                            </div>
                            <span>Get the app</span>
                            <div className="get_app">
                                <a href=""><img src="../../images/app.png" alt="" /></a>
                                <a href=""><img src="../../images/play.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    right
                </Grid>
            </Grid>
        );
    }
}

export default LoginPage;