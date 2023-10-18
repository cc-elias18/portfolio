import React from 'react';
import '../styles/Banner.css';
import pp from '../assets/img/profile-pic.png';
import proj from '../assets/img/pro-b.png';
import Header from './Header';

function Banner(){
    return(
        <div className='AllUp'>
            <div className='Banner'>
            <div className='info'>
                <Header/>
                <h1>Cristaldo Cabral Elías</h1>
                <ul>
                    <li>
                        <p>Soy un desarrollador web 'fullstack' junior y quiero mostrar lo que hago</p>
                    </li>
                    <li>
                        <p>Me entusiasma la idea de unirme a una empresa y empezar a aportar valor en ella.</p>
                        <p>Realmente espero encontrar un lugar en el que pueda crecer.</p>
                    </li>
                </ul>
                <p>¡No dudes en contactarte conmigo!</p>
            </div>
            <img src={pp} alt="Foto frontal" className='pp' />
        </div>
        <h2>Proyectos</h2>
        <div className='projects'>
            <div className="pro1">
                <h3>Proyecto1</h3>
                <a href="https://tulibro.netlify.app/"><img src={proj} alt="Foto del proyecto grande" /></a>
            </div>
            <div className="pro2">
                <h3>Proyecto2</h3>
                <a href="https://tulibro.netlify.app/"><img src={proj} alt="Foto del proyecto grande" /></a>
            </div>
            <div className="pro3">
                <h3>Proyecto3</h3>
                <a href="https://tulibro.netlify.app/"><img src={proj} alt="Foto del proyecto grande" /></a>
            </div>
        </div>
        </div>
    )
}

export default Banner;