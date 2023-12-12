import { Component } from "react";

class StateClass extends Component
{
    state={
        color:"yellow",
        price:12334
    }

    handleChange=() => {this.setState({color:"Red"})}
    render()
    {
        return(
            <div>
                <p>the color is {this.state.color}  the price is {this.state.price}</p>
                <button onClick={this.handleChange}>change me</button>
            </div>
        )
    }
}
export default StateClass;