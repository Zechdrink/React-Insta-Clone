import React from 'react';
import styled,{css} from "styled-components";


const LoginContainer = styled.div`
width: 640px;
margin: 0 auto;
margin-top: 15px;
border: 5px solid black;
text-align: center;
background: orange;
`;

const Header = styled.h1`
color: blue;
`;

export const Form = styled.form`
background: ${props => props.primary ? "midnightblue" : "pink"}
`;

const Input = styled.input`
text-align: center;
padding: 10px;
font-size: 16px;
margin: 10px;
border: 3px solid black;
background: yellow`;

const Button = styled.button`
    border: 3px solid purple;
    padding: 10px 25px;
    margin-bottom: 10px;
    font-size: 16px;
    border-radius: 15px;
    background: aquamarine;
    color: red;
    
    ${props => props.primary && css`
    color: black;
    padding: 10px 45px;
    margin-top: 10px;
    margin-bottom: 0;
    `}
    `;

const Paragraph = styled.p`
font-size: 18px;
font-weight: 900;
color: green;
`


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
    }
    

    render(){
        return(
            <LoginContainer className = "login-app">
                <Header className = "login-header">Login In Nerd</Header>
                    <section className = "login-inputs">
                        <Form onSubmit = {this.props.signIn}>
                            <Input
                            name = "inputText"
                            type = "text"
                            onChange = {this.props.handleChanges}
                            placeholder = "enter username"
                            value = {this.props.inputText}
                            />
                        </Form>

                        <Form primary onSubmit = {this.props.signIn}>
                            <Input
                            name = "password"
                            type = "text"
                            onChange = {this.props.handleChanges}
                            placeholder = "enter password"
                            value = {this.props.password}

                            /> 
                        </Form>
                        <Button primary onClick = {this.props.signIn}>Login</Button>
                        <Paragraph>Don't have an account?</Paragraph>
                        <Button onClick = {this.props.trollAlert}>Click Here</Button>
                    </section>
            </LoginContainer>
        )
    }
}

export default Login;