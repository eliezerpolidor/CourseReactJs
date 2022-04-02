import { Link } from 'react-router-dom';
import { Reactjs } from './routes/Reactjs.js';
import { Reactnat } from './routes/Reactnat.js';

function Curso() {
    return ( <
        div style = {
            { 'textAlign': 'left' } } >
        <
        h2 > Página de Inicio < /h2>   <
        ul > < b > Estructura del Curso: < /b>   <
        br / >
        <
        li >
        <
        p > < b > < Link to = 'reactjs' > React Js: < /Link></b > Presiona Click sobre el Link para crear una aplicación de una sola página, en esta parte se va trabajar con Componentes, Hooks, Router, Recol, Redux, REducer. < /p> <
        /li>    <
        li >
        <
        p > < b > < Link to = 'reactnat' > React Native: < /Link></b > Presiona Click sobre el Link para correr un video tutorial, empleada en tecnologia movil para Android y IOs. < /p>    <
        /li>    <
        li >
        <
        p > < b > < Link to = 'reactnex' > Next.js: < /Link></b > Presiona Click sobre el Link para correr un video tutorial, empleado para aplicaciones estáticas y renderizadas por servidor. < /p>   <
        /li>    <
        li >
        <
        p > < b > < Link to = 'reactgab' > Gatsby: < /Link></b > Presiona Click sobre el Link para correr un video tutorial, es la mejor manera de crear sitios web estáticos con React.Le permite usar componentes React, pero genera HTML y CSS prerenderizados para garantizar el tiempo de carga más rápido. < /p>  <
        /li>   <
        /ul>    <
        /div>
    );
}
export default Curso;