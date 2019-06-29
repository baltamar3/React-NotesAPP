import React, { Component } from "react"


class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            counTasks: ""
        }
    }

    componentWillReceiveProps(nexProps){
        this.setState({counTasks:nexProps.tasksLength})
    }

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark text-white mb-4">
                <a>{this.props.title}
                    <span className="badge badge-pill badge-light ml-2">{this.state.counTasks}</span>
                </a>
            </nav>
        )
    }
}


export default Navbar