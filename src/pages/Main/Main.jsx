import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ToastContainer, toast } from 'react-toast'
import { Controls, PlayState, Tween } from 'react-gsap';

import Modal from '../../components/Modal/Modal'
import { FAKE_DATA } from './DATA'

import "./Main.scss"
import Logo from './../../assets/img/logo-square.png'


const Main = (props) => {
    const [items, setItems] = React.useState(FAKE_DATA.length)
    const [listOne, setListOne] = React.useState(FAKE_DATA)
    const [listTwo, setListTwo] = React.useState([])
    const [listThree, setListThree] = React.useState([])
    const [showModal, setShowModal] = React.useState(false)

    const notificationError = (from, to) => toast(`Proibido arrastar de ${from} para ${to} 🥲`, {
        backgroundColor: '#fe4a49'
    })

    const handleModal = (val) => {
        setShowModal(val)
    }

    const addLead = (info) => {
        let arr = listOne
        arr.push({
            id: (items + 1).toString(),
            nome: info.nome,
            oportunidades: info.checkForm,
            telefone: info.telefone
        })
        console.log(info)
        setItems(items + 1)
        setListOne(arr)
    }

    const onDragEnd = (result) => {

        if (!result.destination) {
            return;
        }

        if (result.destination.droppableId === 'Cliente em Potencial') {
            notificationError(result.source.droppableId, result.destination.droppableId)
            return;
        }

        if (result.destination.droppableId === "Dados Confirmados") {
            if (result.source.droppableId === 'Reunião Agendada') {
                // console.log('Errado')
                notificationError(result.source.droppableId, result.destination.droppableId)
                return;
            }
            if (result.source.droppableId === 'Dados Confirmados') {
                notificationError(result.source.droppableId, result.destination.droppableId)
                return;
            }
            let arr = [...listTwo]
            arr.push(listOne[result.source.index])
            let oneArr = [...listOne];
            oneArr.splice(result.source.index, 1)

            setListOne(oneArr)
            setListTwo(arr)
        }

        if (result.destination.droppableId === 'Reunião Agendada') {
            if (result.source.droppableId === 'Cliente em Potencial') {
                notificationError(result.source.droppableId, result.destination.droppableId)
                return;
            }
            if (result.source.droppableId === 'Reunião Agendada') {
                notificationError(result.source.droppableId, result.destination.droppableId)
                return;
            }
            let arr = [...listThree]
            arr.push(listTwo[result.source.index])
            let twoArr = [...listTwo];
            twoArr.splice(result.source.index, 1)

            setListTwo(twoArr)
            setListThree(arr)
        }
    }

    console.log(listOne, items)
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Modal show={showModal} handleModal={handleModal} addLead={addLead} />
            <div className="Main-wrapper">
                <ToastContainer position="top-right" delay={5000} />
                <div className="Main-header">
                    <Tween from={{ opacity: 0, x: '-10px' }} stagger={0.7} duration={2}>
                        <div className="Main-header-img">
                            <img src={Logo} alt="logo Elo Group Quadrado" />
                        </div>
                        <div className="Main-header-text">
                            <p>{props.location.state}</p>
                            <small>Cargo na empresa</small>
                        </div>
                    </Tween>
                </div>
                <div className="Main-container">
                    <div className="Main-container-btn" onClick={() => handleModal(true)}>novo lead &#8853;</div>
                    <div className="Main-container-board">
                        <Droppable droppableId="Cliente em Potencial">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="board"
                                >
                                    <p className="board-title">Cliente em potencial</p>
                                    {listOne.map((item, index) => (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="card"
                                                >
                                                    {item.nome}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        <Droppable droppableId="Dados Confirmados">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="board"
                                >
                                    <p className="board-title">Dados Confirmados</p>
                                    {listTwo.map((item, index) => (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="card"
                                                >
                                                    {item.nome}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        <Droppable droppableId="Reunião Agendada">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="board"
                                >
                                    <p className="board-title">Reunião agendada</p>
                                    {listThree.map((item, index) => (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="card"
                                                >
                                                    {item.nome}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </div>
            </div>
        </DragDropContext>
    )
}

export default Main
