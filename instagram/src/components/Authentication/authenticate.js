import React from 'react';


const authenticate = App => Login => 
    class extends React.Component{
        constructor(){
            super();
            this.state = ({
                inputText: '',
            })
        }

        handleChanges = event => {
            this.setState({
                inputText: event.target.value
            })
        }

        signIn = event => {
            event.preventDefault();
            window.localStorage.setItem('user', this.state.inputText);
            window.location.reload();
        }

        // toggleLogIn = () => this.setState({
        //     inputText: !this.state.inputText
        // });

        render(){
            if(localStorage.getItem('user')){
                return <App/>
            } else {
                return <Login 
                handleChanges = {this.handleChanges}
                signIn = {this.signIn}
                inputText = {this.state.inputText}
                />
            }
        }
    }


export default authenticate;