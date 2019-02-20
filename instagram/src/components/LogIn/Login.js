import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(){
        super()
        this.state = {};
    }
    

    render(){
        return(
            <div className = "login-app">
                <h1 className = "login-header">Login In Nerd</h1>
                    <section className = "login-inputs">
                        <form>
                            <input
                            type = "text"
                            placeholder = "enter username"
                            />
                        </form>

                        <form>
                            <input
                            type = "text"
                            placeholder = "enter password"
                            /> 
                        </form>
                        <button>Login</button>
                        <p>Don't have an account?</p>
                        <button>Click Here</button>
                    </section>
            </div>
        )
    }
}

export default Login;