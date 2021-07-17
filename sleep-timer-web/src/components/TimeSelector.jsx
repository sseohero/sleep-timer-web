class TimeSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hour: "10",
            minute: "00",
            isAM: true,
        }
    }

    // method to handle hour changes
    handleHourChange(e) {
        this.setState({hour: e.target.value})
    }

    handleMinuteChange(e) {
        this.setState({minute: e.target.value})
    }

    render() {
        return (
            <div>
              <h1>I'm going to bed at:</h1>
              <form>
                <input value={this.state.hour} onChange={this.handleHourChange} ontype="text"/>
                <input value={this.state.minute} onChange={this.handleMinuteChange} type="text"/>
              </form>
            </div>
        );
    }
}
