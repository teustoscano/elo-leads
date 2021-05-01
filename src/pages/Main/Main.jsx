import React from 'react'
import "./Main.scss"

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Logo from './../../assets/img/logo-square.png'

const FAKE_DATA = [
    {
        id: '1',
        nome: 'GFN Ltda',
        telefone: '6152305555',
        email: 'gfn@guerra.com.br',
        oportunidades: [false,false,false,false,false]
    },
    {
        id: '2',
        nome: 'Guerra Consorcios',
        telefone: '6130556533',
        email: 'gerra@guerra.com',
        oportunidades: [false,false,false,false,false]
    },
    {
        id: '3',
        nome: 'PURA',
        telefone: '61898237128',
        email: 'pura@pura.com',
        oportunidades: [false,false,false,false,false]
    },
]

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };


const Main = () => {
    const [items, setItems] = React.useState(FAKE_DATA)
    const [listOne, setListOne] = React.useState(FAKE_DATA)
    const [listTwo, setListTwo] = React.useState([])
    const [listThree, setListThree] = React.useState([])

    const onDragEnd = (result) => {
        console.log(result)

        if (!result.destination) {
            return;
        }

        if(result.destination.droppableId === 'one'){
            console.log('Errado')
            return;
        }

        if(result.destination.droppableId === "two"){
            if(result.source.droppableId === 'three'){
                console.log('Errado')
                return;
            }
            let arr = [...listTwo]
            arr.push(listOne[result.source.index])
            let oneArr = [...listOne];
            oneArr.splice(result.source.index, 1)
            
            setListOne(oneArr)
            setListTwo(arr)
        }

        if(result.destination.droppableId === 'three'){
            if(result.source.droppableId === 'one'){
                console.log('Errado')
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

    console.log(listOne,listTwo,listThree)
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="Main-wrapper">
                <div className="Main-header">
                    <div className="Main-header-img">
                        <img src={Logo} alt="logo Elo Group Quadrado" />
                    </div>
                    <div className="Main-header-text">
                        <p>Matheus Toscano</p>
                        <small>Cargo na empresa</small>
                    </div>
                </div>
                <div className="Main-container">
                    <div className="Main-container-btn">novo lead &#8853;</div>
                    <div className="Main-container-board">
                        <Droppable droppableId="one">
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
                        <Droppable droppableId="two">
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
                        <Droppable droppableId="three">
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
