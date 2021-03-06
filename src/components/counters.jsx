import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {

    state = {

        counters: [

            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 },

        ]

    };

    handleDelete = (CounterId) => {
        console.log('handler raised', CounterId);
    }

    render() { 

        return (
            
            <div>
                { this.state.counters.map(
                    counter => ( 
                        <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}>
                            <h4>No. {counter.id}</h4>
                        </Counter> 
                    ) 
                ) }
            </div>

        );
        
    }
}
 
export default Counters;