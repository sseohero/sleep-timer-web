import React from 'react';

class TimeSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hour: "10",
            minute: "00",
            timeOfDay: "am",
        }

        this.handleHourChange = this.handleHourChange.bind(this)
        this.handleMinuteChange = this.handleMinuteChange.bind(this)
        this.handleTimeOfDayChange = this.handleTimeOfDayChange.bind(this)
    }

    // method to handle hour changes
    handleHourChange(e) {
        this.setState({hour: e.target.value})
    }

    // method to handle minute changes
    handleMinuteChange(e) {
        this.setState({minute: e.target.value})
    }

    // method to handle time of day change
    handleTimeOfDayChange(e) {
        this.setState({timeOfDay: e.target.value})
    }

    render() {
        return (
            <div>
              <h1>I'm going to bed at:</h1>
              <form>
                <input value={this.state.hour} onChange={this.handleHourChange} ontype="text"/>
                <input value={this.state.minute} onChange={this.handleMinuteChange} type="text"/>
                <select value={this.state.timeOfDay} onChange={this.handleTimeOfDayChange} name="am-pm" id="am-pm">
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
              </form>
            </div>
        );
    }
}

export default TimeSelector;
