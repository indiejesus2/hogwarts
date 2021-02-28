import React, { Component } from 'react'

import Hog from './Hog.js'

// class Hogs extends Component {

//     handleClick = (hog) => {
//         return <Hog hog={hog}/>


//     }
//     // const imgs = {}

//     // function importAll(r) {
//     //     r.keys().forEach((key) => (imgs[key] = r(key)));
//     // }

//     // importAll(require.context(`../hog-imgs`, true))
//     render() {

//         )
//     }
// }
const Hogs = (props) => {
    return (
        <div className="ui grid container">
            <div className="ui four wide column">
            {props.hogs.map(hog => (<Hog key={hog.name} hog={hog} />))}
            </div>
        </div>
    )
}

export default Hogs