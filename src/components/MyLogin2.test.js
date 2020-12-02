import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import {toBeDisabled, toBe} from '@testing-library/jest-dom';

import MyLogin2 from './MyLogin2'

describe('MyLogin2', () => {
    describe("render", () => {
        render(<MyLogin2 />)
        const username = screen.getByRole('textbox', { name: /username/i })
        const password = screen.getByRole('textbox', { name: /password/i })
        const logInButton = screen.getByRole('button', { name: /Log In/i })

        it("should display both field w/ placeholder, and disabled button", () => {
            //username
            expect(username.placeholder).toBe("username/email")

            expect(password.placeholder).toBe("password")

            expect(logInButton).toBeDisabled()  //needs installed jest-dom
            // expect(logInButton.disabled).toBe(true)
            // expect(logInButton.disabled).toBeTruthy()
        })

            fireEvent.change(username, { target: { value: 'validUsername' } })
            fireEvent.change(password, { target: { value: 'validPassword' } })
            expect(logInButton).toBeEnabled()  //needs installed jest-dom
        

        it("disables login button when password too long, username valid", () => {
            fireEvent.change(username, { target: { value: 'validUsername' } })
            fireEvent.change(password, { target: { value: 'invalidPassword-invalidPassword' } })
            expect(logInButton).toBeEnabled()  //needs installed jest-dom
        })




        // it("turns red with invalid inpiut", ()=>{
        //     render(<MyLogin2/>)

        //     const username = screen.getByRole('textbox', {name: /username/i})
        //     const password = screen.getByRole('textbox', {name: /password/i})

        //     fireEvent.changeText(username, "validUsername")


        //     // fireEvent.keyDown(input, {key: 'ArrowDown'})
        // })


    })

})

//default loads with placeholders and disabled button


//with username & pw error (button still disable TODO )

//with valid inputs, 