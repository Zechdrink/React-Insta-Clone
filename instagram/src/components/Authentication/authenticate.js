import React from 'react';


const authenticate = App => Login => 
    class extends React.Component{
        constructor(){
            super();
            this.state = ({
                inputText: '',
                password: ''
            })
        }

        handleChanges = event => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        //requires username and password
        signIn = event => {
            event.preventDefault();
            window.localStorage.setItem('user', this.state.inputText);
            window.localStorage.setItem('code', this.state.password);
            window.location.reload();
        }

        trollAlert = event => {
            return alert("Anddddd you still don't.")
        }
        // toggleLogIn = () => this.setState({
        //     inputText: !this.state.inputText
        // });

        render(){
            if(localStorage.getItem('user') && localStorage.getItem('code')){
                return <App/>
            } else {
                return <Login 
                handleChanges = {this.handleChanges}
                signIn = {this.signIn}
                inputText = {this.state.inputText}
                password = {this.state.password}
                trollAlert = {this.trollAlert}
                />
            }
        }
    }


export default authenticate;