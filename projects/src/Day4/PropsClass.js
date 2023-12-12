import { Component } from "react";

class PropsClass extends Component
{
    render()
    {
        return(
            <div>
                <p>hi {this.props.name},have a good day</p>
            </div>
        )
    }
}
export default PropsClass;