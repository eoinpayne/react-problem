const MyLoginView = (props) => {
    return (
        <Form inline onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    value={userName}
                    required
                    style={userNameInvalidChar ? { border: '2px solid red', 'font-size': '.75rem' } : { 'font-size': '.75rem' }}
                    type="text"
                    placeholder="username/email"
                    className="mr-sm-2"
                    onChange={handleNameChange} />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    value={password}
                    required
                    style={passwordInValidChar ? { border: '2px solid red', 'font-size': '.75rem' } : { 'font-size': '.75rem' }}
                    type="text"
                    placeholder="password"
                    className="mr-sm-2"
                    onChange={handlePasswordChange} />
            </Form.Group>
            <Button
                disabled={isInvalidUsername || isInvalidPassword}
                style={{ 'font-size': '.75rem' }}
                variant="outline-info">
                Log In </Button>
        </Form>
    )
}