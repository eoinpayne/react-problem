import React from 'react';
import {render} from '@testing-library/react';

import MyLogin2 from './MyLogin2'

describe('MyLogin2', () => {
    describe("render", () => {
        it("should display both field w/ placeholder, and disabled button", ()=>{
            const {getByTestId} = render(<MyLogin2/>)
            const username = getByTestId("userName")
            const password = getByTestId("password")
            const logInButton = getByTestId("logInButton")

            expect(username.placeholder).toBe("username/email")
            expect(password.placeholder).toBe("password")
            
            expect(logInButton.disabled).toBeTruthy()
        })
    })

})

//default loads with placeholders and disabled button


//with username & pw error (button still disable TODO )

//with valid inputs, 