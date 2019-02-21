import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props){
        super(props)
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
                            onChange = {this.props.handleChanges}
                            placeholder = "enter username"
                            handleChanges = {this.props.handleChanges}
                            inputText = {this.props.inputText}
                            />
                        </form>

                        <form>
                            <input
                            type = "text"
                            placeholder = "enter password"
                            /> 
                        </form>
                        <button onClick = {this.props.signIn}>Login</button>
                        <p>Don't have an account?</p>
                        <button>Click Here</button>
                    </section>
            </div>
        )
    }
}

export default Login;