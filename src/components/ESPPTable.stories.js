import React from 'react';
import ESPPTable from './ESPPTable';
//for creating stubs for action probs, like onChanged
// import {action} from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

export default {
    component: ESPPTable,
    title: 'ESPPTable',
};

//^^ needed

// // //option 1
// storiesOf('ESPPTable', module).add('ESPPTable_way1', () => (
//     <ESPPTable/>
//   ));


//fucntions that return react elements
export const ESPPTable_ = () => {
    return <ESPPTable/> 
};

// export const text = () => <Button onClick={action('Hellooo!')}>Hello Button</Button>;

// export const clickLogin  = () => {
    //     <MyHeader email = "ep@gmail.com" onLogin={action('onLogin')}/> 
    // }
    
    
    //show mouseover buttons
    //show values in login box with name and password
    
    


