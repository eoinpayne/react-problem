import React from 'react';

export default function myLogin() {
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
    const passwordInValidChar = userName.includes("{") || userName.includes("}");
    const isInvalidPassword = passwordInValidLength || passwordInValidChar;


    return (
        <form onSubmit={handleSubmit}>
            <input
                style={userNameInvalidChar ? { border: '2px solid red' } : {}}
                type="text"
                placeholder="email/username"
                required
                value={userName}
                onChange={handleNameChange} //TODO: 
            />
            <input
                style={userNameInvalidChar ? { border: '2px solid red' } : {}}
                type="text"
                placeholder="password"
                required
                value={password}
                onChange={handlePasswordChange} //TODO: 
            />
            <button id='login' disabled={isInvalidUsername}>Log In</button>
        </form>
    )
}