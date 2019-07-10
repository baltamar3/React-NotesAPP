import React, { Component } from "react"


class TaskForm extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            titulo: "",
            descripcion: "",
            prioridad: "",
            visible: true
        }
        this.state = {
            titulo: "",
            descripcion: "",
            prioridad: "",
            visible: true
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    onFormSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    handleChangeInput(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        //console.log(name, value)
    }

    /*static getDerivedStateFromProps(props, state) {
        return {visible: props.visible };
    }*/

    componentWillReceiveProps(nextProps) {
        this.setState({ visible: nextProps.visible })
    }


    render() {

        if (!this.state.visible) return null
        return (
            <div className="col-md-6 offset-md-3 mb-5">
                <form action="" onSubmit={this.onFormSubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h4>Añadir Tarea</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" name="titulo"
                                    value={this.state.titulo}
                                    onChange={this.handleChangeInput}
                                    placeholder="Titulo"
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="descripcion"
                                    value={this.state.descripcion}
                                    onChange={this.handleChangeInput}
                                    placeholder="Descripción"
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <select name="prioridad" className="form-control" value={this.state.prioridad} onChange={this.handleChangeInput}>
                                    <option value="Baja">Baja</option>
                                    <option value="Medio">Medio</option>
                                    <option value="Alta">Alta</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success">Enviar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskForm