
import { Component } from "react/cjs/react.production.min"

class Counter extends Component {

    state = {
        currentValue: 0,
    }

    render() {
        const { currentValue } = this.state

        const calculateDigit = () => {
            this.setState({
                currentValue: currentValue + 1
            })
        }

        return (
            <div className="container text-center pt-5">
                <h1 className="text-primary">Button has been clicked <span className="font-weight-bold text-dark"> {currentValue} </span>times</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <button className="btn btn-outline-primary" onClick={calculateDigit}>Click here</button>
            </div>
        )
    }

}
export default Counter