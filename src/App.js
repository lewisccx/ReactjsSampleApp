


import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends Component {
    
       //props is read only and global value
    //state is read and writable and internal to its component only
    state = { 
        counters:[
           {id:1, value: 4}, 
           {id:2, value: 0}, 
           {id:3, value: 0}, 
           {id:4, value: 0}, 
        ]
     }

     //mounting phrase
     constructor(props){
         super(props);
         console.log('App - Constructor', this.props)
     }

     componentDidMount(){
         // do Ajax call
         // setState
         console.log('App - mounted')
     }

     handleReset = () => {
            const counters = this.state.counters.map(c => {
                c.value = 0;
                return c;
            });
            this.setState({counters: counters})
     }
     handleDelete = (counterId) => {
         console.log("EventHandler called", counterId)
         const counters = this.state.counters.filter(c => c.id !== counterId)
       
         this.setState({counters: counters})
     }

     handleIncrement = counter => {
        
        //copy counters
        const counters = [...this.state.counters]
        //find index
        const index = counters.indexOf(counter);
        console.log(index)

        counters[index] = {...counter};
        counters[index].value++
        this.setState({
            counters : counters
        })
        
     }

    render() { 
        console.log('App - Rendered')
        return (
           <React.Fragment>
            <NavBar totalCounters = {this.state.counters.filter( c=> c.value >0).length} />
            <main className="container">
                <Counters 
                onReset={this.handleReset}
                onIncrement = {this.handleIncrement}
                onDelete = {this.handleDelete}
                counters = {this.state.counters}    
                />
            </main>
           </React.Fragment>  
    
         );
    }
}
 
export default App;