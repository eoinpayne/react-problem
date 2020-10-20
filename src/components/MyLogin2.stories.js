import React from 'react'
import MyLogin2 from './MyLogin2'
import {action} from '@storybook/addon-actions'


export default{
    component: MyLogin2,
    title: 'MyLogin2'
}

export const Default = () => {
    return <MyLogin2/>
}

export const validUserNameAndPassword = () => {
    return(<MyLogin2 userName="aaaaaa" password="aaaaaa" onSubmit={action("onSubmit")}/>
    )}

// export const invalidLength_UserNameAndPassword = () => {
//     return(<myLogin2 userName="a" password="a" onSubmit={action("onSubmit")}/>
//     )}

// export const validLengthForIUserName_butInvalidChar = () => {
//     return(<myLogin userName="aaaaaa}" password="" onSubmit={action("onSubmit")}/>
//     )}
//empty
//username and password

//invalid username char
//invalid username length
//invalid username length and char? 

//invalid password length and char? 
