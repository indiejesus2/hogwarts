import React from 'react'

const Hogs = props => {

    const imgs = {}

    function importAll(r) {
        r.keys().forEach((key) => (imgs[key] = r(key)));
    }

    importAll(require.context(`../hog-imgs`, true))
    return(
        <div>
            <h1>Hogs</h1>
            {props.hogs.map(hog =>
            <div className="pigTile">
                <h3>{hog.name}</h3>
                <img src={require(`../hog-imgs/${hog.name.split(" ").join("_").toLocaleLowerCase()}.jpg`)} alt={hog.name}/>
            </div>
                )}
        </div>
    )
}

export default Hogs