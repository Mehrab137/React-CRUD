import React, { Component } from 'react'

class Counter extends React.Component {

    state = {
        count: 0
    }

    render() { 

        return (
            <div>
                <span className={this.getBadgeColor()}>{this.countFormat()}</span>
                <button className='btn btn-primary btn-sm'>Increment</button>
            </div>
        );

    }

    getBadgeColor() {
        let color = 'badge m-3 bg-';
        color += this.state.count === 0 ? 'warning' : 'success';
        return color;
    }

    countFormat()
    {
        const {count} = this.state; 
        return count === 0 ? 'Zero' : count;
    }
    
}
 
export default Counter;