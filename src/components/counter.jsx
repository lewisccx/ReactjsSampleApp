import React, { Component } from 'react';

class Counter  extends Component {
    //data
    state = {
        address : {
            postcode: 518415
        } ,
        count: 0,
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
        return ( 
        <React.Fragment>
            <img src={this.state.imageUrl} alt=""/>
            <span style={this.styles} className={this.formatBadge()}>
                {this.formatCount()}</span>

            <button onClick={ () => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            {/* true and string, print string */}
            {this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()}
        
        </React.Fragment> 
        )
    }

    //methods


    handleIncrement = (product) =>{
        console.log("handled click", product)
        //update view
        this.setState({ count: this.state.count++})
    }

    renderTags(){
        const { tags } = this.state
        if(this.state.tags.length === 0) return <p>There are no tags</p>
        return  <ul>{this.state.tags.map( tag => <li key={tag}> {tag}</li>)}</ul> 
    }

    formatBadge(){
        let badgeClasses = "badge m-2 badge-"
        return badgeClasses += (this.state.count === 0) ? "primary" : "warning"
    }
    formatCount(){
        const { count } = this.state
        return count === 0 ? <h1>Zero</h1> : count
    }
}
 
export default Counter ;