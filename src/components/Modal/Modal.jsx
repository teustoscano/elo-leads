import React from 'react'
import './Modal.scss'

import { ToastContainer, toast } from 'react-toast'

import Logo from '../../assets/img/logo-EloGroup-branco.png'


const Modal = ({ show, handleModal, addLead }) => {
    const [state, setState] = React.useState({
        name: "",
        phone: "",
        email: ""
    });
    const [checkForm, setCheckForm] = React.useState({
        all: false,
        rpa: false,
        product: false,
        analytics: false,
        bpm: false
    })
    const [validate, setValidate] = React.useState(false)

    React.useEffect(() => {
        validator()
    }, [state, checkForm])

    const handleState = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleCheckboxes = (e) => {
        console.log(e.target.value)
        setCheckForm({ ...checkForm, [e.target.id]: !checkForm[e.target.id] })
        if (e.target.id === 'all') {
            setCheckForm({
                all: !checkForm[e.target.id],
                rpa: !checkForm[e.target.id],
                product: !checkForm[e.target.id],
                analytics: !checkForm[e.target.id],
                bpm: !checkForm[e.target.id]
            })
        }
    }

    const validator = () => {
        let a = state.name.length > 0
        let b = state.phone.length > 0
        let c = state.email.length > 0
        let d = Object.keys(checkForm).some(k => checkForm[k])
        console.log('D', d)
        if (a && b && c && d) {
            setValidate(true)
        } else {
            setValidate(false)
        }
    }

    const savedLead = () => toast(`Novo lead adicionado! 🥳`, {
        backgroundColor: '#009fb7'
    })

    const saveLead = () => {
        savedLead()
        addLead({
            nome: state.name,
            telefone: state.phone,
            oportunidades: checkForm
        })
        setState({
            name: "",
            phone: "",
            email: ""
        })
        setCheckForm({
            all: false,
            rpa: false,
            product: false,
            analytics: false,
            bpm: false
        })
        handleModal(false)
    }

    if (!show) {
        return null;
    } else {
        return (
            <div className="Modal-wrapper">
                <div className="Modal-header">
                    <div className="Modal-img">
                        <img src={Logo} alt="Logo Elo Group" />
                    </div>
                    <div className="Modal-title">
                        <p>Novo Lead</p>
                        <div onClick={() => handleModal(false)}>&times;</div>
                    </div>
                </div>
                <div className="Modal-bottom">
                    <div className="Modal-form-left">
                        <input
                            placeholder="Nome"
                            type="text"
                            onChange={handleState}
                            name="name"
                            value={state.name}
                        />
                        <input
                            placeholder="Telefone"
                            type="text"
                            onChange={handleState}
                            name="phone"
                            value={state.phone}
                        />
                        <input
                            placeholder="Email"
                            type="text"
                            onChange={handleState}
                            name="email"
                            value={state.email}
                        />
                    </div>
                    <div className="Modal-form-right">
                        <div className="Modal-check-form">
                            <p>Oportunidades</p>
                            <div className="check-form-line">
                                <input type="checkbox" name="all" id="all" value={checkForm.all} onClick={handleCheckboxes} />
                            </div>
                            <div className="check-form-line">
                                <input type="checkbox" name="RPA" id="rpa" onClick={handleCheckboxes} value={checkForm.rpa} checked={checkForm.rpa} />
                                <label>RPA</label>
                            </div>
                            <div className="check-form-line">
                                <input type="checkbox" name="Produto Digital" id="product" onClick={handleCheckboxes} value={checkForm.product} checked={checkForm.product} />
                                <label>Produto Digital</label>
                            </div>
                            <div className="check-form-line">
                                <input type="checkbox" name="Analytics" id="analytics" onClick={handleCheckboxes} value={checkForm.analytics} checked={checkForm.analytics} />
                                <label>Analytics</label>
                            </div>
                            <div className="check-form-line">
                                <input type="checkbox" name="BPM" id="bpm" onClick={handleCheckboxes} value={checkForm.bpm} checked={checkForm.bpm} />
                                <label>BPM</label>
                            </div>
                        </div>
                        <div className={validate ? "Modal-btn" : "Modal-btn-disabled"} onClick={() => saveLead()}>Salvar</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
