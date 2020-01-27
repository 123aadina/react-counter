import React,{ } from 'react'
import Number from './Number'

export default class Counter extends React.Component{

    constructor(props) {
        super(props) 
            this.state = { counter: props.start
                , show: true,
                 text:"hi"
                }
    }

    incrementCounter= ()=>{
       
        this.setState(prevState => {
           return {counter:prevState.counter + 1} 
        })  
    }

    decrementCounter =()=>{
        this.setState(prevState => {
            return {counter:prevState.counter - 1} 
         }) 

    }

    render() {
      
        return(
            <div>
            <h2>My React Counter</h2>
            <h2>{this.state.counter}</h2>
            <Number counterNumber=
                {this.state.counter}
            />
               <button onClick=
               {this.incrementCounter}>
                increase +1 
               </button>
               <button onClick=
               {this.decrementCounter}>
                decrease -1
               </button>
            </div>
        )

    }

}