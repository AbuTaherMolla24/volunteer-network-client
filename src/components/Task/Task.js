import React from 'react';

const Task = ({task}) => {
    return (
        <div className="container col-md-3 text-center">
            <div className="mt-4">
                <img style={{height:'300px'}} src={require(`../../images/${task.pic}`)} alt=""/>
            </div>
                <h3>{task.name}</h3>
        </div>
    );
};

export default Task;