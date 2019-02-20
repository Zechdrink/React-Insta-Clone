import React from 'react';


const authenticate = App => Login => 
    class extends React.Component{
        constructor(){
            super();
            this.state = ({
                loggedIn: false,
            })
        }

        toggleLogIn = () => this.setState({
            loggedIn: !this.state.loggedIn
        });

        render(){
            if(this.state.loggedIn){
                return <App/>
            } else {
                return <Login toggleLogIn = {this.toggleLogIn}/>
            }
        }
    }


export default authenticate;