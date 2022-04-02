import githubLogo from './assets/github-logo-64px.png';
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Reactjs from './routes/Reactjs';


/**
 * Declare state management wraper
 */
import {
    RecoilRoot,
} from 'recoil';

function App() {
    return ( <
        RecoilRoot >
        <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h2 > Curso React - Router - Recoil - Redux - < /h2>    <
        div className = "flex-row" >
        <
        a className = "App-link"
        href = "https://reactrouter.com/docs/en/v6/getting-started/tutorial"
        target = "_blank"
        rel = "noopener noreferrer" >
        React Router v6 tutorial <
        /a> &nbsp; | &nbsp;    <
        a className = "App-link"
        href = "https://recoiljs.org/docs/basic-tutorial/intro"
        target = "_blank"
        rel = "noopener noreferrer" >
        React Recoil tutorial <
        /a> &nbsp; | &nbsp;      <
        a className = "App-link"
        href = "https://github.com/frames75/react-router-recoil-demo"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = { githubLogo }
        style = {
            { verticalAlign: 'bottom' } }
        height = '32px'
        width = '32px'
        title = "Go to the Github repo"
        alt = "Go to the Github repo" / >
        <
        /a>     <
        /div>    <
        /header> <
        div className = "App-body" >
        <
        nav className = "App-nav" >
        <
        Link style = {
            { color: 'White', display: "block", margin: "0.5rem 0" } }
        to = "" >
        <
        b > "Inicio" < /b>   <
        /Link>    <
        Link style = {
            { color: 'White', display: "block", margin: "0.5rem 0" } }
        to = "reactjs" >
        <
        b > "React Js" < /b>   <
        /Link>    <
        Link style = {
            { color: 'White', display: "block", margin: "0.5rem 0" } }
        to = "reactnat" >
        "React Native" <
        /Link>    <
        Link style = {
            { color: 'White', display: "block", margin: "0.5rem 0" } }
        to = "reactnex" >
        Next.js < /Link> <
        Link style = {
            { color: 'White', display: "block", margin: "0.5rem 0" } }
        to = "reactgab" >
        Gatsby <
        /Link>      <
        /nav>  <
        main className = "App-content" >
        <
        Outlet / >
        <
        /main>       <
        /div>   <
        /div>       <
        /RecoilRoot>


    );
}

export default App;