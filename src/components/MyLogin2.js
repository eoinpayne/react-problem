import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function MyLogin2() {
    const [userName, updateUserName] = useState("");
    const [password, updatePassword] = useState("");
    // const getUserProfile = (userNameInput) => props.gitHubUserNameCardAPI(`https://api.github.com/users/${userNameInput}`);
    const handleSubmit = async (event) => { // event object just a wrapper around native even object, all native methods available
        event.preventDefault();
        //TODO: validate no response
        // const resp = await getUserProfile(userName);
        // props.onSubmit(resp.data);
        updateUserName("");
    };
    const handleNameChange = (event) => {
        updateUserName(event.target.value)
    }
    const handlePasswordChange = (event) => {
        updatePassword(event.target.value)
    }

    const userNameInValidLength = userName.length < 2 || userName.length > 30;
    const userNameInvalidChar = userName.includes("{") || userName.includes("}");
    const isInvalidUsername = userNameInValidLength || userNameInvalidChar;

    const passwordInValidLength = password.length < 5 || password.length > 10 //TODO: 30
    const passwordInValidChar = password.includes("{") || password.includes("}");
    const isInvalidPassword = passwordInValidLength || passwordInValidChar;


    return (
        <Form inline onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    value={userName}
                    required
                    style={userNameInvalidChar ? { 'border': '2px solid red', 'font-size': '.75rem' } : { 'font-size': '.75rem' }}
                    type="text"
                    placeholder="username/email"
                    className="mr-sm-2"
                    onChange={handleNameChange}
                    data-testid = "userName" />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    value={password}
                    required
                    style={passwordInValidChar ? { border: '2px solid red', 'font-size': '.75rem' } : { 'font-size': '.75rem' }}
                    type="text"
                    placeholder="password"
                    className="mr-sm-2"
                    onChange={handlePasswordChange}
                    data-testid = "password" />
            </Form.Group>
            <Button
                disabled={isInvalidUsername || isInvalidPassword}
                style={{ 'font-size': '.75rem' }}
                variant="outline-info"
                data-testid = "logInButton">  
                Log In </Button>
        </Form>
    )
}