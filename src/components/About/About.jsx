import React, { Component } from "react"
import NavBar from "../globals/Navbar"

class About extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="jumbotron container">
                    <h1 class="display-4">Aplicación de tareas!</h1>
                    <p>
                        <strong>Aplicación de tareas</strong>, Es un proyecto de aprendizaje de conceptos de
                        ReactJS y Firebase.
                    </p>
                    <hr class="my-4" />
                    <blockquote class="blockquote">
                        <footer class="blockquote-footer"><cite title="Source Title">Brayan Altamar</cite></footer>
                    </blockquote>
                </div>
            </div>
        )
    }
}


export default About