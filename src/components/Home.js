import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function MyLogin2() {
    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");
    // const getUserProfile = (usernameInput) => props.gitHubusernameCardAPI(`https://api.github.com/users/${usernameInput}`);
    const handleSubmit = (event) => {
        event.preventDefault();
        updateUsername("");
    };
    const handleNameChange = (event) => {
        updateUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        updatePassword(event.target.value)
    }

    const usernameInValidLength = username.length < 2 || username.length > 30;
    const usernameInvalidChar = username.includes("{") || username.includes("}");
    const isInvalidusername = usernameInValidLength || usernameInvalidChar;

    const passwordInValidLength = password.length < 5 || password.length > 15 //TODO: 30
    const passwordInValidChar = password.includes("{") || password.includes("}");
    const isInvalidPassword = passwordInValidLength || passwordInValidChar;


    return (
        <Form inline onSubmit={handleSubmit}>
            <Form.Group>
                {/* <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style = {{"marginRight": "5px"}}>
                    <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>                 */}
                <Form.Label for="username">username</Form.Label>
                <Form.Control
                    id="username"
                    value={username}
                    required
                    style={usernameInvalidChar ? { 'border': '2px solid red', 'font-size': '.75rem' } : { 'font-size': '.75rem' }}
                    type="text"
                    placeholder="username/email"
                    className="mr-sm-2"
                    onChange={handleNameChange} />
            </Form.Group>
            <Form.Group>
            <Form.Label for="password">password</Form.Label>
                <Form.Control
                    id="password"
                    value={password}
                    required
                    style={passwordInValidChar ? { border: '2px solid red', 'font-size': '.75rem' } : { 'font-size': '.75rem' }}
                    type="text"
                    placeholder="password"
                    className="mr-sm-2"
                    onChange={handlePasswordChange} />
            </Form.Group>
            <Button
                disabled={isInvalidusername || isInvalidPassword}
                style={{ 'font-size': '.75rem' }}
                variant="outline-info">
                Log In </Button>
        </Form>
    )
}