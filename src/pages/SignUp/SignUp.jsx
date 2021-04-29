import React from 'react'
import "./SignUp.scss"
import { Link } from 'react-router-dom'

import Logo from '../../assets/img/Logo-branca.png'

const SignUp = () => {
    return (
        <div className="SignUp-wrapper">
            <div className="SignUp-top">
                <img src={Logo} alt="Logo Elo Group"/>
            </div>
            <div className="SignUp-mid">
                <input 
                    type="text"
                    placeholder="Nome"
                />
                <input 
                    type="text"
                    placeholder="Password"
                />
                <input 
                    type="text"
                    placeholder="Confirmaçao"
                />
            </div>
            <div className="SignUp-bottom">
                <Link to="/main">Registrar</Link>
            </div>
        </div>
    )
}

export default SignUp
