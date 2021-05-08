import './App.css';
import React, {Component} from 'react';
import GroupResults from './components/groupResults';

class App extends Component {

    state = {
        groupResultsResponse: {
            groupResults: []
        }
    }

    componentDidMount() {
        fetch('https://cutshot-next-groups-backend.herokuapp.com/api/nextGroups')
            .then(res => res.json())
            .then((data) => {
                this.setState({groupResultsResponse: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <div id="groupResultResponse">
                <div className="header-left">
                    <p className="fw-bolder fs-5">
                        {this.state.groupResultsResponse.tournament}
                    </p>
                </div>
                <GroupResults groupResultsResponse={this.state.groupResultsResponse.groupResults}/>
            </div>
        )
    }
}

export default App;
