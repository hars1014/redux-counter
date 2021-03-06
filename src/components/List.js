import React, { Component } from "react";

class List extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const arr = [1, 2, 3, 5, 6];
        const listElements = arr.map((value, index) => {
            return <li key={index}>{value}</li>;
        });
        return(
            <div>
                <ul>{listElements}</ul>
            </div>
         );
    }
}

export default List;