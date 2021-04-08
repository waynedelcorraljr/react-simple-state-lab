import React from 'react';

export default class Cell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
        // console.log(this.state.color)
    }

    switchValue = () => {
       return this.setState({color: '#333'});
    }

    render() {
        console.log(this.state.color)
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={ this.switchValue } ></div>
        )
    }
}