import React, {Component} from "react"

class Clock extends Component{
    constructor(props){
        super(props)
        this.state={
            date: Date.now()
        }
        this.hola=this.hola.bind(this)
    }

    hola(){
        alert("sa")
    }

    render(){
        return(
            <h1>hola mundo!! :v</h1>
        );
    }
}

export default Clock