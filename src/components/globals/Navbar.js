import React, { Component } from "react"
import { Link } from "react-router-dom";



class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counTasks: ""
        }
    }

    componentWillReceiveProps(nexProps) {
        this.setState({ counTasks: nexProps.tasksLength })
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark text-white mb-4">
                <div className="container">
                    <a>{this.props.title}<span className="badge badge-pill badge-light ml-2">{this.state.counTasks}</span></a>
                    <Link to="/" className="text-white">Inicio</Link>
                    <Link to="/about/" className="text-white">Acerca</Link>
                </div>
            </nav>
        )
    }
}


export default Navbar