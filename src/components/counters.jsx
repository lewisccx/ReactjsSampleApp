import React, { Component } from 'react';
import Counter from "./counter"
import { waitForDomChange } from '@testing-library/react';

class Counters extends Component {

   
    render() {
      console.log('Counters - Rendered');
        const {onReset, onDelete, onIncrement, counters} = this.props
        return (
        <div>
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
          {counters.map( counter => 
          
          <Counter

                key ={counter.id} 
                counter={counter} 
                onDelete={onDelete}
                onIncrement ={onIncrement} 
                >
              <h3>Counter #{counter.id}</h3>
              <h4>subtitle</h4>
              </Counter>
              )}
        </div>  );
    }
}
 
export default Counters;