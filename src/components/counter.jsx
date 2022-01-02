import React, { Component } from 'react'

class Counter extends React.Component {

    state = {

        value: this.props.value,

    };
    

    handleIncrement = () => {

        this.setState({ value: this.state.value + 1 })
        
    };

    render() { 

        return (
            
            <div>
                { this.props.children }
                <span className={this.getBadgeColor()}>{this.countFormat()}</span>
                <button onClick={this.handleIncrement} className='btn btn-primary btn-sm'>Add</button>
                <div onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2"> Discard</div>
            </div>

        );

    };

    getBadgeColor() {

        let color = 'badge m-3 bg-';
        color += this.state.value === 0 ? 'warning' : 'success';
        return color;

    };

    countFormat() {

        const {value} = this.state; 
        return value === 0 ? 'Zero' : value;

    };
    
}
 
export default Counter;