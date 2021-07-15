import './App.css';
import Numbers from "./numbers/numbers";
import {Component} from "react";

class App extends Component {

    state = {
        numbers: []
    }


    newNumbers = () => {
        this.state.numbers.length = 0;
        for (let i = 0; i < 5; i++) {
            const randomNumber = Math.floor(Math.random() * (36 - 5)) + 5;
            this.state.numbers.push(randomNumber);
        }
        this.state.numbers.sort((a, b) => a > b ? 1 : -1)
        const numbers = this.state.numbers;
        this.setState({numbers});
        console.log(this.state.numbers)
    }

    render() {
        return (
            <div className="container">

                <div className="btn-container">
                    <button onClick={this.newNumbers} className='btn'>New numbers</button>
                </div>

                <div className='numbers_container'>
                    <Numbers number={this.state.numbers[0]}/>
                    <Numbers number={this.state.numbers[1]}/>
                    <Numbers number={this.state.numbers[2]}/>
                    <Numbers number={this.state.numbers[3]}/>
                    <Numbers number={this.state.numbers[4]}/>
                </div>

            </div>
        );
    }
}

export default App;
