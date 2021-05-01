import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import './Column.scss'
import './Task.scss'

const Task = ({key, task, index}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    className="task"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {task.content}
                </div>
            )}
        </Draggable>
    )
}

const Column = ({key, column, tasks}) => {
    return (
        <div className="board">
            <p className="board-title">{column.title}</p>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <div
                        className="board-list"
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default Column