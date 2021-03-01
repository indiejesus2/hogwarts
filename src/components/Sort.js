import React, { Component } from 'react'

class Sort extends Component {




    render() {
        return (
            <div>
                <select onChange={this.props.handleSort}>
                    <option defaultValue={null}></option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
                <input type="checkbox" onChange={this.props.greasedUp}  /> Greasy
            </div>
        )
    }
}

export default Sort