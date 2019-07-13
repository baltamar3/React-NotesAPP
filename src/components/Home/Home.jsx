import React, { Component } from "react"
import Navbar from './../globals/Navbar';
import TaskForm from './../TaskForm';
import Card from './../Card';


class Home extends Component {
    render() {
        return (
            this.props.children
        )
    }
}


export default Home