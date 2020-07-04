import React, { Component } from 'react';
//stateless functional component
//convert class to function if only render() is used

//1st way to write funcional component
const NavBar = ({totalCounters}) => {
    console.log('NavBar - Rendered');
    return (
       
        <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
       NavBar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
       </nav>


    )
}

//2nd way to write funcional component
// const NavBar = props => {

//     return (
//         <nav className="navbar navbar-light bg-light">
//         <a href="#" className="navbar-brand">
//        NavBar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
//         </a>
//        </nav>


//     )
// }



// class NavBar extends Component {
    
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//             <a href="#" className="navbar-brand">
//            NavBar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//             </a>
//            </nav>
       
//          );
//     }
// }
 
export default NavBar;