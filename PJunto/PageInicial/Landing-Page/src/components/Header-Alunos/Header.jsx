import React, { useEffect, useState } from 'react';
import Logo from '../../icons/logo.png'
import Clock from './Relogio'

export default function HeaderAluno() {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        setCurrentDate(date.toLocaleDateString());
    }, []);


    return (
        <div className="containerHeader">


            <div className="data-aluno">
                <img id='logo' src={Logo}></img>
                <h1 className='titulo-aluno'>Área do aluno</h1>
                {/* <p className='data-aluno'>{currentDate}</p>
                <Clock /> */}
                <button className='home'>HOME</button>
            </div>


        </div>
    )
}