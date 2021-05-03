import React from 'react'
import "./SignUp.scss"
import { Link } from 'react-router-dom'
import { Reveal, Tween } from 'react-gsap';

import Logo from '../../assets/img/Logo-branca.png'

const SignUp = () => {
    const [state, setState] = React.useState({
        name: "",
        password: "",
        confirmedPass: ""
    });
    const [validate, setValidate] = React.useState(false)

    const handleState = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
        if (e.target.name === "password") {
            checkPassword(e.target.value)
        }
        if (e.target.name === "name") {
            checkName(e.target.value)
        }
    };

    const checkPassword = (pass) => {
        var reg = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[@$!%*?&=])([a-zA-Z0-9@$!%*?&]{8,})$");
        var res = reg.test(pass);
        console.log('Is regular matches:', res);
        return res
    }

    const checkConfirmedPass = (pass) => {
        if (pass === state.password) {
            return true
        } else {
            return false
        }
    }

    const checkName = (name) => {
        if (name === '') {
            console.log('Nome existe?', name)
            return false
        } else {
            return true
        }
    }

    const validator = () => {
        let a = checkName(state.name)
        let b = checkPassword(state.password)
        let c = checkConfirmedPass(state.confirmedPass)

        if (a && b && c) {
            setValidate(true)
        } else {
            setValidate(false)
        }
    }

    console.log(state)

    return (
        <Reveal>
            <Tween from={{opacity: 0, y: '40px'}} duration={1}>
                <div className="SignUp-wrapper">
                    <div className="SignUp-top">
                        <img src={Logo} alt="Logo Elo Group" />
                    </div>
                    <div className="SignUp-mid">
                        <input
                            type="text"
                            placeholder="Nome"
                            name="name"
                            onChange={handleState}
                            value={state.nome}
                            required
                            onKeyUp={validator}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleState}
                            value={state.password}
                            required
                            onKeyUp={validator}
                        />
                        <input
                            type="password"
                            placeholder="Confirmaçao"
                            name="confirmedPass"
                            onChange={handleState}
                            value={state.confirmedPass}
                            required
                            onKeyUp={validator}
                        />
                    </div>
                    <div className="SignUp-bottom">
                        <Link to={{ pathname: "/main", state: state.name }} className={!validate && 'disabled'}>Registrar</Link>
                    </div>
                </div>
            </Tween>
        </Reveal>
    )
}

export default SignUp
