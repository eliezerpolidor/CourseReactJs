import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Curso from './Curso';
import TodoListRecoil from "./routes/todoListRecoil";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

/**
 * Connect the app to the browser's URL
 */
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Reactjs from './routes/Reactjs';
import Reactnat from './routes/Reactnat';
import Reactnex from './routes/Reactnex';
import Reactgab from './routes/Reactgab';

ReactDOM.render( <
    React.StrictMode >
    <
    BrowserRouter basename = "/react-router-recoil-demo" >
    <
    Routes >
    <
    Route path = '/'
    element = { < App / > } >
    <
    Route index element = { < Curso / > }
    />  <
    Route path = ''
    element = { < Curso / > }
    />  <
    Route path = 'reactnat'
    element = { < Reactnat / > }
    />  <
    Route path = 'reactjs'
    element = { < Reactjs / > } >
    <
    Route index element = { <
        main >
        <
        p > Select an invoice < /p>    <
        /main>
    }
    />    <
    Route path = ':invoiceId'
    element = { < Invoice / > }
    />  <
    /Route>

    <
    Route path = 'reactnex'
    element = { < Reactnex / > }
    />  <
    Route path = 'reactgab'
    element = { < Reactgab / > }
    /> 

    <
    Route path = '*'
    element = { <
        main >
        <
        p > No se encuentra la opción! < /p>    <
        /main>
    } >
    <
    /Route>      <
    /Route>  <
    /Routes>      <
    /BrowserRouter>      <
    /React.StrictMode>, 
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);