import React, { Component } from 'react';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
     
        };
   
    }

    componentDidMount(){
        console.log("aa", this.props)
    }

    render() {
        return (
            <React.Fragment>
                Home 
            </React.Fragment>
       
        );
    }

}


export default Home;

