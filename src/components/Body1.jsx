import React from 'react';
import '../styles/Body1.css';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import js from '../assets/img/js.png';
import react from '../assets/img/react.png';
import vs from '../assets/img/vs.png';
import workbench from '../assets/img/workbench.png';
import bs from '../assets/img/bootstrap.png';
import gh from '../assets/img/github.png';

function Body1(){
    return(
        <div className='body1'>
            <div className='grl_container'>
                <h1>Herramientas y tecnologías</h1>
                <div className='row'>
                    <div className='img_grl'>
                        <img src={html} alt="Logo de HTML5" />
                        <p>HTML 5</p>
                    </div>
                    <div className='img_grl'>
                        <img src={css} alt="Logo de CSS3" />
                        <p>CSS 3</p>
                    </div>
                    <div className='img_grl'>
                        <img src={js} alt="Logo de Javascript" />
                        <p>Javascript</p>
                    </div>
                    <div className='img_grl'>
                        <img src={react} alt="Logo de React" id="react" />
                        <p>React.js</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='img_grl'>
                        <img src={vs} alt="Logo de Visual Studio Code" id='vs' />
                        <p>Visual Studio Code</p>
                    </div>
                    <div className='img_grl'>
                        <img src={workbench} alt="Logo de Workbench" />
                        <p>mySQL Workbench</p>
                    </div>
                    <div className='img_grl'>
                        <img src={bs} alt="Logo de Bootstrap" />
                        <p>Bootstrap</p>
                    </div>
                    <div className='img_grl'>
                        <img src={gh} alt="Logo de Github" id='gh' />
                        <p>Github</p>
                    </div>
                </div>
            </div>

            <div className='grl_container'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minima et cupiditate saepe! Impedit tenetur nam sapiente pariatur incidunt soluta nisi excepturi id, esse doloribus quisquam debitis corporis hic culpa.</p>
                
                <h1>Competencias blandas</h1>
            </div>
        </div>
    )
}

export default Body1;