import React from 'react'

const Sort = (props) => {

    return (
        <div>
            <select onChange={props.handleSort}>
                <option value="name">Name</option>
            </select>
        </div>
    )
}

export default Sort