import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Users } from "./Routes/Users";
import { About } from "./Routes/about";
import { Layout } from "./Routes/layout";

ReactDOM.render( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Layout / > } >
        <
        Route index element = { < Home / > }
        />  <
        Route path = "Users"
        element = { < Users / > }
        /> <
        Route path = "About"
        element = { < About / > }
        />  <
        Route path = "*"
        element = { < Navigate replace to = "/" / > }
        /> <
        /Route>    <
        /Routes>  <
        /BrowserRouter>, document.getElementById('root'));