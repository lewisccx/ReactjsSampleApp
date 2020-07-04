import React, { Component } from 'react';

class Counter  extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log('presProps', prevProps)
        console.log('prevState', prevState)
    }

    componentWillUnmount(){
        console.log('Counter - unmounted')
    }
    //data
    state = {
        address : {
            postcode: 518415
        } ,
        //count: this.props.counter.value,
        tags:['tag1','tag2', 'tag3'],
        imageUrl: "https://picsum.photos/200"
    }

    styles = {
        fontSize: 100,
        fontWeight: "bold"
    }

    //traditional method to hanle event
    // constructor(){
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    //view
    render() { 
        console.log('Counter - Rendered');
        return ( 
        <React.Fragment>
            <img src={this.state.imageUrl} alt=""/>
           <h4>Counter #{this.props.counter.id}</h4>
            <span style={this.styles} className={this.formatBadge()}>
                {this.formatCount()}</span>

                <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            
            {/* true and string, print string */}
            {this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()}
        
        </React.Fragment> 
        )
    }

    //methods
    // doHandleIncrement = () =>{
    //     this.handleIncrement({ id: 1})
    // }
    // handleDecrement = product => {
    //     //this.setState({ count: this.props.counter.value - 1 })
    // }
    // handleIncrement = product =>{
    //     console.log("handled click", product)
    //     //update view
    //     this.setState({ count: this.props.counter.value + 1 })
    // }

    renderTags(){
        const { tags } = this.state
        if(this.state.tags.length === 0) return <p>There are no tags</p>
        return  <ul>{this.state.tags.map( tag => <li key={tag}> {tag}</li>)}</ul> 
    }

    formatBadge(){
        let badgeClasses = "badge m-2 badge-"
        return badgeClasses += (this.props.counter.value === 0) ? "primary" : "warning"
    }
    formatCount(){
        const { value } = this.props.counter
        return value === 0 ? <h1>Zero</h1> : value
    }
}
 
export default Counter ;