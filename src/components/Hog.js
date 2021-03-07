import React, {Component } from 'react'

class Hog extends Component {

    state = {
        showDetails: false,
        hidePig: false

    }
    handleClick = () => {
        this.setState(prevState => {
            return {
                showDetails: !prevState.showDetails
            }
        })
    }

    details = () => {
        const {specialty, weight, greased} = this.props.hog
        const medal = this.props.hog['highest medal achieved']
        return (
            <div>
                <p>Specialty: {specialty} </p>
                <p>Weight: {weight} </p>
                <p>Medal: {medal} </p>
                <p>{ greased ? "greased up" : "bone dry"}</p>
            </div>
        )
    }

    handleDisplay = () => {
        this.setState(prevState => {
            return {
                hidePig: !prevState.hidePig
            }
        })
    }

    keepDisplay = () => {
        if(this.state.hidePig == 1) {
            return <button onClick={this.handleDisplay}>+</button>
        } else {
            return <button onClick={this.handleDisplay}>-</button>
            
        }
    }

    render() {
        return(
                <div className="pigTile" onClick={this.handleClick} >
                    <img src={require(`../hog-imgs/${this.props.hog.name.split(" ").join("_").toLocaleLowerCase()}.jpg`)} alt={this.props.hog.name} style={{display: this.state.hidePig ? 'none' : 'inline'}}/>
                    <h3>{this.props.hog.name}</h3>
                    { this.state.showDetails ? this.details() : null }
                    {this.keepDisplay()}
                </div>
            )
    }
}

export default Hog