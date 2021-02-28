import React, {Component } from 'react'

class Hog extends Component {

    state = {
        showDetails: false
        
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

    render() {
        return(
                <div className="pigTile" onClick={this.handleClick}>
                    <img src={require(`../hog-imgs/${this.props.hog.name.split(" ").join("_").toLocaleLowerCase()}.jpg`)} alt={this.props.hog.name} />
                    <h3>{this.props.hog.name}</h3>
                    { this.state.showDetails ? this.details() : null }
                </div>
            )
    }
}

export default Hog