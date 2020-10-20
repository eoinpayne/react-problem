import React from 'react';
import MyHeader from './MyHeader';
//for creating stubs for action probs, like onChanged
import {action} from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

export default {
    component: MyHeader,
    title: 'MyHeader',
};

//^^ needed

// //option 1
storiesOf('MyHeader', module).add('Default_way1', () => (
    <MyHeader />
  ));


//fucntions that return react elements
export const Default_way2 = () => {
    return <MyHeader/> 
};

// export const text = () => <Button onClick={action('Hellooo!')}>Hello Button</Button>;

// export const clickLogin  = () => {
    //     <MyHeader email = "ep@gmail.com" onLogin={action('onLogin')}/> 
    // }
    
    
    //show mouseover buttons
    //show values in login box with name and password
    
    


