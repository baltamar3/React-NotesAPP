import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//components
import Card from './components/Card.js';
import Navbar from './components/globals/Navbar.js';
import TaskForm from "./components/TaskForm.js"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"

//config
import { DBConfi } from "./config/config.js"

//data
//import { tasks } from "./data/task";
import firebase from "firebase"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            tasks: []
        }

        this.app = firebase.initializeApp(DBConfi)
        this.databaseServices = this.app.database()
        this.collectionTask = this.databaseServices.ref().child("tasks")

        this.handdleBtnClick = this.handdleBtnClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }

    componentDidMount() {
        let { tasks } = this.state
        this.collectionTask.on("child_added", snap => {
            tasks.push({
                id: snap.key,
                titulo: snap.val().titulo,
                descripcion: snap.val().descripcion,
                prioridad: snap.val().prioridad
            })
            this.setState({ tasks })
        })

        this.collectionTask.on("child_removed", snap => {
            for (let index = 0; index < tasks.length; index++) {
                if (tasks[index].id === snap.key) {
                    tasks.splice(index, 1)
                }
            }
            this.setState({ tasks })
        })

    }

    handdleBtnClick() {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleSubmit(task) {
        /*this.setState({
            tasks:[...this.state.tasks, task]
        })*/
        this.collectionTask.push().set({
            titulo: task.titulo,
            descripcion: task.descripcion,
            prioridad: task.prioridad
        })
    }

    removeTask(id) {
        if (window.confirm("Estas seguro de eliminar?")) {
            /*this.setState({
                tasks: this.state.tasks.filter((task,i)=>{
                    return index!==i
                })
            }) */
            this.collectionTask.child(id).remove()
        }
    }

    render() {
        console.log(this.state.visible)
        let btn;
        btn = <button onClick={this.handdleBtnClick} className="btn btn-primary mb-3">
            {this.state.visible ? "Cacelar" : "Nuevo"}
        </button>



        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" exact render={() =>
                            <Home>
                                <Navbar title="Aplicación de tareas" tasksLength={this.state.tasks.length} />
                                <div className="container">
                                    {btn}
                                    <TaskForm visible={this.state.visible} handleSubmit={this.handleSubmit} />
                                    <div className="jumbotron">
                                        <h1 className="text-success">Lista de tareas</h1>
                                        <hr />
                                        <Card tasksData={this.state.tasks} removeTask={this.removeTask} />
                                    </div>
                                </div>
                            </Home>}>
                        </Route>
                        <Route path="/about/" component={About}></Route>
                    </Switch>

                </Router>
            </div>
        );
    }
}

export default App;
