import React, { Component } from "react"
//import { tasks } from "../data/task";

class Card extends Component {
    constructor(props) {
        super(props)        
    }

    render() {
        let task = this.props.tasksData.map((task, i) => {
            return (
                <div className="card col-md-4 mt-4 text-center" key={task.id}>
                    <div className="card-header">
                        <h5>{task.titulo}</h5>
                        <span className="badge badge-pill badge-danger">{task.prioridad}</span>
                    </div>
                    <div className="card-body">
                        <p>{task.descripcion}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger btn-sm" onClick={()=>this.props.removeTask(task.id)}>
                            Borrar
                        </button>
                    </div>
                </div>
            )
        })

        return (
            <div className="row">
                {task}
            </div>
        )
    }
}

export default Card